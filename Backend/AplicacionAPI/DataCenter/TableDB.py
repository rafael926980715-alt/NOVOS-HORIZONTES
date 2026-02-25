from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import mapped_column , Mapped
from sqlalchemy import Integer , String , Boolean





class Base(DeclarativeBase):
    pass


class Table_Event(Base):

    __tablename__ = 'Event_NH'

    id: Mapped[int] =  mapped_column(primary_key=True)
    imagem_url: Mapped[str] =  mapped_column(String)
    titulo:  Mapped[str] =  mapped_column(String)
    descricao:  Mapped[str] =  mapped_column(String)
    localizacao:  Mapped[str] =  mapped_column(String)
    pagar:  Mapped[int] =  mapped_column(Integer)
    comecarHoraEs:  Mapped[str] =  mapped_column(String)
    terminarHoraDi:  Mapped[str] =  mapped_column(String)
    button:  Mapped[bool] =  mapped_column(Boolean)



