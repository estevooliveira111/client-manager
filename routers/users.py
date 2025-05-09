from fastapi import APIRouter, HTTPException, status
from schemas import AuthRequest, AuthResponse

router = APIRouter()

fake_user = {
    "email": "admin@bank.com",
    "password": "secure123"
}

@router.post("/banking/users/authenticate", response_model=AuthResponse)
def authenticate_user(credentials: AuthRequest):
    if credentials.email != fake_user["email"] or credentials.password != fake_user["password"]:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou senha inválidos"
        )

    return {
        "access_token": "token-falso-gerado",
        "token_type": "bearer"
    }