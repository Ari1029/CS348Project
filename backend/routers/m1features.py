import os
from fastapi import APIRouter, Depends, HTTPException
from database import make_query

router = APIRouter(
  prefix="/m1features",
  tags=["m1features"],
  responses={404: {"description": "Not found"}},
)

@router.get("/fastest_lap")
async def fastest_lap():
  res = make_query('1_fastest_lap.sql', {
    'race_name': 'Monaco Grand Prix',
    'race_year': 2023,
    'driver_surname': 'Hamilton',
    'driver_forename': 'Lewis'
  })
  return {"testing": "yoyo first feature! " + str(res)}
