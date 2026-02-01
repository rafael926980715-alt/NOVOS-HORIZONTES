import '../index.css'
import '../App.css'

import tarefas from '../assets/gestaotarefas.webp'
import ensino from '../assets/portrait.jpg'
import React, { useState } from 'react'
import { ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore  , Users  } from 'lucide-react'
import { Link } from 'react-router-dom'




const ItemCard = ({ title, price, image }) => (
    <div className={`relative w-full overflow-x-hidden rounded-[2.5rem] backdrop-blur-md shadow-lg flex flex-col h-48 transition-transform lg:hover:scale-95 cursor-pointer border border-white/20 duration-700 ease-in-out active:scale-70`}>
      
        <div className="relative w-full h-full flex flex-col justify-center items-center z-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute z-10 p-7 ">
            <h3 className="text-2xl font-bold font-sans text-white leading-tight">{title}</h3>
            <p className="text-[14px] font-bold font-sans text-white">{price}kz</p>
        </div>
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




                        <div className='relative z-0 w-[100vw]  h-[60vh] lg:h-[50vh] flex justify-center items-center'><img src={ensino} className='object-cover w-full h-full rounded-b-4xl shadow-lg border border-white/20' />

                            <div className='absolute bottom-0 flex justify-between items-center z-50  w-[100vw]'> <p className='text-white font-bold font-sans text-[20px] lg:text-5xl px-5'> Os Melhores Cursos Encontram-se Aqui No Polo 1 </p> </div>
                        </div>


                        <div className='relative w-[100vw] h-[100vh] overflow-hidden overflow-y-auto scroll-pink'>


                            <div className="flex flex-col gap-4 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 pt-2 pb-2">



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