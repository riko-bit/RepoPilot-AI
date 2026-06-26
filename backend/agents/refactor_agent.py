import ollama

from rag.retrieval import (
    retrieve_relevant_chunks
)


def generate_refactor_suggestions():

    chunks = retrieve_relevant_chunks(
        "code quality refactoring clean code duplicate code maintainability naming functions classes architecture",
        top_k=5
    )

    context = "\n\n".join(
        [
            chunk["chunk"]["content"]
            for chunk in chunks
        ]
    )

    prompt = f"""
You are an expert software engineer.

Analyze this repository and generate a refactoring report.

Return ONLY clean Markdown.

Include the following sections:

# Code Quality
# Maintainability
# Possible Refactors
# Naming Improvements
# Structural Improvements
# Best Practices

Rules:

- Do NOT include source code.
- Do NOT paste repository snippets.
- Explain improvements in plain English.
- Keep the report concise (under 500 words).

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