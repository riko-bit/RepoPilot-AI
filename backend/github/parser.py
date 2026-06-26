import os


SUPPORTED_EXTENSIONS = {
    ".py",
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".java",
    ".cpp",
    ".c",
    ".md",
}


LANGUAGE_MAP = {
    ".py": "Python",
    ".js": "JavaScript",
    ".jsx": "React",
    ".ts": "TypeScript",
    ".tsx": "React TypeScript",
    ".java": "Java",
    ".cpp": "C++",
    ".c": "C",
    ".md": "Markdown",
}


IGNORE_FOLDERS = {
    ".git",
    "node_modules",
    "__pycache__",
    "venv",
    "dist",
    "build",
}


def count_lines(file_path):

    try:
        with open(
            file_path,
            "r",
            encoding="utf-8",
            errors="ignore"
        ) as file:

            return len(file.readlines())

    except Exception:
        return 0


def parse_repository(repo_path):

    repository_data = []

    language_stats = {}

    for root, dirs, files in os.walk(repo_path):

        dirs[:] = [
            d for d in dirs
            if d not in IGNORE_FOLDERS
        ]

        for file in files:

            file_path = os.path.join(
                root,
                file
            )

            extension = os.path.splitext(file)[1]

            if extension not in SUPPORTED_EXTENSIONS:
                continue

            language = LANGUAGE_MAP.get(
                extension,
                "Unknown"
            )

            language_stats[language] = (
                language_stats.get(language, 0) + 1
            )

            repository_data.append(
                {
                    "name": file,
                    "path": file_path,
                    "extension": extension,
                    "language": language,
                    "size": os.path.getsize(file_path),
                    "lines": count_lines(file_path),
                }
            )

    return {
        "files": repository_data,
        "language_stats": language_stats,
    }