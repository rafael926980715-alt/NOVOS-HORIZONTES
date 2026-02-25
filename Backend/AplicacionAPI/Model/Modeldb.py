from pydantic import BaseModel , ConfigDict

class Model_EventNH(BaseModel):
    id: int
    imagem_url: str
    titulo: str
    descricao: str
    localizacao: str
    pagar: int
    comecarHoraEs: str
    terminarHoraDi:  str
    button: bool


    model_config = ConfigDict(from_attributes=True)