export const profile = {
  name: "Bijaya Kumar Pariyar",
  initials: "BP",
  role: "AI/ML Engineer & Data Scientist",
  eyebrow: "Sole Architect — AI/ML Systems",
  location: "Kathmandu, Nepal",
  email: "bijaybeezoe@gmail.com",
  phone: "+977-9767645335",
  availability: "Open to senior engineering roles",
  links: {
    github: "https://github.com/bijay-odyssey",
    linkedin: "https://www.linkedin.com/in/bijaya-kumar-pariyar-45329437a/",
    kaggle: "https://www.kaggle.com/bijaybeezoe",
  },
  stats: [
    { value: "6", label: "Platform capabilities" },
    { value: "20+", label: "ML projects" },
    { value: "45", label: "GitHub repos" },
    { value: "23", label: "Kaggle notebooks" },
  ],
};

export const heroCopy = {
  headline: "Designing production-grade AI systems.",
  sub: "Architecting secure, deterministic AI pipelines for commercial fintech — bridging the gap between RAG experimentation and enterprise-scale reliability.",
};

export const story = {
  paragraphs: [
    "I'm a self-taught engineer from Nepal who cold-emailed a US fintech and, during a Data Scientist internship, became sole architect of their core AI underwriting platform — all while completing a BCA degree.",
    "What started as curiosity about data turned into a full journey through the ML and AI ecosystem. I went from training my first Random Forest to designing production-grade RAG systems and multi-LLM orchestration layers, without a formal CS degree, driven entirely by self-study and shipping real projects. When I believed I was ready, I reached out to a US-based commercial real estate fintech directly. They gave me a shot, and I made it count.",
    "During a six-month Data Scientist internship, I became sole architect, developer, and deployment owner of the core AI platform for commercial real estate lending — authoring 150+ commits to the core service, roughly 70% of its recent production-branch history. The platform runs a RAG pipeline that classifies and extracts structured data from 20+ financial document types in 55–90 seconds end to end, multi-provider LLM orchestration (AWS Bedrock, Gemini, OpenAI) with fallback chains and a throttle-aware circuit breaker, and a deterministic credit-decision engine deliberately separated from LLM narrative generation — so model hallucination or prompt injection cannot alter a lending decision.",
    "In parallel, I shipped six additional production services, including a solo-built payments integration with signed webhooks, an internal knowledge-base RAG service, and an intake-to-offer valuation engine, and contributed to SOC 2 and NIST 800-53 readiness, designing the control matrix and audit-trail documentation. Independently, I also built a semantic code-search tool over a 42-repository organization, using tree-sitter AST chunking, local embeddings, Postgres/pgvector, and a custom MCP server integration.",
    "Underneath the production work is a deep classical-ML foundation: 20+ structured end-to-end projects across classification, regression, time series forecasting, clustering, and anomaly detection, including 1M+ rows for fraud detection and 1.7M+ rows for price forecasting. My approach combines rigorous evaluation, model explainability through SHAP, and reproducible research, including a published research preprint on SHAP-based feature selection.",
  ],
  values: [
    { title: "Rigorous", body: "Proper evaluation, CV splits, no data leakage. Results you can trust." },
    { title: "Explainable", body: "SHAP values and feature importance, so black-box outputs become actionable insights." },
    { title: "Production-ready", body: "Docker, FastAPI, JWT auth, rate limiting — models that actually ship." },
  ],
  quickInfo: [
    { label: "Education", value: "BCA, Tribhuvan University" },
    { label: "Location", value: "Kathmandu, Nepal" },
    { label: "Most recent role", value: "Data Scientist Intern · US CRE Fintech (remote)" },
    { label: "Availability", value: "Open to new opportunities" },
    { label: "Languages", value: "Nepali (native), English (professional)" },
    { label: "Interests", value: "AI research, RAG & agents, open source" },
  ],
};

