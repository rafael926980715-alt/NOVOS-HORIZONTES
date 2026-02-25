from fastapi import APIRouter , UploadFile , File , HTTPException
from ..DataCenter.SessionDB import SessionDep
from ..DataCenter.TableDB import Table_Event
from ..Model.Modeldb import Model_EventNH


Api = APIRouter()



@Api.post("/PostarEvento" , response_model=Model_EventNH)
async def PostarEvento(table_dispach: Model_EventNH, sessao_init:SessionDep):
    try:
        Creat_Event = Table_Event(
            imagem_url= table_dispach.imagem_url,
            titulo= table_dispach.titulo,
            descricao= table_dispach.descricao,
            localizacao= table_dispach.localizacao,
            pagar= table_dispach.pagar,
            comecarHoraEs = table_dispach.comecarHoraEs,
            terminarHoraDi = table_dispach.terminarHoraDi,
            button = table_dispach.button
        )
        sessao_init.add(Creat_Event)
        sessao_init.commit()
        sessao_init.refresh(Creat_Event)

    except Exception as e:
        sessao_init.rollback()
        print(f"VERIFICANDO O ERRO{e}")
        raise  HTTPException(status_code=404 , detail='NAO FOI POSSIVEL VOCE DEVE ERRAR UMAS DAS ENTRADAS DE DADOS PRA EVENTOS!!!')
    


    return Creat_Event