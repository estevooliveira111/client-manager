from models.user import User
from core.security import verify_password, create_access_token
from schemas.auth_request import AuthRequest
from schemas.auth_response import AuthResponse
from fastapi import HTTPException
from datetime import timedelta

def authenticate_user(auth_request: AuthRequest) -> AuthResponse:
    user_db = {
        "test@example.com": {
            "email": "test@example.com",
            "hashed_password": "$2b$12$eS9k9hZlEIKzTZoMYvD3rqdgmyBf9TZxCoz9lRQRaScsXhNOh0HqO",  # "password" criptografada
        }
    }

    user = user_db.get(auth_request.email)
    if not user:
        raise HTTPException(status_code=400, detail="Email not found")

    if not verify_password(auth_request.password, user["hashed_password"]):
        raise HTTPException(status_code=400, detail="Incorrect password")

    access_token = create_access_token(data={"sub": auth_request.email})
    return AuthResponse(access_token=access_token)