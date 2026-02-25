from fastapi import Depends
from typing import Annotated
from sqlalchemy.orm import Session
from .Database import DB_BASE


def get_session():
    with Session(DB_BASE) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]