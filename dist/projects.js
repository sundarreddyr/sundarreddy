// Content grounded in the resume and project discussions; dates describe role periods.
window.portfolioProjects = [
  {
    "id": "agentic",
    "mark": "AE",
    "name": "Agentic Engg",
    "company": "Trumetric.AI",
    "dates": "Apr 2026 — Present",
    "period": "Role period",
    "draft": false,
    "summary": "Building the practices around coding agents so a team can deliver reliable software: clear plans, persistent context, review gates, and human oversight.",
    "stack": [
      "Claude Code",
      "Codex",
      "Spec-driven development",
      "Context engineering",
      "GitHub reviews",
      "Human-in-the-loop"
    ],
    "bullets": [
      [
        "Taking over",
        "Inherited a largely agent-written modular monorepo during client onboarding. Took responsibility for turning the codebase into a production-ready product while leading a team with a mix of graduate and experienced engineers."
      ],
      [
        "Team delivery",
        "Planned sprints, delegated work around individual strengths, and provided architecture guidance. Aligned developers, QA, and DevOps through testing and deployment, and led client discussions during onboarding and go-live."
      ],
      [
        "Spec-driven development",
        "Large agent-generated features produced PRs spanning 50–80 files. Introduced implementation specs and staged PR plans, targeting 20–25 files per PR so changes could be understood and reviewed in manageable steps."
      ],
      [
        "Agent review loops",
        "Three to four incoming PRs a day created a review bottleneck alongside architecture and delivery work. Introduced mandatory agent-assisted GitHub reviews with human-in-the-loop oversight."
      ],
      [
        "Developer understanding",
        "Required developer walkthroughs to check that the team understood the code agents produced and how it fit the architecture. Brought QA into the delivery workflow to validate changes before release."
      ],
      [
        "Persistent context",
        "Addressed context loss between coding sessions with persistent repository memory and project documentation, giving agents a maintained reference for architecture and implementation decisions."
      ],
      [
        "Bug and tech-debt reporting",
        "Introduced agent-assisted reporting for bugs, security issues, and technical debt so problems could be surfaced alongside ongoing feature work."
      ],
      [
        "Hands-on intervention",
        "Initially handled much of the backend implementation and issue resolution alongside architecture and deployments. As the team grew, delegated more feature work while staying hands-on with critical delivery blockers."
      ]
    ],
    "companyUrl": "https://www.trumetric.ai/",
    "role": "Technical Lead · Team of 5"
  },
  {
    "id": "trusearch",
    "mark": "TS",
    "name": "Trusearch",
    "company": "Trumetric.AI",
    "role": "Technical Lead · Team of 5",
    "dates": "Apr 2026 — Present",
    "period": "Role period",
    "summary": "Privacy-first enterprise search for CMS websites, combining fast onboarding, hybrid retrieval, AI summaries, and client-controlled deployments.",
    "stack": [
      "Java / Quarkus",
      "OpenSearch",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Caffeine",
      "S3 / CloudFront",
      "Cognito",
      "EC2",
      "Docker Compose",
      "Neural sparse retrieval",
      "ONNX",
      "vLLM",
      "MCP"
    ],
    "bullets": [
      [
        "Product ownership",
        "Took over TruSearch’s agent-first codebase and led a team of five toward production readiness, owning architecture, client requirements, deployment decisions, and sprint delivery."
      ],
      [
        "Privacy-first architecture",
        "Kept the search engine and indexed content in client infrastructure, with a centralized platform managing tenant administration, API keys, plans, and usage limits. Supported client-specific deployment requirements, including private-network hosting."
      ],
      [
        "Client onboarding",
        "Led client discussions throughout onboarding and go-live, translating feedback into implementation priorities and working through integration and deployment blockers with the team."
      ],
      [
        "Lexical-first indexing",
        "Led one-click CMS onboarding that made approximately 10,000 documents searchable within three minutes and initialized the search widgets. Generated vector embeddings asynchronously so keyword search did not have to wait for semantic indexing."
      ],
      [
        "Domain relevance",
        "Worked with multilingual-e5-small and MedEmbed-small for embeddings. Evaluated domain-specific models for medical content and used structural chunking and index-time analyzers to improve retrieval relevance and recall."
      ],
      [
        "Hybrid retrieval",
        "Combined BM25 lexical search, HNSW-based vector search, and neural sparse retrieval using opensearch-neural-sparse-encoding-doc-v3-gte. Supported search-as-you-type, suggestions, and popular searches with search p95 latency below 300 ms."
      ],
      [
        "Reranking and caching",
        "Implemented cross-encoder reranking with ms-marco-MiniLM-L-6-v2 and ONNX, which initially increased latency roughly tenfold. Bounded the reranking workload and added Caffeine L1 caching, bringing cached responses to around 300 ms."
      ],
      [
        "RAG-based AI Overview",
        "Built AI Overview with GPT 5.6-luna to summarize top-k search results with source citations, client-configurable prompts, and contextual CTAs such as booking an appointment."
      ],
      [
        "Open-weight model serving",
        "Deployed and evaluated IBM Granite 4.1-8B using vLLM on an EC2 g6.2xlarge instance as a self-hosted alternative for AI summaries."
      ],
      [
        "MCP integration",
        "Built a tenant-scoped MCP server so clients could ask Claude about their business analytics and search their content directly within the conversation."
      ],
      [
        "Agentic search exploration",
        "Explored OpenSearch’s agentic search capabilities for generating Query DSL from natural-language requests, using index mappings and sample documents as context."
      ],
      [
        "Low-code widgets",
        "Designed a widget builder that generated JavaScript and CSS assets hosted on S3 and served through CloudFront, making search easier to embed in existing CMS websites."
      ],
      [
        "GEO research",
        "Researched Generative Engine Optimization and guided the marketing team on relevant developments and practices."
      ]
    ],
    "liveUrl": "https://www.hcghospitals.com/",
    "liveLabel": "Explore my live work at HCG Hospitals",
    "companyUrl": "https://www.trumetric.ai/",
    "projectUrl": "https://www.drupalreleases.com/project/search-api-trusearch",
    "inlineLinks": [
      {
        "text": "vector embeddings",
        "url": "https://huggingface.co/abhinand/MedEmbed-small-v0.1"
      }
    ]
  },
  {
    "id": "grower",
    "mark": "LG",
    "name": "Grower App",
    "company": "Livine · Poultry ERP",
    "role": "Technical Lead",
    "dates": "Apr 2025 — Apr 2026",
    "period": "Role period",
    "summary": "An offline-first mobile app for breeder-farm weighing, analytics, and projections.",
    "stack": [
      "Flutter / Dart",
      "Java / Quarkus",
      "BLE",
      "MySQL",
      "Python / FastAPI",
      "Pandas",
      "SciPy",
      "Scikit"
    ],
    "bullets": [
      [
        "Ownership",
        "Owned the design and delivery of the Smart Grower App with Flutter and Quarkus to automate breeder-farm operations, reduce manual work, and provide analytics and projections."
      ],
      [
        "Client engagement",
        "Managed requirements through on-site implementation, guiding users, troubleshooting issues, and incorporating client feedback."
      ],
      [
        "Data processing",
        "Captured scale readings over BLE with the phone in the operator’s pocket. Used sliding-window standard deviation to identify stable weights from readings at roughly 200 ms intervals, removing the need for a separate paper record-keeper."
      ],
      [
        "Offline operation & concurrency",
        "Built an offline-first weighing workflow for poor connectivity, processing approximately one bird every three seconds and syncing in batches when connectivity improved. Supported more than ten concurrent users and up to 50,000 birds per farm per day."
      ],
      [
        "Predictive analytics",
        "Made analytics available immediately after synchronization, replacing an evening or next-day wait. Used a Gompertz growth model and SciPy curve fitting to generate farm-specific weekly body-weight targets."
      ]
    ],
    "companyUrl": "https://www.livine.io/",
    "projectUrl": "https://www.livine.io/grower-app",
    "inlineLinks": [
      {
        "text": "Smart Grower App",
        "url": "https://www.livine.io/grower-app"
      }
    ],
    "liveUrl": "https://www.livine.io/grower-app",
    "liveLabel": "Explore the Livine Grower App",
    "videoUrl": "https://www.youtube.com/watch?v=9W_Rfoq-JNA",
    "videoLabel": "Watch the app walkthrough"
  },
  {
    "id": "finance",
    "mark": "LF",
    "name": "Livine Finance",
    "company": "Livine · Poultry ERP",
    "role": "Technical Lead · Team of 3",
    "dates": "Apr 2025 — Apr 2026",
    "period": "Role period",
    "summary": "An accounting module connecting ERP activity, bank statements, and payment providers.",
    "stack": [
      "Java / Quarkus",
      "Hibernate",
      "Envers",
      "MySQL",
      "Cognito",
      "SNS / SQS",
      "AWS Textract",
      "Claude on Bedrock"
    ],
    "bullets": [
      [
        "Leadership",
        "Led a team of three to build the accounting module from scratch, owning client requirements, solution design, sprint planning, and delivery."
      ],
      [
        "Event-driven accounting",
        "Integrated AWS SNS and SQS to asynchronously consume purchase and sale events and create journal entries, removing manual re-entry into Tally."
      ],
      [
        "PDF extraction",
        "Built a cost-effective alternative to third-party statement processing with AWS Textract and Claude on Bedrock, extracting transactions from PDFs and creating payment and receipt entries."
      ],
      [
        "Webhooks",
        "Designed a pluggable provider SPI for integrations such as Greenorange and Razorpay to automate receipt creation. Implemented signature verification and idempotency to validate events and prevent duplicate entries."
      ]
    ],
    "companyUrl": "https://www.livine.io/"
  }
  ,{
  "id": "analytics",
  "mark": "LA",
  "name": "Livine Analytics",
  "company": "Livine · Poultry ERP",
  "companyUrl": "https://www.livine.io/",
  "summary": "Building the ERP’s analytics foundation—and helping it grow.",
  "stack": [
    "MySQL",
    "ClickHouse",
    "Python / FastAPI",
    "Java / Quarkus"
  ],
  "bullets": [],
  "story": [
    "I joined Livine in <strong><em>2022 as its second SWE</em></strong>, with the ERP’s analytics engine as my first major assignment. Over the next <strong><em>1.5 years</em></strong>, I built 300+ reports, dashboards, and analytical touchpoints spanning operational reporting, trends, and predictions.",
    "The work ranged from SQL reports in Metabase and a custom builder to Python services built with FastAPI and SQLAlchemy. Pandas, Openpyxl, and SciPy supported the data processing, Excel reporting, and trend predictions behind them.",
    "As more clients came onboard, keeping that report inventory consistent became a challenge of its own. Updates and deletions needed to reach the right tenants, while each division needed its own selection of reports. I built <strong><em>Livine Central</em></strong> to manage report versions and tenant configurations in one place, then synchronize the relevant changes across deployments.",
    "Growing data volumes brought another constraint. Analytical queries on MySQL were taking over a minute and beginning to affect transactional writes. I led the migration of analytical reads to <strong><em>ClickHouse</em></strong>, bringing report loads down to <strong><em>2–3 seconds</em></strong> while keeping transactions on MySQL.",
    "For recurring calculations, I used pre-computed tables populated by overnight jobs and selected jobs running <strong><em>every ten minutes</em></strong>. Execution-status tracking and alerts through Amazon SNS and SES helped surface failed or missed runs. Alongside this, I worked on query optimization, views, and partitioning across the data layer."
  ],
  "technicalNote": "That separation also meant adapting how we handled changing data. I made targeted changes to <code>mysql_ch_replicator</code> for replication and handled updates and deletions through new versioned records in our ClickHouse data model."
}
];
