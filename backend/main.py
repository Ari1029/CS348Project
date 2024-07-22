from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modules.database import make_query
from routers import circuits, m1features, m2features

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
app.include_router(m1features.router)
app.include_router(m2features.router)

@app.get("/")
async def read_root():
    # result = make_query('get_circuits.sql')
    return {"message": "hello root"}
