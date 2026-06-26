import ollama

from rag.retrieval import (
    retrieve_relevant_chunks
)


def generate_architecture():

    chunks = retrieve_relevant_chunks(
        "project architecture modules folder structure execution flow components design patterns",
        top_k=8
    )

    context = "\n\n".join(
        [
            chunk["chunk"]["content"]
            for chunk in chunks
        ]
    )

    prompt = f"""
You are an expert software architect.

Analyze the repository and generate a software architecture report.

Include:

- Project Overview
- Architecture
- Core Modules
- Execution Flow
- Data Flow
- Design Patterns
- Strengths
- Suggested Improvements

Return the response in clean Markdown.

Repository Context:

{context}
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