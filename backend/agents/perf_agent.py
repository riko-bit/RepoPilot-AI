import ollama

from rag.retrieval import (
    retrieve_relevant_chunks
)


def analyze_performance():

    chunks = retrieve_relevant_chunks(
        "performance optimization time complexity memory optimization inefficient code loops expensive operations",
        top_k=8
    )

    context = "\n\n".join(
        [
            chunk["chunk"]["content"]
            for chunk in chunks
        ]
    )

    prompt = f"""
You are an expert software performance engineer.

Analyze the repository using the provided context.

Generate a concise Markdown report.

Include:

# Performance Overview
# Potential Bottlenecks
# Memory Optimization
# Time Complexity
# Scalability
# Recommendations

IMPORTANT:
- Do NOT copy or quote repository code.
- Do NOT include code blocks.
- Summarize your findings in plain English.
- Keep the report under 500 words.

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