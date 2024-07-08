from fastapi import FastAPI
from pydantic import BaseModel

class DriverPerformanceSummaryQuery(BaseModel):
  lower_bound: int
  upper_bound: int
