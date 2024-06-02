from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import execute_query
from routers import circuits

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(circuits.router)

@app.get("/")
async def read_root():
    result = execute_query('hello_cs348.sql')
    return {"message": result}
