from fastapi import FastAPI
from pydantic import BaseModel

class FastestLapQuery(BaseModel):
  race_name: str
  race_year: int
  driver_surname: str
  driver_forename: str
