from fastapi import FastAPI
from pydantic import BaseModel

class ConsecutiveWinsQuery(BaseModel):
  driver_surname: str
  driver_forename: str
