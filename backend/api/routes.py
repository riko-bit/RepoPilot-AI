from fastapi import APIRouter

from schemas import (
    RepoRequest,
    AskRequest
)

from github.clone_repo import clone_repository
from github.parser import parse_repository
from github.repository_tree import (
    build_repository_tree
)

from reports.repository_summary import (
    generate_repository_summary
)

from rag.index_repository import (
    index_repository
)

from rag.retrieval import (
    retrieve_relevant_chunks
)

from rag.ask_repository import (
    ask_repository
)

from agents.docs_agent import (
    generate_documentation
)

from agents.security_agent import (
    scan_repository
)

from agents.refactor_agent import (
    generate_refactor_suggestions
)

from agents.perf_agent import (
    analyze_performance
)

from agents.architecture_agent import (
    generate_architecture
)

router = APIRouter()


@router.post("/analyze")
def analyze_repository(
    request: RepoRequest
):

    clone_result = clone_repository(
        request.repo_url
    )

    parsed_result = parse_repository(
        clone_result["local_path"]
    )

    summary = generate_repository_summary(
        parsed_result
    )

    repository_tree = build_repository_tree(
        clone_result["local_path"]
    )

    total_chunks = index_repository(
        parsed_result
    )

    return {
        "repository": clone_result,
        "summary": summary,
        "repository_tree": repository_tree,
        "chunks_indexed": total_chunks,
        "files": parsed_result["files"]
    }


@router.post("/search")
def search_repository(
    request: AskRequest
):

    chunks = retrieve_relevant_chunks(
        request.question
    )

    return {
        "question":
            request.question,

        "results":
            chunks
    }


@router.post("/ask")
def ask_repo(
    request: AskRequest
):

    return ask_repository(
        request.question
    )


@router.get("/docs-agent")
def docs_agent():

    documentation = (
        generate_documentation()
    )

    return {
        "documentation":
            documentation
    }


@router.post("/security-agent")
def security_agent(
    request: RepoRequest
):

    clone_result = clone_repository(
        request.repo_url
    )

    parsed_result = parse_repository(
        clone_result["local_path"]
    )

    findings = scan_repository(
        parsed_result
    )

    return {
        "repository":
            clone_result["repo_name"],

        "issues_found":
            len(findings),

        "issues":
            findings
    }


@router.get("/refactor-agent")
def refactor_agent():

    suggestions = (
        generate_refactor_suggestions()
    )

    return {
        "suggestions":
            suggestions
    }


@router.get("/performance-agent")
def performance_agent():

    report = (
        analyze_performance()
    )

    return {
        "performance_report":
            report
    }


@router.get("/architecture-agent")
def architecture_agent():

    architecture = (
        generate_architecture()
    )

    return {
        "architecture":
            architecture
    }