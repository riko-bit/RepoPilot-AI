from rag.process_repository import (
    process_repository_chunks
)

from rag.embed import (
    generate_embedding
)

from database.vector_store import (
    store_embedding,
    clear_vectors
)


def index_repository(
    parsed_result
):

    clear_vectors()

    chunks = process_repository_chunks(
        parsed_result
    )

    for chunk in chunks:

        embedding = generate_embedding(
            chunk["content"]
        )

        store_embedding(
            chunk,
            embedding
        )

    return len(chunks)