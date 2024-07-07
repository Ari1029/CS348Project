import os
from fastapi import APIRouter, Depends, HTTPException
from modules.database import make_query
from models.fastest_lap_query import FastestLapQuery
from models.best_circuits_for_constructor_query import BestCircuitsForConstructor

router = APIRouter(
  prefix="/m2features",
  tags=["m2features"],
  responses={404: {"description": "Not found"}},
)

@router.post("/fastest_lap")
async def fastest_lap(fastest_lap_query: FastestLapQuery):
  res = make_query('1_fastest_lap.sql', {
    'race_name': fastest_lap_query.race_name,
    'race_year': fastest_lap_query.race_year,
    'driver_surname': fastest_lap_query.driver_surname,
    'driver_forename': fastest_lap_query.driver_forename
  })
  return {
    "message": res
  }

@router.post("/best_circuits_for_constructor")
async def best_circuits_for_constructor(best_circuits_for_constructor_query: BestCircuitsForConstructor):
  res = make_query('best_circuits_for_constructor.sql', {
    'constructor_name': best_circuits_for_constructor_query.constructor_name
  })
  return {
    "message": res
  }
