from fastapi import FastAPI
from database import execute_query

app = FastAPI()

@app.get("/")
def read_root():
    result = execute_query('hello_cs348.sql')
    return {"message": result}
