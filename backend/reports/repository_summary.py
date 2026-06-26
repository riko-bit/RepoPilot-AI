from collections import defaultdict


def generate_repository_summary(parsed_result):

    files = parsed_result["files"]

    summary = {
        "total_files": 0,
        "total_lines": 0,
        "total_size_bytes": 0,
        "languages": defaultdict(int),
        "largest_files": []
    }

    for file in files:

        summary["total_files"] += 1

        summary["total_lines"] += file["lines"]

        summary["total_size_bytes"] += file["size"]

        summary["languages"][
            file["language"]
        ] += 1

    largest_files = sorted(
        files,
        key=lambda x: x["size"],
        reverse=True
    )[:10]

    summary["largest_files"] = largest_files

    summary["languages"] = dict(
        summary["languages"]
    )

    return summary