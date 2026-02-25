import '../index.css'
import '../App.css'





import tarefas from '../assets/gestaotarefas.webp'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'





const ItemCard = ({ title }) => (


    <Link

        to='/Inscricaonh'
        className='relative rounded-4xl audiowide-regular w-full text-gray-700 flex-col  h-45 lg:h-35 shadow-lg transition-transform lg:hover:scale-95 cursor-pointer border border-white/20 duration-700 ease-in-out active:scale-70 backdrop-blur-md flex'>
        <span className=' flex pt-1 justify-center  rounded-full px-4'>
            <h1 className=' uppercase text-center text-xl font-bold w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                {title}
            </h1>

        </span>



        <div className='relative top-3 w-full lg:grid lg:grid-cols-2 gap-2 px-3 flex flex-col'>
            <h1 className='text-center text-lg font-semibold uppercase shadow-lg  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full w-full'>
                turma: infor3
            </h1>
            <h1 className=' text-center text-lg font-semibold uppercase shadow-lg  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full w-full '>
                turno: tarde
            </h1>
        </div>
        <div className='relative top-5  gap-2 px-3 flex justify-between lg:grid lg:grid-cols-2'>
            <h1 className=' text-center text-lg font-semibold uppercase shadow-lg  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full w-full'>
                11: classe
            </h1>

            <span className=' pt-1  backdrop-blur-md border border-white/20 rounded-full px-4 text-lg shadow-lg font-semibold text-center uppercase w-full'>sala: 12</span>
        </div>




    </Link>
)





function Cursos() {


    const [Filter, SetFilter] = useState("Eletricidade , electronica , Telecomunicacoes")


    const todosCursos = [
        { id: 1, titulo: "Informática de Gestão", cat: "Eletricidade , electronica , Telecomunicacoes", preco: "15.000" },
        { id: 2, titulo: "Contabilidade", cat: "Construcao Civil", preco: "12.500" },
        { id: 3, titulo: "Recursos Humanos", cat: "Mecanica", preco: "12.500" },
        { id: 4, titulo: "Eletricidade", cat: "Informática", preco: "14.000" },
    ]


    const FilteredMotion = todosCursos.filter(valence => {

        if (Filter === valence.cat) return true;
    })




    return (

        <>




            <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 px-3">




                <div className='relative flex flex-col gap-3 pt-20'>
                    <h1 className='text-center text-gray-700  font-bold uppercase text-3xl audiowide-regular'>os cursos </h1>
                    <div className=' flex gap-12 border border-white/20 shadow-lg rounded-3xl overflow-x-auto no-scrollbar w-full px-2 py-2'>

                        <button

                            onClick={() => { SetFilter('Eletricidade , electronica , Telecomunicacoes') }}
                            className='border border-white/20 shadow-lg rounded-4xl text-gray-700 text-center  font-semibold text-2xl uppercase audiowide-regular cursor-pointer duration-700 ease-in-out active:scale-70 w-full px-7 py-4 '>Eletricidade , electronica , Telecomunicacoes</button>

                        <button

                            onClick={() => { SetFilter('Construcao Civil') }}
                            className='border border-white/20 shadow-lg rounded-4xl text-gray-700 text-center  font-semibold text-2xl uppercase audiowide-regular cursor-pointer duration-700 ease-in-out active:scale-70 w-full px-7 py-4 '>construcao civil</button>

                        <button

                            onClick={() => { SetFilter('Mecanica') }}
                            className='border border-white/20 shadow-lg rounded-4xl text-gray-700 text-center  font-semibold text-2xl uppercase audiowide-regular cursor-pointer duration-700 ease-in-out active:scale-70 w-full px-7 py-4 '>mecanica</button>

                        <button

                            onClick={() => { SetFilter('Informática') }}
                            className='border border-white/20 shadow-lg rounded-4xl text-gray-700 text-center  font-semibold text-2xl uppercase audiowide-regular cursor-pointer duration-700 ease-in-out active:scale-70 w-full px-7 py-4 '>informatica</button>

                    </div>

                    <div className='relative w-full h-full border border-white/20 shadow-lg rounded-2xl pb-4'>



                        <h1 className='text-center text-gray-700  font-bold uppercase text-2xl py-8 audiowide-regular'>todas turmas das areas dos cursos disponivel aqui</h1>



                        <div className="flex flex-col gap-12 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 px-3">


                            {FilteredMotion.length > 0 ? (
                                FilteredMotion.map((curso) => (
                                    <ItemCard
                                        key={curso.id}
                                        title={curso.titulo}
                                        price={curso.preco}
                                        image={curso.img}
                                        bgColor={curso.cor}
                                    />
                                ))
                            ) : (
                                <div className='relative w-full h-full flex justify-center items-center gap-2 pt-20 border border-white/20 shadow-lg rounded-2xl pb-3 px-2 '>
                                    <h1 className='text-gray-700 text-center text-3xl font-bold audiowide-regular uppercase w-full'>
                                        turmas indesponiveis por enquanto mas seras notificado apos turma desponivel
                                    </h1>

                                </div>
                            )

                            }

                        </div>






                    </div>







                </div>






            </div >







        </>


    )
}



export default Cursos