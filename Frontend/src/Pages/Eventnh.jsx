
import '../index.css'
import '../App.css'

import polo from '../assets/ChatGPt.png'

import { Link } from 'react-router-dom'

import React, { useState, useRef } from 'react'
import { ArrowRight, MapPinHouse, PhoneOutgoing, User, Mail, ArrowLeft, Timer, TimerOff, TicketCheck, UserPlus, UserMinus, Users } from 'lucide-react'






function EventNH() {


    const [InscriOpen, setInscriOpen] = useState(false)

    const eventNH = {
        id: 1,
        imagem: polo,
        titulo: 'Instituto Médio Politécnico Novos Horizontes Polo 1',
        descricao: 'tetur quisquam, deserunt sint rem accusamus odit quos? Enim, quo assumenda. Commodi, perferendis.',
        localizacao: 'Município de Belas, Dangereux junto à praça da alegria, Luanda, Angola',
        pagar: 2000,
        comecarHoraEs: '09:8',
        terminarHoraDi: '09:8',
        button: true
    }


    return (

        <>

            <div className="fixed inset-0 w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-500 to-yellow-600">






                <div className='z-300 flex flex-col justify-center items-center gap-6 min-h-screen'>



                    {eventNH ? (

                        <div className=' flex  flex-col lg:flex-row  items-center  gap-4 lg:gap-14 w-[100vw] h-[100vh] lg:w-[80vw] lg:h-[70vh] lg:py-89 lg:px-6  lg:rounded-4xl  shadow-lg border border-white/20'>




                            <div className='relative z-0 lg:w-[35vw] lg:h-[70vh] w-[100vw] h-[60vh]  flex justify-center items-center'><img src={eventNH.imagem} className='object-cover w-full h-full lg:rounded-4xl rounded-b-4xl shadow-lg border border-white/20' />


                            </div>

                            <div className='relative  lg:w-[39vw] lg:h-[70vh]  w-[100vw] h-[100vh] rounded-4xl overflow-hidden overflow-y-auto scroll-pink lg:px-4  pb-20'>


                                <div className="flex flex-col gap-6">


                                    <h1 className='text-gray-700 font-bold font-sans text-5xl  border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>{eventNH.titulo}</h1>

                                    <p className='text-gray-700 font-semibold font-sans text-2xl border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg '>{eventNH.descricao}</p>

                                    <div className=' flex justify-center items-center gap-1 border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>
                                        <MapPinHouse className='h-12 text-gray-700 text-shadow-lg/10' size={90} />
                                        <p className='text-gray-700  font-semibold font-sans text-2xl'>
                                            {eventNH.localizacao}</p> </div>





                                    <div className='flex flex-col lg:grid lg:grid-cols-2 justify-center items-center w-full gap-4'>

                                        <span

                                            className=' flex justify-between gap-3 items-center text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 font-semibold uppercase'> <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'>{eventNH.pagar}kz<TicketCheck className=' text-gray-700 text-shadow-lg/10' size={37} /></h1></span>

                                        <span

                                            className=' flex justify-between gap-3 items-center text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 font-semibold uppercase'> <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'><Timer className=' text-gray-700 text-shadow-lg/10' size={37} />{eventNH.comecarHoraEs}</h1>  <h1 className='flex gap-3 text-3xl  audiowide-regular w-full'><TimerOff className=' text-gray-700 text-shadow-lg/10' size={37} />{eventNH.terminarHoraDi}</h1> </span>




                                    </div>


                                    {eventNH.button && (
                                        <button
                                            onClick={() => setInscriOpen(true)}
                                            className='flex justify-center'> <h1 className='flex gap-3 text-3xl  audiowide-regular text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg font-semibold uppercase transition-all px-4 py-2 cursor-pointer duration-700 ease-in-out active:scale-70'>se inscreva <ArrowRight className=' text-gray-700 text-shadow-lg/10' size={37} /></h1>


                                        </button>)}







                                </div>

                            </div>

                        </div>


                    ) : (<></>) }
                </div>
            </div>


            {InscriOpen && (

                <div className="fixed inset-0 z-500 flex flex-col justify-center items-center">


                    <div className="relative h-full w-full lg:h-[70vh] lg:w-[50vw] lg:rounded-4xl">

                        <div className='bg-gradient-to-br  from-yellow-500 to-yellow-600 h-full w-full px-4 py-9 flex flex-col lg:rounded-4xl gap-7  overflow-y-auto scroll-pink '>

                            <button
                                onClick={() => setInscriOpen(false)}
                                className="overflow-hidden backdrop-blur-md px-6 py-8 border border-white/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer duration-700 ease-in-out active:scale-70"
                            >
                                <h1 className='text-gray-700 font-semibold font-sans flex gap-3'> <ArrowLeft className='text-gray-700' /> VOLTAR</h1>
                            </button>

                            <h1 className='text-gray-700 font-bold font-sans text-3xl  border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg audiowide-regular'>Instituto Médio Politécnico Novos Horizontes Polo 1</h1>


                            <div className='lg:grid lg:grid-cols-3 flex flex-col w-full lg:h-[10vh] h-full pt-2 gap-5'>


                                <div className='relative'>
                                    <User className="absolute z-50 left-4 lg:top-1/28 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="text" name="" id="" placeholder='Nome'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[16vw] backdrop-blur-md border border-white/20 text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 rounded-4xl
                                          font-semibold text-xl
                                                focus:outline-none transition shadow-lg'/>
                                </div>


                                <div className='relative'>
                                    <PhoneOutgoing className="absolute z-50 left-4 lg:top-1/28 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="tel" name="" id="" placeholder='Telefone'
                                        inputMode='numeric'
                                        autoComplete='off'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[16vw] backdrop-blur-md text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 rounded-4xl  border border-white/20 font-semibold text-xl focus:outline-none
                                    transition shadow-lg' />
                                </div>





                                <div className='relative'>
                                    <Mail className="absolute z-50 left-4 lg:top-1/28 top-1/2  -translate-y-1/2 text-gray-700" size={20} />
                                    <input type="email" name="" id="" placeholder='Email'
                                        onFocus={() => {

                                            setTimeout(() => {
                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className='w-full lg:w-[16vw]  backdrop-blur-md text-gray-700
                                           placeholder:text-gray-700 px-12 py-3 border border-white/20 rounded-4xl 
                                      font-semibold text-xl focus:outline-none
                                       transition shadow-lg' />


                                </div>








                            </div>

                            <div className='w-full flex justify-center items-center flex-col gap-7'>
                                <h1 className='text-gray-700 uppercase text-2xl audiowide-regular font-bold shadow-lg rounded-4xl py-2 px-4 border border-white/20'>identifique o numero de pessoas que viram consigo</h1>
                                <section className='border border-white/20 rounded-4xl shadow-lg h-full w-full lg:h-[29vh] lg:w-[20vw] flex flex-col gap-5 py-5 px-4'>
                                    <span className='w-full shadow-lg border border-white/20 rounded-4xl text-gray-700 uppercase text-2xl audiowide-regular font-bold flex px-3 py-4 justify-between'> <h3 className='text-gray-700 text-2xl audiowide-regular font-bold shadow-lg rounded-full py-2 px-4 border border-white/20  cursor-pointer duration-700 ease-in-out active:scale-70'> <UserMinus />   </h3>  <h1 className='text-2xl w-full text-center '>2.000kz</h1>  <h3 className='text-gray-700 text-2xl audiowide-regular font-bold shadow-lg rounded-full py-2 px-4 border border-white/20  cursor-pointer duration-700 ease-in-out active:scale-70'> <UserPlus /> </h3> </span>

                                    <nav className='w-full h-full shadow-lg border border-white/20 rounded-4xl text-gray-700 uppercase text-2xl audiowide-regular font-bold flex justify-center items-center py-8'><h1 className='text-5xl'>0</h1> <Users size={50} /></nav>

                                </section>
                            </div>

                        </div>

                    </div>

                </div>


            )}







        </>

    )
}

export default EventNH