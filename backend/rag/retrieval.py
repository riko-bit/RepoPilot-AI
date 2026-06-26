import numpy as np

from rag.embed import (
    generate_embedding
)

from database.vector_store import (
    get_vectors
)


def cosine_similarity(
    vec1,
    vec2
):

    vec1 = np.array(vec1)
    vec2 = np.array(vec2)

    denominator = (
        np.linalg.norm(vec1)
        *
        np.linalg.norm(vec2)
    )

    if denominator == 0:
        return 0.0

    return np.dot(
        vec1,
        vec2
    ) / denominator


def retrieve_relevant_chunks(
    question,
    top_k=5
):

    query_embedding = generate_embedding(
        question
    )

    vectors = get_vectors()

    scored_chunks = []

    for item in vectors:

        similarity = cosine_similarity(
            query_embedding,
            item["embedding"]
        )

        scored_chunks.append(
            {
                "score": float(similarity),
                "chunk": item["chunk"]
            }
        )

    scored_chunks.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return scored_chunks[:top_k]