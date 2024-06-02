import os
from fastapi import APIRouter, Depends, HTTPException
from modules.populate_table import populate_table

router = APIRouter(
  prefix="/circuits",
  tags=["circuits"],
  responses={404: {"description": "Not found"}},
)

current_dir = os.path.dirname(__file__)
csv_path = os.path.join(current_dir, '..', 'queries', 'data', 'circuits.csv')
csv_path = os.path.normpath(csv_path)

@router.get("/populate")
async def populate_circuits():
  result = populate_table('circuits', csv_path)
  return {"testing": "yoyo circuits here!" + str(result)}