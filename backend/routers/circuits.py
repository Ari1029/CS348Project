from fastapi import APIRouter, Depends, HTTPException

router = APIRouter(
  prefix="/circuits",
  tags=["circuits"],
  responses={404: {"description": "Not found"}},
)

@router.get("/populate")
async def populate_circuits():
  return {"testing": "yoyo circuits here!"}