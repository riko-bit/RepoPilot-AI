import ollama

from rag.retrieval import (
    retrieve_relevant_chunks
)


def ask_repository(
    question,
    top_k=11
):

    chunks = retrieve_relevant_chunks(
        question,
        top_k
    )

    context = "\n\n".join(
        [
            chunk["chunk"]["content"]
            for chunk in chunks
        ]
    )

    prompt = f"""
You are an expert software engineer.

Answer ONLY using the repository context.

If the answer is not present in the repository context,
reply exactly:

I could not find that information in the repository.

Repository Context:

{context}

Question:

{question}
"""

    response = ollama.chat(
        model="llama3.2:latest",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return {
        "answer":
            response["message"]["content"],

        "sources":
            list(
                set(
                    [
                        chunk["chunk"][
                            "source_file"
                        ]

                        for chunk in chunks
                    ]
                )
            )
    }