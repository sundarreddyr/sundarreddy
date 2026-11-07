"""Validate the static site's deployment inputs without third-party packages."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json

root = Path('dist').resolve()
class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f"Duplicate ID: {attrs['id']}"
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.refs.append(attrs[key])

page = Page()
page.feed((root / 'index.html').read_text())
for ref in page.refs:
    url = urlsplit(ref)
    if url.scheme or url.netloc or not url.path:
        continue
    assert not url.path.startswith('/'), f'Root-relative URL breaks project Pages: {ref}'
    target = (root / unquote(url.path)).resolve()
    assert target.is_relative_to(root) and target.is_file(), f'Missing local asset: {ref}'
assert {'project-dialog', 'dialog-content', 'close-project', 'theme'} <= page.ids
manifest = json.loads(Path('.openai/hosting.json').read_text())
assert manifest['static']['directory'] == 'dist'
assert manifest['project_id'] == 'appgprj_6ae46619f6508191b4ec6eaba8959134'
assert (root / 'assets/Sundar_Reddy_Resume.pdf').read_bytes().startswith(b'%PDF-')
assert not any(p.is_symlink() for p in root.rglob('*')), 'Do not deploy symlinks'
print('Static assets, HTML IDs, resume, project-relative paths, and Sites identity verified.')
