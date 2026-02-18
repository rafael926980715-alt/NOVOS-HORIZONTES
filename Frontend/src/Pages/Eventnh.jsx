
import '../index.css'
import '../App.css'

import polo from '../assets/ChatGPt.png'

import { Link } from 'react-router-dom'

import React, { useState, useRef } from 'react'
import { ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore, User, Mail, MapPinPen, AudioLines, SendHorizontal, ArrowLeft, MoveDown, Timer, TimerOff, TicketCheck } from 'lucide-react'






function EventNH() {


    const [InscriOpen, setInscriOpen] = useState(false)


    return (

        <>

            <div className="fixed inset-0 w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-500 to-yellow-600">






                <div className='z-300 flex flex-col justify-center items-center gap-6 min-h-screen'>





                    <div className=' flex  flex-col lg:flex-row  items-center  gap-4 lg:gap-14 w-[100vw] h-[100vh] lg:w-[80vw] lg:h-[70vh] lg:py-89 lg:px-6  lg:rounded-4xl  shadow-lg border border-white/20'>




                        <div className='relative z-0 lg:w-[35vw] lg:h-[70vh] w-[100vw] h-[60vh]  flex justify-center items-center'><img src={polo} className='object-cover w-full h-full lg:rounded-4xl rounded-b-4xl shadow-lg border border-white/20' />


                        </div>


                        <div className='relative  lg:w-[39vw] lg:h-[70vh]  w-[100vw] h-[100vh] rounded-4xl overflow-hidden overflow-y-auto scroll-pink lg:px-4'>


                            <div className="flex flex-col gap-6">

                                <h1 className='text-gray-700 font-bold font-sans text-5xl  border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>Instituto Médio Politécnico Novos Horizontes Polo 1</h1>

                                <p className='text-gray-700 font-semibold font-sans text-2xl border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus explicabo nulla reprehenderit optio, incidunt, ipsa minima vero consectetur quisquam, deserunt sint rem accusamus odit quos? Enim, quo assumenda. Commodi, perferendis.</p>

                                <div className=' flex justify-center items-center gap-1 border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>
                                    <MapPinHouse className='h-12 text-gray-700 text-shadow-lg/10' size={90} />
                                    <p className='text-gray-700  font-semibold font-sans text-2xl'>
                                        Município de Belas, Dangereux junto à praça da alegria, Luanda, Angola</p> </div>





                                <div className='flex flex-col lg:grid lg:grid-cols-2 justify-center items-center w-full gap-4'>

                                    <span

                                        className=' flex justify-between gap-3 items-center text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 font-semibold uppercase'> <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'>2.000kz<TicketCheck className=' text-gray-700 text-shadow-lg/10' size={37} /></h1></span>

                                    <span

                                        className=' flex justify-between gap-3 items-center text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 font-semibold uppercase'> <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'><Timer className=' text-gray-700 text-shadow-lg/10' size={37} /> 09:10 </h1>  <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'><TimerOff className=' text-gray-700 text-shadow-lg/10' size={37} /> 19:00  </h1> </span>




                                </div>



                                <button
                                    onClick={() => setInscriOpen(true)}
                                    className='flex justify-center'> <h1 className='flex gap-3 text-3xl  audiowide-regular text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg font-semibold uppercase transition-all px-4 py-2 cursor-pointer duration-700 ease-in-out active:scale-70'>se inscreva <ArrowRight className=' text-gray-700 text-shadow-lg/10' size={37} /></h1> </button>











                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {InscriOpen && (

                <div className="fixed inset-0 flex items-center justify-center z-200">


                    <div className="relative overflow-y-auto scroll-pink ">



                        <div className='flex flex-col justify-center items-center gap-10 h-full pb-32 pt-29 lg:pt-0 lg:pb-7 lg:rounded-4xl backdrop-blur-md bg-gradient-to-br from-yellow-500 to-yellow-600'>

                            <button
                                onClick={() => setInscriOpen(false)}
                                className="overflow-hidden backdrop-blur-md px-6 py-3 border border-white/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer duration-700 ease-in-out active:scale-70"
                            >
                                <h1 className='text-gray-700 font-semibold font-sans flex gap-3'> <ArrowLeft className='text-gray-700' /> VOLTAR</h1>
                            </button>


                            <div className='grid grid-cols-2 lg:flex justify-center items-center gap-5  w-full'>


                                <div className='relative'>
                                    <User className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="text" name="" id="" placeholder='Nome'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[20vw] backdrop-blur-md border border-white/20 text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 rounded-4xl
                                          font-semibold text-xl
                                                focus:outline-none transition shadow-lg'/>
                                </div>


                                <div className='relative'>
                                    <PhoneOutgoing className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="tel" name="" id="" placeholder='Telefone'
                                        inputMode='numeric'
                                        autoComplete='off'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[20vw] backdrop-blur-md text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 rounded-4xl  border border-white/20 font-semibold text-xl focus:outline-none
                                    transition shadow-lg' />
                                </div>





                                <div className='relative'>
                                    <Mail className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="email" name="" id="" placeholder='Email'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[20vw]  backdrop-blur-md text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 border border-white/20 rounded-4xl 
                                      font-semibold text-xl focus:outline-none
                                       transition shadow-lg' />


                                </div>


                                <div className='relative'>
                                    <MapPinPen className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="text" name="" id="" placeholder='Polo'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[20vw]  backdrop-blur-md text-gray-700
                                           placeholder:text-gray-700 px-12 py-3  border border-white/20 rounded-4xl
                                    font-semibold text-xl 
                                   focus:outline-none transition shadow-lg' />
                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            )}







        </>

    )
}

export default EventNH