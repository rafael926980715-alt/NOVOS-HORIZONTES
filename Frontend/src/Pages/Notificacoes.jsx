import '../index.css'
import '../App.css'
import React, { useState } from 'react'


import tarefas from '../assets/gestaotarefas.webp'
import ensino from '../assets/surprise.webp'
import { Trash2, Download } from 'lucide-react'








function Notificacions() {

    const todosCursos = [
        { id: 1, titulo: "Informática", informacion: "hoje e o dia que nos nao se quej 3dnid vamos molfdar",filena:'  matronic.pdf' ,size:' 1.5mg' , type: 'Dowload' },
        { id: 2, titulo: "Contabilidade Contabilidade", informacion: "hoje e o dia que nos nao se quej 3dnid vamos molfdar", type: 'Dowload' ,filena:'  mat.pdf' ,size:' 1.5mg' },
        { id: 3, titulo: "Recursos Humanos Contabilidade", informacion: "hoje e o dia que nos nao se quej 3dnid vamos molfdar", type: 'Message'},
        { id: 4, titulo: "Eletricidade Contabilidade", informacion: "hoje e o dia que nos nao se quej 3dnid vamos molfdar", type: 'message' },
        { id: 4, titulo: "Eletricidade Contabilidade", informacion: "hoje e o dia que nos nao se quej 3dnid vamos molfdar", type: 'message' }


    ]







    return (<>




        <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-400 to-yellow-600">


            <div className='z-300 flex flex-col justify-center items-center pt-13  gap-6 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bottom-13  fixed bottom-0'>





                <div className='relative flex  flex-col  items-center  gap-4 w-[100vw] h-[100vh]  '>




                    <div className='fixed z-0 w-[100vw]  h-[60vh] lg:h-[50vh] flex justify-center items-center'>

                        <img src={ensino} className='object-cover w-full h-full rounded-b-4xl shadow-lg border border-white/20' />

                        <div className='absolute bottom-0 flex justify-between items-center z-50  w-[100vw]'>


                            <div className="flex gap-3 overflow-x-auto pb-3 lg:pb-7 pl-2 lg:pl-9 no-scrollbar">


                            </div>




                        </div>


                    </div>


                    <div className='relative w-[100vw] h-[100vh] overflow-hidden overflow-y-auto scroll-pink lg:pt-[500px] pt-[350px]  '>


                        <div className="flex flex-col gap-7 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 pt-2 pb-2">





                            {todosCursos.length > 0 ? (
                                todosCursos.map((curso) => (
                                    <>
                                        <div className='relative rounded-4xl w-full  text-gray-700 flex-col h-full shadow-lg transition-transform lg:hover:scale-95 duration-700 ease-in-out cursor-pointer border border-white/20 bg-black/10 backdrop-blur-md flex gap-4 px-2 py-3'>


                                            <span className=' flex pt-1 justify-center  rounded-full px-4'>
                                                <h1 className='uppercase text-center text-xl font-semibold font-mono w-full'>
                                                    {curso.titulo}
                                                </h1>
                                            </span>

                                            <section className='h-full w-full border border-white/20 rounded-3xl shadow-lg px-1 py-1'>
                                                <p className='uppercase text-center text-lg font-bold font-mono w-full'>
                                                    {curso.informacion}
                                                </p>
                                            </section>





                                            <div className='relative w-full flex justify-between gap-2'>
                                                <h1 className='text-center text-lg font-semibold font-mono uppercase shadow-lg   border border-white/20  px-3 py-1 rounded-full w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                                                    ha 3 mim
                                                </h1>


                                                <span className=' pt-1 border border-white/20 rounded-full px-4 cursor-pointer shadow-lg duration-700 ease-in-out active:scale-70'><Trash2 className=' text-xl font-semibold font-mono uppercase' /></span>

                                            </div>






                                        </div>


                                        {curso.type === 'Dowload' && (

                                            <div className='relative rounded-4xl w-full text-gray-700 flex-col h-full shadow-lg transition-transform lg:hover:scale-95 duration-700 ease-in-out cursor-pointer border border-white/20 bg-black/10 backdrop-blur-md flex gap-4 px-2 py-3'>


                                                <span className=' flex pt-1 justify-center  rounded-full'>
                                                    <h1 className=' uppercase text-center text-xl font-semibold font-mono w-full'>
                                                        {curso.titulo}
                                                    </h1>

                                                </span>


                                                <section className='h-full w-full border border-white/20 rounded-3xl shadow-lg flex justify-between items-center'>

                                                    <p className='uppercase text-lg font-bold font-mono w-full px-2'>
                                                         {curso.filena}
                                                    </p>
                                                    <p className='uppercase text-lg font-bold font-mono w-full'>
                                                        {curso.size}
                                                    </p>

                                                </section>



                                                <div className='relative w-full flex justify-between gap-2'>
                                                    <h1 className='text-center text-lg font-semibold font-mono uppercase shadow-lg border border-white/20  px-3 py-1 rounded-full w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                                                        ha 3 mim
                                                    </h1>

                                                    <span className=' pt-1 border border-white/20 rounded-full px-4 py-2 cursor-pointer shadow-lg duration-700 ease-in-out active:scale-70'><Download className=' text-xl font-semibold font-mono uppercase' /></span>

                                                    <span className=' pt-1 border border-white/20 rounded-full px-4 cursor-pointer shadow-lg duration-700 ease-in-out active:scale-70'><Trash2 className=' text-xl font-semibold font-mono uppercase' /></span>

                                                </div>






                                            </div>


                                        )}

                                    </>
                                ))
                            ) : (
                                <div className='relative w-full h-full flex gap-2 pt-20 '>
                                    <h1 className='text-gray-700 text-center text-3xl font-bold audiowide-regular uppercase w-full'>
                                        olha ou a instituicao nh nao tem nada a expor pra voces ou mesmo nao estas cadastrado na instituicao nh
                                    </h1>

                                </div>
                            )

                            }

                        </div>






                    </div>







                </div>






            </div>




        </div >









    </>)
}

export default Notificacions