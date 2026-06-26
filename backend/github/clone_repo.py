import os
from git import Repo


REPO_STORAGE_PATH = "repositories"


def clone_repository(repo_url: str):
    """
    Clone GitHub repository locally.
    If already cloned, reuse the existing copy.
    """

    os.makedirs(REPO_STORAGE_PATH, exist_ok=True)

    repo_name = repo_url.split("/")[-1].replace(".git", "")

    local_path = os.path.join(
        REPO_STORAGE_PATH,
        repo_name
    )

    # Reuse existing repository
    if os.path.exists(local_path):
        return {
            "repo_name": repo_name,
            "local_path": local_path
        }

    # Clone only if not already present
    Repo.clone_from(
        repo_url,
        local_path
    )

    return {
        "repo_name": repo_name,
        "local_path": local_path
    }