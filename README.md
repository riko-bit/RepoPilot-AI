# 🚀 RepoPilot AI

> AI-powered Repository Intelligence Platform built with FastAPI, React, Ollama, RAG, and Local LLMs.

RepoPilot AI is an AI-assisted software engineering platform that analyzes GitHub repositories and provides intelligent insights including repository summaries, semantic code search, repository chat, AI-generated documentation, architecture analysis, security scanning, performance analysis, and refactoring suggestions.

Instead of manually exploring hundreds of source files, developers can simply provide a GitHub repository URL and interact with the repository through natural language.

---

# ✨ Features

## Repository Analysis

- Clone any public GitHub repository
- Parse project structure
- Generate repository statistics
- Build repository tree
- Index the entire repository

---

## AI Repository Chat

Ask natural language questions such as:

- What is this repository about?
- Explain authentication flow.
- Which file handles API requests?
- How is database connectivity implemented?
- What technologies are used?

Powered using:

- Local LLM (Llama 3.2)
- Retrieval-Augmented Generation (RAG)
- Semantic Search

---

## AI Documentation Generator

Automatically generates:

- Project Overview
- Features
- Technologies Used
- Key Components
- Suggested Improvements

without requiring manual documentation.

---

## Security Analysis

Performs static code analysis to detect:

- Hardcoded API Keys
- Hardcoded Passwords
- AWS Access Keys
- Unsafe eval()
- Unsafe exec()
- shell=True usage
- Potential SQL Injection patterns

Each issue includes:

- Severity
- File Location
- Number of Matches

---

## Architecture Analysis

Generates an AI-powered explanation of:

- Overall Architecture
- Core Modules
- Execution Flow
- Design Patterns
- Component Responsibilities
- Improvement Suggestions

---

## Performance Analysis

Analyzes source code and suggests:

- Performance Bottlenecks
- Expensive Operations
- Optimization Opportunities
- Better Coding Practices

---

## Refactoring Suggestions

Provides AI-generated recommendations for:

- Cleaner Code
- Better Maintainability
- Reduced Complexity
- Modularization
- Readability Improvements

---

# 🏗 System Architecture

```
GitHub Repository
        │
        ▼
Repository Cloner
        │
        ▼
Repository Parser
        │
        ▼
Chunking Engine
        │
        ▼
Embedding Generator
        │
        ▼
Vector Database (Qdrant)
        │
        ▼
Semantic Retrieval
        │
        ▼
Local LLM (Llama 3.2)
        │
        ▼
AI Responses
```

---

# 🧠 AI Pipeline

1. Clone Repository
2. Parse Source Files
3. Chunk Code
4. Generate Embeddings
5. Store Embeddings in Qdrant
6. Retrieve Relevant Context
7. Generate AI Response using Ollama
8. Display Results inside React Dashboard

---

# ⚙️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Markdown

---

## Backend

- FastAPI
- Python
- Ollama
- Sentence Transformers
- Qdrant
- Uvicorn

---

## AI

- Llama 3.2
- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Local LLM Inference

---

## Vector Database

- Qdrant

---

## Machine Learning

- sentence-transformers
- all-MiniLM-L6-v2

---

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
RepoPilot-AI/

frontend/
│
├── components/
├── pages/
├── context/
├── services/
└── App.jsx

backend/
│
├── agents/
│     ├── docs_agent.py
│     ├── architecture_agent.py
│     ├── security_agent.py
│     ├── perf_agent.py
│     └── refactor_agent.py
│
├── github/
├── rag/
├── reports/
├── routes.py
├── schemas.py
└── main.py
```

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/yourusername/RepoPilot-AI.git
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Start Ollama

```bash
ollama serve
```

Pull the model

```bash
ollama pull llama3.2
```

---

# 📸 Dashboard

The dashboard provides multiple AI-powered modules:

- Repository Overview
- Repository Chat
- Documentation
- Security Scan
- Architecture Analysis
- Performance Report
- Refactoring Suggestions

---

# 🎯 Future Improvements

- Multi-Agent Collaboration
- GitHub Pull Request Review
- Architecture Diagram Generation
- Repository Dependency Visualization
- Multi-Repository Search
- Code Diff Analysis
- Test Case Generation
- Docker Support
- Cloud Deployment
- Authentication

---

# 👨‍💻 Author

**Rishit Kumar Ojha**

AI Engineer | GenAI | Agentic AI | RAG | LLM Applications

GitHub:
https://github.com/riko-bit

LinkedIn:
https://linkedin.com/in/rishit-kumar-ojha

---

# 📄 License

This project is licensed under the MIT License.