export const capabilities = [
  {
    index: "01",
    title: "RAG & Document Intelligence",
    body: "Classifies and extracts structured fields from 24 document types (rent rolls, tax returns, appraisals, bank statements, leases) with OCR routing and content deduplication.",
    tags: ["Bedrock Nova", "Textract", "PyMuPDF"],
  },
  {
    index: "02",
    title: "Semantic Retrieval",
    body: "pgvector HNSW index over Titan v2 embeddings with CrossEncoder reranking, narrowing the candidate pool to genuinely relevant context for grounded generation.",
    tags: ["pgvector", "HNSW", "Reranking"],
  },
  {
    index: "03",
    title: "Deterministic Credit Engine",
    body: "Rule-based risk scoring across borrower qualification, financial underwriting (DSCR, LTV, NOI), and compliance — zero LLM in the critical decision path for auditability.",
    tags: ["DSCR / LTV / NOI", "Tiered scoring"],
  },
  {
    index: "04",
    title: "Multi-LLM Orchestration",
    body: "Per-task provider fallback across AWS Bedrock, Gemini, and OpenAI, with a coroutine-safe circuit breaker per provider (CLOSED → OPEN → HALF_OPEN) for automated failover.",
    tags: ["Bedrock", "Gemini", "OpenAI", "Circuit breaker"],
  },
  {
    index: "05",
    title: "Async Cloud Infrastructure",
    body: "Two-service stack (a FastAPI API and an async ARQ job worker) deployed to AWS ECS Fargate via GitHub Actions CI/CD, with connection pooling and multi-tier caching.",
    tags: ["ECS Fargate", "ARQ / Redis", "CI/CD"],
  },
  {
    index: "06",
    title: "Security & Reliability",
    body: "Authentication, webhook verification, SSRF defense, PII-safe structured logging, and per-route rate limiting, applied consistently across every API surface.",
    tags: ["JWT / HMAC", "SSRF defense", "PII redaction"],
  },
];

export const timeline = [
  {
    date: "Dec 2025 — Jul 2026",
    title: "Data Scientist Intern",
    org: "US-based Commercial Real Estate Fintech · Remote",
    body: "Sole architect, developer, and deployment owner of the core AI underwriting platform: a RAG document-intelligence pipeline, a deterministic credit-decision engine, multi-provider LLM orchestration with circuit breakers, and a two-service async stack on AWS ECS Fargate via GitHub Actions CI/CD.",
    tags: ["RAG", "Multi-LLM", "pgvector", "Circuit breakers", "FastAPI", "ECS Fargate"],
  },
  {
    date: "2024 — 2025",
    title: "Entering the AI & RAG ecosystem",
    org: "Self-directed research & projects",
    body: "Transitioned from classical ML to generative AI. Built RAG systems with FAISS and Qdrant, explored vector embeddings, cross-encoder reranking, and LLM API integration. Developed a production-grade Personal Knowledge Base RAG API.",
    tags: ["RAG", "Vector DBs", "Embeddings", "LLMs", "FastAPI"],
  },
  {
    date: "2025",
    title: "Research preprint published",
    org: "Independent research · Supervised by Marshal Basnet",
    body: "Published a preprint on SHAP-based feature selection and iterative hyperparameter tuning for customer churn prediction in telecommunication datasets, demonstrating interpretability and optimization in production ML models.",
    tags: ["SHAP", "Hyperparameter tuning", "Research"],
  },
  {
    date: "2023 — 2024",
    title: "Deep dive into ML",
    org: "Self-directed learning",
    body: "Built 20+ end-to-end ML projects spanning classification, regression, time series, clustering, and anomaly detection. Handled 1M+ row datasets, implemented SHAP explainability, and developed web applications around ML models including ChurnShield.",
    tags: ["Scikit-learn", "XGBoost", "LightGBM", "Flask", "SHAP"],
  },
  {
    date: "Expected 2026",
    title: "Bachelor of Computer Application (BCA)",
    org: "Divya Gyan College, Tribhuvan University · Kathmandu, Nepal",
    body: "Formal education in computer science fundamentals: algorithms, databases, programming, and software engineering — applied in parallel with independent data science and AI projects.",
    tags: ["Algorithms", "Databases", "Software engineering"],
  },
];

