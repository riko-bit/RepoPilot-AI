import os


IGNORE_FOLDERS = {
    ".git",
    "__pycache__",
    "node_modules",
    "venv",
    "dist",
    "build"
}


def build_repository_tree(repo_path):

    tree = {}

    for root, dirs, files in os.walk(repo_path):

        dirs[:] = [
            d for d in dirs
            if d not in IGNORE_FOLDERS
        ]

        relative_root = os.path.relpath(
            root,
            repo_path
        )

        tree[relative_root] = files

    return tree