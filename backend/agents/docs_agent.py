import ollama

from rag.retrieval import (
    retrieve_relevant_chunks
)


def generate_documentation():

    chunks = retrieve_relevant_chunks(
        "repository architecture",
        top_k=5
    )

    context = ""

    for item in chunks:

        context += (
            item["chunk"]["content"][:500]
            + "\n\n"
        )

    prompt = f"""
Analyze this repository:

{context}

Create markdown documentation:

# Overview
# Features
# Key Components
# Technologies
# Improvements

Be concise.
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

    return response["message"]["content"]