export const research = {
  badge: "Preprint · 2025",
  title:
    "SHAP-Based Feature Selection and Iterative Hyperparameter Tuning for Customer Churn Prediction in Telecommunication Datasets",
  body: "A two-iteration SHAP-based feature selection framework combined with iterative hyperparameter tuning, demonstrating improvements in interpretability and predictive performance across multiple classifiers on real-world telecom data. Supervised by Marshal Basnet — available on LinkedIn & ResearchGate.",
  tags: ["SHAP", "Hyperparameter tuning", "Churn prediction", "Telecom", "Explainability", "Random Forest"],
};

export const flagship = {
  title: "CRE Loan Underwriting Platform",
  meta: "Sole architect · developer · deployment owner · source private",
  body: "A production AI platform for commercial real estate lending that I solo-designed and shipped, turning raw financial documents into auditable credit decisions. Multi-LLM orchestration, a RAG document-intelligence pipeline, and a deterministic credit risk engine, deployed to AWS and supporting live loan applications.",
  stack: ["AWS Bedrock", "Textract", "pgvector / HNSW", "FastAPI", "ARQ / Redis", "ECS Fargate", "GitHub Actions", "boto3"],
};

export const projectCategories = ["All", "AI/RAG", "Machine Learning", "NLP", "Web", "Infra"];

