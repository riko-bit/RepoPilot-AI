from rag.chunking import chunk_file


def process_repository_chunks(
    parsed_result
):

    all_chunks = []

    for file in parsed_result["files"]:

        file_chunks = chunk_file(
            file["path"]
        )

        all_chunks.extend(
            file_chunks
        )

    return all_chunks