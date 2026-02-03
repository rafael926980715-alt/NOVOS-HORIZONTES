import '../index.css'

import React, { useState } from 'react'
import { Award, Calendar,ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore, Bell, User, X, Lock, Mail, MapPinPen, PenLine, AudioLines, SendHorizontal, Megaphone, ArrowLeft } from 'lucide-react'

import { Link } from 'react-router-dom'



function PerfilSearch() {


    



    // Dados de exemplo dos alunos
    const students =  0


 

    return (

        <>
            <div className="relative w-full min-h-screen overflow-x-hidden pt-30 bg-gradient-to-br from-yellow-400 to-yellow-600">




                <div className="relative z-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-15">

                    <div className="w-full max-w-4xl pt-15">

                

                        {/* Profile Display - Só aparece quando um perfil é selecionado */}
                        { students ? (
                            <div className="fixed inset-0 h-full w-full  lg:w-full lg:h-full  flex items-center justify-center">

                                <div
                                    className="fixed inset-0 w-ful bg-black/50 backdrop-blur-sm"
                                    
                                ></div>




                            
                                {/* Profile Card */}
                                <div className=" h-full bg-white w-[100vw] shadow-2xl relative lg:h-auto lg:w-[750px] lg:rounded-4xl overflow-hidden">

                                    {/* Top Section - Text */}
                                    <div className="bg-gradient-to-br from-pink-900 to-pink-800 px-8 py-12 text-center relative">
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-2">
                                            <span className="text-white font-bold font-mono">O FUTURO </span>
                                            <br />
                                            <span className="text-pink-700 font-bold font-mono">DO</span>
                                        </h1>
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
                                            AMANHA
                                        </h2>


                                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-black text-sm tracking-wider hover:scale-105 transition-transform shadow-lg">
                                            PERFIL DO ALUNO
                                        </button>
                                    </div>

                                    {/* Profile Image Section */}
                                    <div className="relative -mt-32 px-8 pb-8">
                                        <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
                                            {/* Profile Image Container */}
                                            <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-900 to-pink-900 shadow-lg overflow-hidden  relative">
                                                <img
                                                    src={students.photo}

                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/10"></div>
                                            </div>

                                            {/* Badge */}
                                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-900 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                                <Award className="text-white" size={28} />
                                            </div>
                                        </div>

                                        {/* User Info */}
                                        <div className="text-center mt-5">
                                            <h3 className="text-2xl font-bold font-mono text-pink-800">{students.name}</h3>
                                            <p className=" font-semibold font-mono text-pink-800 mt-1 text-lg uppercase">{students.course}</p>
                                            <p className="font-bold font-mono text-pink-800 text-2xl mt-2 uppercase">Turno:{students.turno}</p>
                                            <p className="font-bold font-mono text-pink-800 text-2xl mt-2 uppercase">Turma:{students.turma}</p>

                                        </div>

                                        {/* Stats Cards */}

                                        <div className="flex items-center justify-center flex-col gap-3 mt-1">
                                            <div className="bg-gradient-to-br from-pink-800 to-pink-500 rounded-full flex items-center justify-center gap-3 sm:gap-5 lg:gap-7 py-2 sm:py-3 lg:py-3 px-7 sm:px-4 lg:px-4 shadow-lg">
                                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-pink-50 flex-shrink-0" />
                                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-50 whitespace-nowrap w-full">
                                                    {students.calender}
                                                </p>
                                                <p className="text-lg sm:text-lg lg:text-2xl font-bold text-pink-50 uppercase whitespace-nowrap w-full">
                                                    {students.sale}
                                                </p>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>

                        ):(

                            <div className="fixed inset-0 lg:relative lg:inset-0 flex items-center justify-center">
                            
                            
                                                  {/* Modal Container - Fullscreen em mobile, card em desktop */}
                                                  <div className="lg:relative fixed inset-0 overflow-y-auto scroll-pink ">
                            
                            
                            
                                                    <div className='flex flex-col justify-center items-center gap-10 h-full pt-2 pb-32 lg:pb-7 lg:rounded-4xl'>
                            
                                                      <div className=" lg:rounded-t-3xl flex items-center justify-center">
                                                 
                            
                            
                                                      </div>
                            
                            
                            
                            
                            
                                                      <div className='grid grid-cols-2 justify-center items-center gap-5  w-full'>
                            
                            
                                                        <div className='relative'>
                                                          <User className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                                          <input type="text" name="" id="" placeholder='Nome'
                                                             onFocus={() => {
                                                              
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                            className='w-full bg-pink-950 backdrop-blur-md text-white
                                                           placeholder:text-white px-12 py-3 rounded-4xl
                                                          font-semibold text-xl
                                                                focus:outline-none transition shadow-lg' />
                                                        </div>
                            
                            
                                                        <div className='relative'>
                                                          <PhoneOutgoing className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                                          <input type="tel" name="" id="" placeholder='Telefone'
                                                          inputMode='numeric'
                                                          autoComplete='off'
                                                           onFocus={() => {
                                                              
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                          className='w-full bg-pink-950 backdrop-blur-md text-white
                                                   placeholder:text-white px-12 py-3 rounded-4xl font-semibold text-xl focus:outline-none
                                                    transition shadow-lg' />
                                                        </div>
                            
                            
                            
                            
                            
                                                        <div className='relative'>
                                                          <Mail className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                                          <input type="email" name="" id="" placeholder='Email'
                                                           onFocus={() => {
                                                    
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                            className='w-full bg-pink-950 backdrop-blur-md text-white
                                                      placeholder:text-white px-12 py-3 rounded-4xl 
                                                      font-semibold text-xl focus:outline-none
                                                       transition shadow-lg' />
                            
                            
                                                        </div>
                            
                            
                                                        <div className='relative'>
                                                          <MapPinPen className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                                          <input type="text" name="" id="" placeholder='Polo' 
                                                           onFocus={() => {
                                                              
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                          className='w-full bg-pink-950 backdrop-blur-md text-white
                                                   placeholder:text-white px-12 py-3 rounded-4xl
                                                    font-semibold text-xl 
                                                   focus:outline-none transition shadow-lg' />
                                                        </div>
                            
                                                      </div>
                            
                            
                            
                                                      <div className='flex flex-col justify-center items-center gap-7'>
                            
                            
                                                        <div className='relative'>
                                                          <AudioLines className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                                          <input type="text" name="" id="" placeholder='Titulo Do Assunto' 
                                                           onFocus={() => {
                                                              
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                          className='w-full bg-pink-950 backdrop-blur-md text-white
                                                   placeholder:text-white px-12 py-3 rounded-4xl
                                                    font-semibold text-xl
                                                   focus:outline-none transition shadow-lg' />
                                                        </div>
                            
                            
                            
                            
                                                        <div className='relative flex-col gap-4 flex justify-center items-center'>
                            
                                                          <textarea name="text" id="" placeholder='Descreva O Assunto...' 
                                                           onFocus={() => {
                                                              
                                                              setTimeout(() => {
                                                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                                              }, 300)
                                                            }}
                                                          className='resize-y lg:w-[30vw] lg:h-[30vh] w-[90vw] h-[20vh] sm:h-[20vh]  scroll-pink bg-pink-950 backdrop-blur-md text-white
                                                   placeholder:text-white px-3 py-2 rounded-xl
                                                    font-semibold text-xl
                                                   focus:outline-none transition shadow-lg'></textarea>
                            
                            
                                                          <button
                            
                                                            className="flex gap-2 justify-center items-center  bg-pink-950 backdrop-blur-md text-white px-10 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70"
                                                          >
                                                            <SendHorizontal size={25} className="sm:w-5 sm:h-5" />
                                                            <span className="font-sans font-semibold">ENVIAR</span>
                            
                                                          </button>
                            
                            
                            
                            
                            
                            
                            
                                                        </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                                      </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                                    </div>
                            
                            
                                                  </div>
                                                </div>

                        )}
                    </div>


                </div>

            </div>











        </>
    )
}

export default PerfilSearch