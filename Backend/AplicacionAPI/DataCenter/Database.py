import time
from sqlalchemy import create_engine 
from os import getenv
from dotenv import load_dotenv

load_dotenv()

Db_User = getenv("DB_USER")
Db_Host = getenv("DB_HOST")
Db_Port = getenv("DB_PORT")
Db_Name = getenv("DB_NAME")
Db_Senha = getenv("DB_PASS" )

DB_BASE = create_engine(f"postgresql+psycopg://{Db_User}:{Db_Senha}@{Db_Host}:{Db_Port}/{Db_Name}")