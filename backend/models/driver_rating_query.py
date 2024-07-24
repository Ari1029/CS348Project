from fastapi import FastAPI
from pydantic import BaseModel

class DriverRatingQuery(BaseModel):
  driver_surname: str
  driver_forename: str
