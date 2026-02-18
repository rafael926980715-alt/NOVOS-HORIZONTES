import '../index.css'
import '../App.css'





import tarefas from '../assets/gestaotarefas.webp'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Scrollbar, EffectCoverflow, Keyboard, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import 'swiper/css/keyboard'
import 'swiper/css/autoplay'



const ItemCard = ({ title }) => (


    <Link

        to='/Inscricaonh'
        className='relative rounded-4xl audiowide-regular w-full text-gray-700 flex-col  h-45 lg:h-35 shadow-lg transition-transform lg:hover:scale-95 cursor-pointer border border-white/20 duration-700 ease-in-out active:scale-70 bg-black/10 backdrop-blur-md flex'>
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


    const todosCursos = [
        { id: 1, titulo: "Informática de Gestão", cat: "Técnico Polo ||", preco: "15.000" , img: tarefas},
        { id: 2, titulo: "Contabilidade", cat: "Administração Polo |", preco: "12.500", img: tarefas },
        { id: 3, titulo: "Recursos Humanos", cat: "Gestão Polo |", preco: "12.500", img: tarefas },
        { id: 4, titulo: "Eletricidade", cat: "Técnico Polo ||", preco: "14.000", img: tarefas },
    ]








    return (

        <>




            <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-400 to-yellow-600">


                <div className='relative flex flex-col justify-center items-center gap-6 lg:px-9 px-1 lg:py-15'>



                    <Swiper
                        className='relative w-full h-[60vh] flex justify-center items-center'
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                        spaceBetween={50}
                        slidesPerView={1}
                        speed={2000}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        effect='coverflow'
                        coverflowEffect={{
                            rotate: 20,
                            slideShadows: true
                        }}

                    >
                        <SwiperSlide className='fixed inset-0 z-0 w-full h-full flex justify-center items-center'>
                            <img src={tarefas} className='object-cover w-full h-full rounded-4xl border border-white/20 shadow-lg' />
                            <div className='absolute bottom-0 flex justify-between items-center z-50  w-full  rounded-b-4xl gap-1 backdrop-blur-md bg-black/40  p-1 border border-white/20'>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'> Informática de Gestão</h1> <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>10.000kz</h1> </div>

                        </SwiperSlide>
                        <SwiperSlide className='fixed inset-0 z-0 w-full h-full'>
                            <img src={tarefas} className='object-cover w-full h-full rounded-4xl border border-white/20 shadow-lg' />
                            <div className='absolute bottom-0 flex justify-between items-center z-50  w-full rounded-b-4xl gap-1  p-1 bg-black/40 border border-white/20 backdrop-blur-md'>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'> Contabilidade</h1> <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>10.000kz</h1> </div>

                        </SwiperSlide>
                        <SwiperSlide className='fixed inset-0 z-0 w-full h-full'>
                            <img src={tarefas} className='object-cover w-full h-full rounded-4xl border border-white/20 shadow-lg' />
                            <div className='absolute bottom-0 flex justify-between items-center z-50  w-full  rounded-b-2xl gap-1 backdrop-blur-md bg-black/40 p-1 border border-white/20'>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>Recursos Humanos</h1>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>10.000kz</h1> </div>

                        </SwiperSlide>
                        <SwiperSlide className='fixed inset-0 z-0 w-full h-full'>
                            <img src={tarefas} className='object-cover w-full h-full rounded-4xl border border-white/20 shadow-lg' />
                            <div className='absolute bottom-0 flex justify-between items-center z-50  w-full rounded-b-4xl gap-1 backdrop-blur-md bg-black/40 p-1 border border-white/20'>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>Eletricidade</h1>  <h1 className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center  uppercase'>10.000kz</h1> </div>

                        </SwiperSlide>

                    </Swiper>


                    <div className='relative w-full h-full'>

                        <h1 className='text-center text-gray-700  font-bold uppercase text-xl py-2 audiowide-regular'>todas turmas dos cursos disponivel aqui do polo 1</h1>



                        <div className="flex flex-col gap-5 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4">


                            {todosCursos.length > 0 ? (
                                todosCursos.map((curso) => (
                                    <ItemCard
                                        key={curso.id}
                                        title={curso.titulo}
                                        price={curso.preco}
                                        image={curso.img}
                                        bgColor={curso.cor}
                                    />
                                ))
                            ) : (
                                <div className='relative w-full h-full flex gap-2 pt-20 '>
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