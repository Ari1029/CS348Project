from fastapi import FastAPI
from pydantic import BaseModel

class MostRacedAgainstQuery(BaseModel):
  driver_surname: str
  driver_forename: str
