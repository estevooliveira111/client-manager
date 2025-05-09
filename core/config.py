from pydantic import BaseSettings

class Settings(BaseSettings):
    secret_key: str = "mysecretkey"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    class Config:
        env_file = ".env"

settings = Settings()