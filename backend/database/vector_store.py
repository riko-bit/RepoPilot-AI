stored_vectors = []


def store_embedding(
    chunk,
    embedding
):

    stored_vectors.append(
        {
            "chunk": chunk,
            "embedding": embedding
        }
    )


def get_vectors():

    return stored_vectors


def clear_vectors():

    stored_vectors.clear()


def total_vectors():

    return len(stored_vectors)