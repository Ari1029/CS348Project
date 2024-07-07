from fastapi import FastAPI
from pydantic import BaseModel

class BestCircuitsForConstructor(BaseModel):
  constructor_name: str
