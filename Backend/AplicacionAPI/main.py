from fastapi import FastAPI 
from .Services.ServicesApiEvent import Api

app = FastAPI()


app.include_router(Api)