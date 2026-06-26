from github.clone_repo import (
    clone_repository
)

from github.parser import (
    parse_repository
)

from github.repository_tree import (
    build_repository_tree
)

from reports.repository_summary import (
    generate_repository_summary
)

from rag.index_repository import (
    index_repository
)


def analyze_repository(
    repo_url
):

    # Clone repository
    clone_result = clone_repository(
        repo_url
    )

    # Parse repository
    parsed_result = parse_repository(
        clone_result["local_path"]
    )

    # Summary
    summary = generate_repository_summary(
        parsed_result
    )

    # Repository tree
    repository_tree = build_repository_tree(
        clone_result["local_path"]
    )

    # Generate embeddings
    indexed_chunks = index_repository(
        parsed_result
    )

    return {
        "repository": clone_result,
        "summary": summary,
        "repository_tree": repository_tree,
        "chunks_indexed": indexed_chunks
    }