import time
from sqlalchemy import create_engine 
from os import getenv
from dotenv import load_dotenv

load_dotenv()

Db_User = getenv("DB_USER" , "MotoriousBig")
Db_Host = getenv("DB_HOST" , "db")
Db_Port = getenv("DB_PORT" , "5432")
Db_Name = getenv("DB_NAME" , "mouchei")
Db_Senha = getenv("DB_PASS" , "HnbvepeloiryBCKJIEOMeyeuiowxz")

DB_BASE = create_engine(f"postgresql+psycopg://{Db_User}:{Db_Senha}@{Db_Host}:{Db_Port}/{Db_Name}")