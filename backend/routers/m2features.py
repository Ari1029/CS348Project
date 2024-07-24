import os
from fastapi import APIRouter, Depends, HTTPException
from modules.database import make_query
from models.fastest_lap_query import FastestLapQuery
from models.best_circuits_for_constructor_query import BestCircuitsForConstructor
from models.most_raced_against_query import MostRacedAgainstQuery
from models.consecutive_wins_query import ConsecutiveWinsQuery
from models.driver_performance_summary import DriverPerformanceSummaryQuery
from models.driver_rating_query import DriverRatingQuery

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
  res = make_query('4_best_circuits_for_constructor.sql', {
    'constructor_name': best_circuits_for_constructor_query.constructor_name
  })
  return {
    "message": res
  }

@router.get("/avg_pos_for_racer")
async def avg_pos_for_racer():
  res = make_query('3_avg_pos_for_racer.sql')
  return {
    "message": res
  }

@router.post("/most_raced_against")
async def most_raced_against(most_raced_against_query: MostRacedAgainstQuery):
  res = make_query('2_most_raced_against.sql', {
    'driver_surname': most_raced_against_query.driver_surname,
    'driver_forename': most_raced_against_query.driver_forename
  })
  return {
    "message": res
  }

@router.post("/consecutive_wins")
async def consecutive_wins(consecutive_wins_query: ConsecutiveWinsQuery):
  res = make_query("6_consecutive_wins.sql", {
    'driver_surname': consecutive_wins_query.driver_surname,
    'driver_forename': consecutive_wins_query.driver_forename
  })
  return {
    "message": res
  }

@router.post("/driver_performance_summary")
async def driver_performance_summary(driver_performance_summary_query: DriverPerformanceSummaryQuery):
  res = make_query('5_driver_performance_summary_QUERY.sql', {
    'lower_bound': driver_performance_summary_query.lower_bound,
    'upper_bound': driver_performance_summary_query.upper_bound
  })
  return {
    "message": res
  }

@router.post("/driver_rating")
async def driver_rating(driver_rating_query: DriverRatingQuery):
  res = make_query('driver_rating.sql', {
    'driver_surname': driver_rating_query.driver_surname,
    'driver_forename': driver_rating_query.driver_forename
  })
  return {
    "message": res
  }
