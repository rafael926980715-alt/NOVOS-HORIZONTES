import '../index.css'
import '../App.css'
import React, { useState } from 'react'
import { ArrowRight, MapPin, } from 'lucide-react'

import tarefas from '../assets/gestaotarefas.webp'
import ensino from '../assets/surprise.webp'
import { MapPinHouse, PhoneOutgoing, MessageCircleMore, Users, Trash2 } from 'lucide-react'




const ItemCard = ({ title, price }) => (

    <div className='relative rounded-4xl w-full text-gray-700 flex-col h-23 shadow-lg transition-transform lg:hover:scale-95 cursor-pointer border border-white/20 duration-700 ease-in-out active:scale-70 bg-black/10 backdrop-blur-md flex'>


        <span className=' flex pt-1 justify-center  rounded-full px-4'>
            <h1 className=' uppercase text-center text-xl font-bold font-mono w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                {title}
            </h1>

        </span>



        <div className='relative top-3 w-full flex justify-between gap-2 px-2'>
            <h1 className='text-center text-lg font-semibold font-mono uppercase shadow-lg  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                ha 3 mim
            </h1>
            <h1 className=' text-center text-lg font-semibold font-mono uppercase shadow-lg  backdrop-blur-md border border-white/20  px-3 py-1 rounded-full w-[400px] text-ellipsis overflow-hidden whitespace-nowrap'>
                polo 1
            </h1>

            <span className=' pt-1  backdrop-blur-md border border-white/20 rounded-full px-4 cursor-pointer shadow-lg duration-700 ease-in-out active:scale-70'><Trash2 className=' text-xl font-semibold font-mono uppercase' /></span>

        </div>






    </div>

)





function Notificacions() {

    const [isLoginOpen, setIsLoginOpen] = useState(false)


    const todosCursos =  [
        { id: 1, titulo: "Informática de Gestão Informática de Gestão", preco: "15.000", img: tarefas , type:'Dowload' },
        { id: 2, titulo: "Contabilidade Contabilidade",preco: "12.500", type:'Boletom'  },
        { id: 3, titulo: "Recursos Humanos Contabilidade", preco: "12.500", type:'Message'  },
        { id: 4, titulo: "Eletricidade Contabilidade", preco: "14.000", img: tarefas , type:'Event'},
        { id: 4, titulo: "Eletricidade Contabilidade", preco: "14.000", type:'Event'}


    ]







    return (<>




        <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-400 to-yellow-600">


            <div className='z-300 flex flex-col justify-center items-center pt-13  gap-6 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bottom-13  fixed bottom-0'>





                <div className=' flex  flex-col  items-center  gap-4 w-[100vw] h-[100vh]  '>




                    <div className='relative z-0 w-[100vw]  h-[60vh] lg:h-[50vh] flex justify-center items-center'>

                        <img src={ensino} className='object-cover w-full h-full rounded-b-4xl shadow-lg border border-white/20' />

                        <div className='absolute bottom-0 flex justify-between items-center z-50  w-[100vw]'>


                            <div className="flex gap-3 overflow-x-auto pb-3 lg:pb-7 pl-2 lg:pl-9 no-scrollbar">


                            </div>




                        </div>


                    </div>


                    <div className='relative w-[100vw] h-[100vh] overflow-hidden overflow-y-auto scroll-pink'>


                        <div className="flex flex-col gap-7 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 pt-2 pb-2">





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
                                    <h1 className='text-gray-700 text-center text-3xl font-bold mask-radial-from-neutral-400 uppercase w-full'>
                                        olha ou a instituicao nh nao tem nada a expor pra voces <br/>  ou mesmo nao estas cadastrado na instituicao nh
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