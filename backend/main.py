from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import execute_query

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    result = execute_query('hello_cs348.sql')
    return {"message": result}
