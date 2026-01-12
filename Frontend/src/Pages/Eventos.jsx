import '../index.css'
import papel from '../assets/18647.jpg'
import React, { useState } from 'react'
import { ArrowUpRight, Calendar, MapPin, User, X, CirclePlus,CircleMinus  } from 'lucide-react'



function Eventos() {

    const [isLoginOpen, setIsLoginOpen] = useState(false)



    return (

        <>
            <div className="relative w-full min-h-screen overflow-x-hidden">

                {/* 1. IMAGEM DE FUNDO FIXA (Z-0) */}
                <div className="fixed inset-0 z-0">
                    <img className="w-full h-full object-cover" src={papel} alt="Fundo" />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                {/* 2. CONTEÚDO PRINCIPAL (Z-10 para ficar na frente) */}
                {/* Adicionei o bg com transparência para dar o efeito luxo */}
                <div className="relative z-10  bg-[#0f0f0f]/10 backdrop-blur-lg w-full min-h-screen text-white font-sans p-6 lg:p-12 ">

                    {/* CONTEÚDO HERO */}
                    <div className="relative grid lg:grid-cols-2 gap-12 items-center justify-center pt-36">
                        <div>
                            <h1 className="text-6xl lg:text-8xl font-light leading-none mb-8 tracking-tighter">
                                GALA DE <br />
                                <span className="font-black italic text-pink-700">GRADUAÇÃO</span>
                            </h1>
                            <p className="text-pink-50 max-w-sm text-sm leading-relaxed mb-8">
                                Uma noite memorável para celebrar a jornada académica dos nossos finalistas. Design, inovação e futuro num só lugar.
                            </p>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="flex items-center gap-2 p-1 group bg-pink-700 rounded-full shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70">
                                <div className="w-14 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                    <ArrowUpRight className='group-hover:scale-150 transition-transform duration-700 ease-in-out' size={20} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold w-full">Inscrever-me</span>
                            </button>
                        </div>

                        {/* IMAGEM CENTRAL */}
                        <div className="relative  flex items-center justify-center lg:justify-end">
                            <div className="w-full max-w-md aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-700">
                                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800" className="w-full h-full object-cover" alt="Evento" />
                            </div>
                        </div>
                    </div>

                    {/* MINI CARDS INFERIORES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
                        <div className=" backdrop-blur-md p-8 rounded-[40px] border border-amber-800/50 bg-pink-700/20 transition-all duration-500 group">
                            <Calendar className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm uppercase tracking-widest">Data & Hora</h4>
                            <p className="text-xs text-gray-300 mt-2">15 de Janeiro, 2026 às 19:00h</p>
                        </div>

                        <div className=" backdrop-blur-md p-8 rounded-[40px] border border-amber-800/50 bg-pink-700/20 transition-all duration-500 group">
                            <MapPin className="text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm uppercase tracking-widest">Localização</h4>
                            <p className="text-xs text-gray-300 mt-2">Auditório Principal - Campus A</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-[40px] overflow-hidden relative group border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1523580494863-6f30312248f5?w=400"
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                                alt="Galeria"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Ver Galeria</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* LOGIN MODAL - Responsivo */}
            {isLoginOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop - Só aparece no desktop */}
                    <div
                        className="hidden lg:block absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsLoginOpen(false)}
                    ></div>

                    {/* Modal Container - Fullscreen em mobile, card em desktop */}
                    <div className="relative w-full h-full lg:h-auto lg:w-[450px] bg-amber-800 lg:rounded-3xl shadow-2xl flex flex-col">

                        {/* Close Button - Só no desktop */}
                        <button
                            onClick={() => setIsLoginOpen(false)}
                            className="hidden lg:flex absolute -top-4 -right-4 w-12 h-12 bg-amber-700 rounded-full items-center justify-center shadow-lg  transition cursor-pointer duration-700 ease-in-out active:scale-70"
                        >
                            <X className="text-orange-50" size={30} />
                        </button>

                        {/* Header do Modal */}
                        <div className=" px-6 py-8 lg:rounded-t-3xl flex items-center justify-between lg:justify-center">
                            <h2 className="text-white font-medium text-2xl lg:text-3xl font-mono">INSCREVER-ME AO EVENTO</h2>
                            {/* Close Button Mobile */}
                            <button
                                onClick={() => setIsLoginOpen(false)}
                                className="lg:hidden w-10 h-10 bg-amber-900 shadow-lg rounded-full flex items-center justify-center duration-700 ease-in-out active:scale-70"
                            >
                                <X className="text-white" size={30} />
                            </button>
                        </div>

                        {/* Form Container */}
                        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 lg:py-12 gap-6">




                            {/* Email Input */}
                            <div className="w-full max-w-sm">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                                    <input
                                        type='name'
                                        placeholder="O Seu Nome ou Nome Do Seu Grupo"
                                        className="w-full bg-pink-800 text-white placeholder:text-pink-200 px-12 py-4 rounded-full font-semibold text-base focus:outline-none shadow-lg transition"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="w-full max-w-sm">
                                <div className="relative w-full"> 
                                    <h2 className='text-white font-medium font-sans text-2xl flex justify-center pb-7'>Quantos viram</h2>
                                    <div className=' w-full bg-amber-900 rounded-full font-medium font-sans flex items-center justify-center p-3'><h1 className='text-white text-center text-4xl font-medium font-sans rounded-full shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70'><CirclePlus size={50} /></h1><h1 className='text-white text-4xl text-center font-medium font-sans w-full'>1000kz</h1><h1 className='text-white text-center  text-4xl font-medium font-sans rounded-full shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70'><CircleMinus size={50}  /></h1></div>
                                    
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                             className="w-full max-w-sm bg-pink-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition mt-4 cursor-pointer duration-700 ease-in-out active:scale-70 font-mono">
                                Enviar
                            </button>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Eventos