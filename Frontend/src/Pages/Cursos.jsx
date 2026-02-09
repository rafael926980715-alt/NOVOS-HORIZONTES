import '../index.css'
import '../App.css'

import tarefas from '../assets/gestaotarefas.webp'
import ensino from '../assets/focused.webp'
import React, { useState } from 'react'
import { ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore, Users , Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'




const ItemCard = ({ title, price, image }) => (
    <div className='relative rounded-4xl w-full overflow-hidden flex-col h-48 shadow-lg transition-transform lg:hover:scale-95 cursor-pointer border border-white/20 duration-700 ease-in-out active:scale-70 bg-black/10 backdrop-blur-md flex'>

        <div className='relative '>

            <div className='fixed inset-0 z-0 border-none'>
                <img src={image} className='border-none' />
            </div>


        </div>

        <div className='relative right-8 top-1 w-full px-16'>
          
        </div>

        <div className='relative top-36 w-full flex justify-between px-2 gap-2'>
            <h1 className='text-white text-center text-xl font-semibold font-sans uppercase bg-black/10  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full  w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
               {title}
            </h1>

            <span className='  bg-black/10  backdrop-blur-md border border-white/20 rounded-full px-4 text-white font-bold font-sans pt-1'>{price}kz</span>

        </div>






    </div>
)





function Cursos() {


    const todosCursos = [
        { id: 1, titulo: "Informática de Gestão", cat: "Técnico Polo ||", preco: "15.000", img: tarefas },
        { id: 2, titulo: "Contabilidade", cat: "Administração Polo |", preco: "12.500", img: tarefas },
        { id: 3, titulo: "Recursos Humanos", cat: "Gestão Polo |", preco: "12.500", img: tarefas },
        { id: 4, titulo: "Eletricidade", cat: "Técnico Polo ||", preco: "14.000", img: tarefas },
    ]





    return (

        <>




            <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-400 to-yellow-600">


                <div className='z-300 flex flex-col justify-center items-center pt-13  gap-6 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bottom-13  fixed bottom-0'>





                    <div className=' flex  flex-col  items-center  gap-4 w-[100vw] h-[100vh]  '>




                        <div className='relative z-0 w-[100vw]  h-[60vh] lg:h-[50vh] flex justify-center items-center'><img src={ensino} className='object-cover w-full h-full rounded-b-4xl shadow-lg' />


                        </div>


                        <div className='relative w-[100vw] h-[100vh] overflow-hidden overflow-y-auto scroll-pink'>


                            <div className="flex flex-col gap-7 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 pt-2 pb-2">



                                {
                                    todosCursos.map((curso) => (
                                        <ItemCard
                                            key={curso.id}
                                            title={curso.titulo}
                                            price={curso.preco}
                                            image={curso.img}
                                            bgColor={curso.cor}
                                        />
                                    ))

                                }

                            </div>






                        </div>







                    </div>






                </div>




            </div >


        </>


    )
}

export default Cursos