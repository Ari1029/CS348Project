import os
from fastapi import APIRouter, Depends, HTTPException
from modules.database import make_query

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

@router.get("/best_circuits_for_constructor")
async def best_circuits_for_constructor():
  res = make_query('best_circuits_for_constructor.sql', {
    'constructor_name': 'Ferrari'
  })
  return {"testing": "yoyo second feature! " + str(res)}

@router.get("/avg_pos_for_racer")
async def avg_pos_for_racer():
  res = make_query('avg_pos_for_racer.sql')
  return {"testing": "yoyo third feature! " + str(res)}

@router.get("/most_raced_against")
async def most_raced_against():
  res = make_query('3_most_raced_against.sql', {
    'driverid': 1
  })
  return {"testing": "yoyo fourth feature! " + str(res)}
