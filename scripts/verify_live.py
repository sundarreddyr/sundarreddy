"""Compare live core files and resume with the checked-out deployment inputs."""
import argparse
import hashlib
import os
from pathlib import Path
import time
from urllib.request import Request, urlopen

parser = argparse.ArgumentParser()
parser.add_argument('url')
parser.add_argument('--attempts', type=int, default=1)
parser.add_argument('--allow-drift', action='store_true')
args = parser.parse_args()
paths = ['index.html', 'app.js', 'projects.js', 'style.css', 'favicon.svg', 'assets/Sundar_Reddy_Resume.pdf']
errors = []
for attempt in range(args.attempts):
    errors = []
    for path in paths:
        try:
            req = Request(args.url.rstrip('/') + '/' + path, headers={'Cache-Control': 'no-cache', 'User-Agent': 'portfolio-deployment-check'})
            with urlopen(req, timeout=20) as response:
                actual = response.read()
            expected = (Path('dist') / path).read_bytes()
            if hashlib.sha256(actual).digest() != hashlib.sha256(expected).digest():
                errors.append(f'{path}: deployed content differs')
        except Exception as exc:
            errors.append(f'{path}: {exc}')
    if not errors:
        break
    if attempt + 1 < args.attempts:
        time.sleep(10)
status = 'MATCHES this revision' if not errors else 'NOT verified against this revision'
summary = f'### {args.url}\n\n{status}\n\n' + '\n'.join(f'- {e}' for e in errors) + '\n'
print(summary)
if os.environ.get('GITHUB_STEP_SUMMARY'):
    with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as file:
        file.write(summary)
if errors:
    if args.allow_drift:
        print('::warning::ChatGPT mirror is unavailable or differs from this GitHub revision. Publish through Sites; this job does not deploy it.')
    else:
        raise SystemExit(1)