export const projects = [
  {
    title: "The Sect — Task-Orchestration Framework",
    featured: true,
    categories: ["Infra"],
    stack: ["Python", "FastAPI", "PostgreSQL", "CLI"],
    body: "A hierarchical task-orchestration framework for a solo developer running many small services: a shared registry and mission board that independent workers (\"disciples\") poll, claim atomically, and report back to. One HTTP service, one Postgres database, two tables — no broker, no queue.",
    details: [
      "Atomic claiming via a single conditional UPDATE with no read-then-write race window, verified by a test firing 20 concurrent claims asserting exactly one winner",
      "Lease-based claim expiry with per-claim tokens so a killed worker can't overwrite work",
      "Published as a pip package with a lightweight client SDK and CLI",
      "Full v0.1 architecture doc, CI on every push, boot-time migrations behind an advisory lock",
    ],
    link: "https://github.com/bijay-odyssey/the-sect",
    stars: 4,
  },
  {
    title: "Personal Knowledge Base RAG API",
    featured: true,
    categories: ["AI/RAG", "NLP"],
    stack: ["FastAPI", "FAISS", "Qdrant", "Groq", "Llama-3.3-70B"],
    body: "Modular RAG API built from scratch for document upload and natural-language querying — switchable vector backends (FAISS/Qdrant), multiple chunking strategies, cross-encoder reranking, and Groq-powered generation.",
    details: [
      "FastAPI endpoints for TXT/PDF ingestion and semantic querying",
      "Configurable chunking strategies (fixed-size, sentence, recursive)",
      "Thread-safe writes with metadata filtering",
      "Low-latency responses via sentence-transformers embeddings",
    ],
    link: "https://github.com/bijay-odyssey/Personal-Knowledge-Base-RAG-API",
    stars: 1,
  },
  {
    title: "RAG Precision Enhancement",
    categories: ["AI/RAG", "NLP"],
    stack: ["FAISS", "Cross-Encoder", "Reranking"],
    body: "Comparative study showing why retrieval alone isn't enough. Two-stage retrieval + reranking pipeline with noise injection to stress-test semantic search performance.",
    details: [
      "Noise injection with 20+ hard-negative documents",
      "Cross-encoder reranking (BAAI/bge-reranker-base)",
      "Evaluated via Hit Rate@k and MRR",
    ],
    link: "https://github.com/bijay-odyssey/retrieval-vs-reranking",
    stars: 0,
  },
  {
    title: "ChurnShield",
    categories: ["Machine Learning", "Web"],
    stack: ["Flask", "Scikit-learn", "SHAP", "SQLite"],
    body: "Flask web app for real-time churn prediction with user authentication, an admin dashboard, CSV export, and SHAP-powered explainability, plus an automated retention-strategy generator.",
    details: [
      "Real-time prediction with a Random Forest pipeline",
      "SHAP-based feature importance per prediction",
      "Automated retention strategy generator",
    ],
    link: "https://github.com/bijay-odyssey/ChurnShield-App",
    stars: 3,
  },
  {
    title: "IEEE Fraud Detection",
    categories: ["Machine Learning"],
    stack: ["XGBoost", "SHAP", "Imbalanced Learning", "Optuna"],
    body: "Transaction classification on 1M+ Kaggle IEEE-CIS records. Achieved ROC-AUC 0.95 and F1 0.66 on the imbalanced fraud class with Optuna hyperparameter tuning.",
    details: [
      "Processed 1M+ transaction records",
      "Feature reduction via Spearman correlation",
      "Hyperparameter tuning with Optuna",
    ],
    link: "https://github.com/bijay-odyssey/Classification",
    stars: 5,
  },
  {
    title: "Time Series Forecasting",
    categories: ["Machine Learning"],
    stack: ["LightGBM", "Prophet", "Feature Engineering"],
    body: "SKU-level supermarket price forecasting on 1.7M+ rows using LightGBM and Prophet with lag, rolling-window, and calendar features.",
    details: [
      "Processed 1.7M+ retail records",
      "TimeSeriesSplit cross-validation",
      "Evaluated via RMSE, MAPE, SMAPE",
    ],
    link: "https://github.com/bijay-odyssey/Time-Series-Forecasting",
    stars: 4,
  },
  {
    title: "Retail Price Optimization",
    categories: ["Machine Learning"],
    stack: ["Random Forest", "Optuna", "SHAP"],
    body: "Competition-aware ML workflow integrating historical sales and competitor pricing. Achieved R² ≈ 0.92 with Random Forest and SHAP explainability for business decisions.",
    details: [
      "Full ML pipeline with EDA",
      "Hyperparameter tuning with Optuna",
      "Profit and revenue optimization analysis",
    ],
    link: "https://github.com/bijay-odyssey/price-optimization-refined",
    stars: 1,
  },
  {
    title: "Anomaly Detection",
    categories: ["Machine Learning"],
    stack: ["Isolation Forest", "LOF", "KMeans", "DBSCAN"],
    body: "Multi-method anomaly detection pipeline combining model-based, cluster-based, and statistical approaches on fraud and retail datasets with PCA visualization.",
    details: [
      "Multiple detection algorithms benchmarked",
      "Evaluation via ROC-AUC and precision/recall",
      "PCA visualization of anomalies",
    ],
    link: "https://github.com/bijay-odyssey/anomaly-detection",
    stars: 3,
  },
  {
    title: "Text Embeddings Explorer",
    categories: ["AI/RAG", "NLP"],
    stack: ["sentence-transformers", "FAISS", "Visualization"],
    body: "Scripts and experiments for exploring text embedding models, visualizing embedding spaces, and benchmarking retrieval quality across different encoder models.",
    details: [],
    link: "https://github.com/bijay-odyssey/embeddings-scripts",
    stars: 0,
  },
  {
    title: "Semantic Search with FAISS",
    categories: ["AI/RAG", "NLP"],
    stack: ["FAISS", "sentence-transformers", "Python"],
    body: "End-to-end semantic search implementation using FAISS for fast approximate nearest-neighbor search with sentence-transformers for dense embedding generation.",
    details: [],
    link: "https://github.com/bijay-odyssey/Semantic-Search-With-FAISS",
    stars: 0,
  },
  {
    title: "Qdrant Vector DB Experiments",
    categories: ["AI/RAG"],
    stack: ["Qdrant", "Python", "Vector Search"],
    body: "Experiments with the Qdrant vector database: collection management, payload filtering, hybrid search, and performance benchmarks for RAG applications.",
    details: [],
    link: "https://github.com/bijay-odyssey/vectorDB",
    stars: 0,
  },
  {
    title: "Text Chunking Strategies",
    categories: ["AI/RAG", "NLP"],
    stack: ["Python", "LangChain", "Benchmarking"],
    body: "Comparative study of text-chunking strategies (fixed-size, sentence-based, recursive, and semantic chunking), evaluating their impact on RAG retrieval quality.",
    details: [],
    link: "https://github.com/bijay-odyssey/chunking",
    stars: 0,
  },
  {
    title: "Regression Portfolio",
    categories: ["Machine Learning"],
    stack: ["Scikit-learn", "XGBoost", "LightGBM", "Optuna"],
    body: "Collection of regression projects across domains (housing prices, demand forecasting, insurance costs), with thorough EDA, feature engineering, and evaluation.",
    details: [],
    link: "https://github.com/bijay-odyssey/Regression",
    stars: 5,
  },
  {
    title: "Customer Segmentation",
    categories: ["Machine Learning"],
    stack: ["KMeans", "DBSCAN", "PCA", "Silhouette Analysis"],
    body: "Unsupervised learning project exploring clustering algorithms for customer segmentation, including PCA for dimensionality reduction and silhouette analysis for cluster selection.",
    details: [],
    link: "https://github.com/bijay-odyssey/Unsupervised-Learning",
    stars: 5,
  },
];

