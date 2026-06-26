from pydantic import BaseModel


class RepoRequest(BaseModel):
    repo_url: str


class AskRequest(BaseModel):
    question: str