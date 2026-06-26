from pathlib import Path


def chunk_file(
    file_path,
    chunk_size=1000
):

    try:

        text = Path(
            file_path
        ).read_text(
            encoding="utf-8",
            errors="ignore"
        )

    except Exception:

        return []

    chunks = []

    for i in range(
        0,
        len(text),
        chunk_size
    ):

        chunks.append(
            {
                "chunk_id": len(chunks),
                "content": text[
                    i:i + chunk_size
                ],
                "source_file": file_path
            }
        )

    return chunks