export const kaggleNotebooks = [
  {
    title: "Medical Insurance Forecast",
    body: "Predicting medical insurance charges with regression — my most-upvoted notebook.",
    tag: "Regression",
    upvotes: 7,
    link: "https://www.kaggle.com/code/bijaybeezoe/medical-insurance-forecast",
  },
  {
    title: "Retail Price Optimization",
    body: "Competition-aware price optimization with Random Forest and SHAP-driven business insight.",
    tag: "Optimization",
    upvotes: 5,
    link: "https://www.kaggle.com/bijaybeezoe/code",
  },
  {
    title: "IEEE-CIS Fraud Detection EDA",
    body: "Exploratory analysis and feature insight across 1M+ imbalanced transaction records.",
    tag: "EDA",
    upvotes: 4,
    link: "https://www.kaggle.com/bijaybeezoe/code",
  },
  {
    title: "Credit Card Fraud · Isolation Forest",
    body: "Unsupervised anomaly detection for fraud using Isolation Forest on highly imbalanced data.",
    tag: "Anomaly",
    upvotes: 4,
    link: "https://www.kaggle.com/bijaybeezoe/code",
  },
];

export const kaggleStats = { notebooks: 23, upvotes: 34, forks: 100 };

export const skillGroups = [
  {
    title: "Programming languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "Java", level: 60 },
      { name: "PHP", level: 50 },
    ],
  },
  {
    title: "Machine learning",
    skills: [
      { name: "Classification", level: 92 },
      { name: "Regression", level: 90 },
      { name: "Feature engineering", level: 90 },
      { name: "Time series forecasting", level: 88 },
      { name: "SHAP explainability", level: 88 },
      { name: "Anomaly detection", level: 86 },
      { name: "Clustering & segmentation", level: 85 },
    ],
  },
  {
    title: "AI, RAG & LLM orchestration",
    skills: [
      { name: "RAG pipelines", level: 90 },
      { name: "Vector search (pgvector/FAISS)", level: 88 },
      { name: "Multi-LLM orchestration & fallback", level: 87 },
      { name: "LLM integration (Bedrock/Gemini/OpenAI)", level: 86 },
      { name: "Embeddings & CrossEncoder reranking", level: 85 },
      { name: "Prompt engineering", level: 84 },
    ],
  },
  {
    title: "Frameworks & libraries",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "XGBoost / LightGBM", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "sentence-transformers", level: 85 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Databases & vector stores",
    skills: [
      { name: "FAISS", level: 88 },
      { name: "Qdrant", level: 85 },
      { name: "PostgreSQL (pgvector)", level: 80 },
      { name: "SQLite / MySQL", level: 78 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Deployment & DevOps",
    skills: [
      { name: "REST API design", level: 88 },
      { name: "Git / GitHub", level: 85 },
      { name: "JWT authentication", level: 82 },
      { name: "Docker", level: 80 },
      { name: "Rate limiting / CORS / SSRF", level: 80 },
    ],
  },
  {
    title: "Cloud & infrastructure (AWS)",
    skills: [
      { name: "AWS Bedrock (Nova/Titan)", level: 87 },
      { name: "ECS Fargate / ECR", level: 83 },
      { name: "GitHub Actions CI/CD", level: 85 },
      { name: "AWS Textract / S3 / IAM", level: 82 },
      { name: "ARQ async job queue", level: 82 },
    ],
  },
  {
    title: "Architecture & design patterns",
    skills: [
      { name: "Async microservices (asyncio)", level: 86 },
      { name: "Circuit breaker / fault tolerance", level: 85 },
      { name: "Multi-tier caching", level: 83 },
      { name: "Deterministic rule engines", level: 85 },
      { name: "PII-safe structured logging", level: 82 },
    ],
  },
];

export const stackChips = {
  "Languages": ["Python 3.11+", "SQL", "JavaScript", "PHP", "Java", "C"],
  "AI/LLM stack": ["RAG pipelines", "LLM orchestration", "AWS Bedrock (Nova)", "Gemini", "OpenAI GPT-4o", "Titan v2 embeddings", "sentence-transformers", "CrossEncoder reranking", "Prompt engineering", "Fallback chains"],
  "ML & data science": ["Scikit-learn", "XGBoost", "LightGBM", "Prophet", "Statsmodels", "Pandas", "NumPy", "SHAP", "LIME", "Optuna", "SMOTE"],
  "Web & APIs": ["FastAPI", "Pydantic v2", "asyncio", "ARQ", "Uvicorn", "Flask", "Jinja2", "REST / OpenAPI", "Webhooks"],
  "Cloud & DevOps": ["AWS Bedrock", "AWS Textract", "AWS S3", "ECS Fargate", "ECR", "IAM", "Docker", "GitHub Actions", "boto3"],
  "Databases & stores": ["PostgreSQL 15", "pgvector (HNSW)", "Redis", "asyncpg", "SQLAlchemy", "SQLite", "FAISS", "Qdrant"],
  "Security": ["JWT (HS256)", "HMAC-SHA256", "SSRF defense", "PII redaction", "Rate limiting", "CORS"],
  "Architecture": ["Circuit breaker", "Async job queue", "Multi-tier caching", "Multi-LLM fallback", "Graceful degradation"],
};

export const toolsGrid = [
  "Python", "PostgreSQL", "Docker", "Git", "GitHub", "VS Code", "Jupyter", "Groq API",
  "FastAPI", "Flask", "Redis", "FAISS", "Qdrant", "Scikit-learn", "LightGBM", "XGBoost",
  "Pandas", "NumPy", "SHAP", "Prophet", "Optuna", "AWS Bedrock", "Textract", "S3",
  "ECS Fargate", "ECR", "pgvector", "ARQ", "Pydantic v2", "Gemini", "OpenAI", "GitHub Actions",
  "JWT / HMAC", "SSRF / CORS", "Linux / Bash", "Kaggle",
];

export const learning = [
  { title: "GraphRAG", body: "Knowledge-graph-enhanced retrieval for complex multi-hop reasoning." },
  { title: "LLM fine-tuning", body: "LoRA/QLoRA fine-tuning strategies for domain-specific LLM adaptation." },
  { title: "Agentic AI", body: "Multi-agent orchestration and tool-calling patterns for autonomous AI workflows." },
  { title: "Kubernetes", body: "Container orchestration for scaling production ML inference services." },
];

export const posts = [
  {
    title: "Modular RAG API with FastAPI & Groq",
    body: "My most-viewed post: a walkthrough of a configurable RAG system with switchable vector backends, multiple chunking strategies, and LLM-powered, context-grounded generation.",
    tags: ["#RAG", "#FastAPI"],
    featured: true,
  },
  {
    title: "Improving RAG Precision with Reranking",
    body: "Why retrieval alone isn't enough: two-stage retrieval + cross-encoder reranking, stress-tested with hard negatives. Better Hit Rate@k and MRR.",
    tags: ["#RAG", "#Reranking"],
  },
  {
    title: "Text Chunking Strategies for RAG",
    body: "Comparing fixed-size, sentence, recursive, and semantic chunking, and how each affects RAG retrieval quality.",
    tags: ["#RAG", "#NLP"],
  },
  {
    title: "SHAP-Based Churn Prediction",
    body: "My research preprint: SHAP for transparent feature importance plus iterative hyperparameter tuning on telecom churn data.",
    tags: ["#SHAP", "#Research"],
  },
  {
    title: "Building a RAG Pipeline with LLMs",
    body: "A hands-on RAG system grounding LLM responses in retrieved context using sentence-transformers, Qdrant, and Groq.",
    tags: ["#RAG", "#LLMs"],
  },
  {
    title: "Semantic Search with FAISS & FastAPI",
    body: "A lightweight semantic search workflow with FAISS and sentence-transformers, served via FastAPI with live index rebuilding.",
    tags: ["#SemanticSearch", "#FAISS"],
  },
  {
    title: "Text Embeddings Explorer CLI",
    body: "An open-source CLI to explore embeddings across MiniLM, MPNet, BGE, and E5, with similarity comparisons and PCA visualizations.",
    tags: ["#Embeddings", "#NLP"],
  },
  {
    title: "PM2.5 Air-Quality Anomaly Detection",
    body: "Comparing Z-Score, IQR, and rolling-statistics methods to detect outliers in Beijing air-quality time-series data.",
    tags: ["#AnomalyDetection", "#TimeSeries"],
  },
  {
    title: "ML-Driven Retail Price Optimization",
    body: "An ML pricing workflow with Optuna tuning, SHAP explainability, and profit-optimization logic for retail decisions.",
    tags: ["#MachineLearning", "#Optuna"],
  },
  {
    title: "Price Elasticity & Competitive Pricing",
    body: "Random Forest modeling with price-elasticity analysis and competitive pricing simulation to optimize retail margins.",
    tags: ["#PriceOptimization", "#DataScience"],
  },
  {
    title: "Clustering-Based Anomaly Detection",
    body: "KMeans and DBSCAN anomaly detection with clear visualizations on real-world data, part of my anomaly-detection series.",
    tags: ["#AnomalyDetection", "#Clustering"],
  },
  {
    title: "Customer Segmentation with KMeans",
    body: "KMeans clustering and RFM analysis to segment retail customers from two years of transactions for targeted marketing.",
    tags: ["#Clustering", "#RetailAnalytics"],
  },
  {
    title: "Anomaly Detection & Fraud",
    body: "Detecting anomalies in fraud datasets: methods, metrics, and what actually works.",
    tags: ["#MachineLearning", "#FraudDetection"],
  },
  {
    title: "IEEE Fraud Detection & EDA",
    body: "Classification on 1M+ IEEE-CIS transactions: EDA, feature engineering, and XGBoost results.",
    tags: ["#Classification", "#IEEE"],
  },
  {
    title: "Time Series Forecasting",
    body: "Forecasting supermarket prices across 1.7M rows: LightGBM, Prophet, and the features that matter.",
    tags: ["#TimeSeries", "#LightGBM"],
  },
];
