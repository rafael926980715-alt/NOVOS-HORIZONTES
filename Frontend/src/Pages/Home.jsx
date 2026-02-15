
import '../index.css'
import '../App.css'

import polo from '../assets/ChatGPt.png'

import { Link } from 'react-router-dom'

import React, { useState, useRef } from 'react'
import { ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore, Bell, User, X, Lock, Mail, MapPinPen, PenLine, AudioLines, SendHorizontal, Megaphone, ArrowLeft } from 'lucide-react'




function Home() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [Focal, setFocal] = useState(null)
  const Focalid1 = useRef(null)
  const Focalid2 = useRef(null)




  const mudound = (index) => {
    index.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }







  return (



    <>


      <div className="relative w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-500 to-yellow-600">



        {/* O SEGUNDO POLO 1 */}


        <div ref={Focalid1} className='z-300 flex flex-col justify-center items-center gap-6 min-h-screen'>





          <div className=' flex  flex-col lg:flex-row  items-center  gap-4 lg:gap-14 w-[100vw] h-[100vh] lg:w-[80vw] lg:h-[70vh] lg:py-89 lg:px-6  lg:rounded-4xl  shadow-lg border border-white/20'>




            <div className='relative z-0 lg:w-[35vw] lg:h-[70vh] w-[100vw] h-[60vh]  flex justify-center items-center'><img src={polo} className='object-cover w-full h-full lg:rounded-4xl rounded-b-4xl shadow-lg border border-white/20' />

              <div className='absolute bottom-7 flex justify-between items-center z-50  w-[70vw]  lg:w-[20vw]  rounded-full gap-10 backdrop-blur-md  p-1 border border-white/20'>  <h1 onClick={() => mudound(Focalid2)} className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center cursor-pointer bg-black/10 backdrop-blur-md duration-700 ease-in-out active:scale-70 shadow-lg border border-white/20 uppercase'> Ir para Polo 2</h1> </div>
            </div>


            <div className='relative  lg:w-[39vw] lg:h-[70vh]  w-[100vw] h-[100vh] rounded-4xl overflow-hidden overflow-y-auto scroll-pink lg:px-4'>


              <div className="flex flex-col gap-9">

                <h1 className='text-gray-700 font-bold font-sans text-5xl  border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>Instituto Médio Politécnico Novos Horizontes Polo 1</h1>

                <p className='text-gray-700 font-semibold font-sans text-2xl border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus explicabo nulla reprehenderit optio, incidunt, ipsa minima vero consectetur quisquam, deserunt sint rem accusamus odit quos? Enim, quo assumenda. Commodi, perferendis.</p>

                <div className=' flex justify-center items-center gap-1 border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg border'>
                  <MapPinHouse className='h-12 text-gray-700 text-shadow-lg/10' size={90} />
                  <p className='text-gray-700  font-semibold font-sans text-2xl'>
                    Município de Belas, Dangereux junto à praça da alegria, Luanda, Angola</p> </div>



                <div className='flex flex-col justify-center items-center w-full'>


                  <Link
                    to='/cursos'
                    className=' flex text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 cursor-pointer duration-700 ease-in-out active:scale-70 border'> <h1 className='flex gap-3 font-bold font-sans text-3xl'>Ver Cursos <ArrowRight className=' text-gray-700 text-shadow-lg/10' size={37} /></h1> </Link>


                </div>


                <div className='flex  flex-col lg:flex-row gap-5 justify-between items-center w-full'><h1 className='flex gap-5 text-gray-700 font-bold font-sans text-3xl  border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2'> <PhoneOutgoing className=' text-gray-700 text-shadow-lg/10' size={37} />
                  921 296 545</h1>  <h1 className='flex gap-1 text-gray-700 font-bold font-sans text-3xl border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2'> <MessageCircleMore className=' text-gray-700 text-shadow-lg/10' size={37} />

                    +244 923 283 631</h1> </div>


                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex gap-2 justify-center items-center w-full backdrop-blur-md text-gray-700  rounded-full font-bold text-2xl transition-all cursor-pointer duration-700 ease-in-out active:scale-70 pb-4"
                >

                  <span className="font-sans font-bold px-6 py-3 border flex justify-center gap-2 border-white/20 backdrop-blur-md text-gray-700 shadow-lg rounded-full">PEDIR INFORMACOES < ArrowRight size={29} className="sm:w-9 sm:h-8" /></span>

                </button>



              </div>
            </div>
          </div>
        </div>






        {/* O SEGUNDO POLO 2 */}


        <div ref={Focalid2} className='z-300 flex flex-col justify-center items-center gap-6 min-h-screen'>





          <div className=' flex  flex-col lg:flex-row  items-center  gap-4 lg:gap-14 w-[100vw] h-[100vh] lg:w-[80vw] lg:h-[70vh] lg:py-89 lg:px-6  lg:rounded-4xl  shadow-lg border border-white/20'>




            <div className='relative z-0 lg:w-[35vw] lg:h-[70vh] w-[100vw] h-[60vh]  flex justify-center items-center'><img src={polo} className='object-cover w-full h-full lg:rounded-4xl rounded-b-4xl shadow-lg border border-white/20' />

              <div className='absolute bottom-7 flex justify-between items-center z-50  w-[70vw]  lg:w-[20vw]  rounded-full gap-10 backdrop-blur-md  p-1 border border-white/20'>  <h1 onClick={() => mudound(Focalid1)} className='text-white  py-2 rounded-full font-bold audiowide-regular w-full text-center cursor-pointer bg-black/10 backdrop-blur-md duration-700 ease-in-out active:scale-70 shadow-lg border border-white/20 uppercase'> Ir para Polo 1</h1> </div>
            </div>


            <div className='relative  lg:w-[39vw] lg:h-[70vh]  w-[100vw] h-[100vh] rounded-4xl overflow-hidden overflow-y-auto scroll-pink lg:px-4'>


              <div className="flex flex-col gap-9">

                <h1 className='text-gray-700 font-bold font-sans text-5xl  border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg'>Instituto Médio Politécnico Novos Horizontes Polo 2</h1>

                <p className='text-gray-700 font-semibold font-sans text-2xl  backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg border border-white/20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus explicabo nulla reprehenderit optio, incidunt, ipsa minima vero consectetur quisquam, deserunt sint rem accusamus odit quos? Enim, quo assumenda. Commodi, perferendis.</p>

                <div className=' flex justify-center items-center gap-1 border border-white/20 backdrop-blur-md rounded-4xl py-2 px-5 shadow-lg '>
                  <MapPinHouse className='h-12 text-gray-700 text-shadow-lg/10' size={90} />
                  <p className='text-gray-700  font-semibold font-sans text-2xl'>
                    Município de Belas, Dangereux junto à praça da alegria, Luanda, Angola</p> </div>



                <div className='flex flex-col justify-center items-center w-full'>


                  <Link
                    to='/Cursonh'
                    className=' flex text-gray-700 border border-white/20 backdrop-blur-md rounded-full shadow-lg px-4 py-2 cursor-pointer duration-700 ease-in-out active:scale-70 border'> <h1 className='flex gap-3 font-bold font-sans text-3xl'>Ver Cursos <ArrowRight className=' text-gray-700 text-shadow-lg/10' size={37} /></h1> </Link>


                </div>


                <div className='flex  flex-col lg:flex-row gap-5 justify-between items-center w-full'><h1 className='flex gap-5 text-gray-700 font-bold font-sans text-3xl backdrop-blur-md border border-white/20 rounded-full shadow-lg px-4 py-2 border'> <PhoneOutgoing className=' text-gray-700 text-shadow-lg/10' size={37} />
                  921 296 545</h1>  <h1 className='flex gap-1 border-white/20 text-gray-700 font-bold font-sans text-3xl border backdrop-blur-md rounded-full shadow-lg px-4 py-2'> <MessageCircleMore className=' text-gray-700 text-shadow-lg/10' size={37} />

                    +244 923 283 631</h1> </div>


                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex gap-2 justify-center items-center w-full backdrop-blur-md text-gray-700  rounded-full font-bold text-2xl transition-all cursor-pointer duration-700 ease-in-out active:scale-70 pb-4"
                >

                  <span className="font-sans font-bold px-6 py-3 border flex justify-center gap-2 border-white/20 backdrop-blur-md text-gray-700 shadow-lg rounded-full">PEDIR INFORMACOES < ArrowRight size={29} className="sm:w-9 sm:h-8" /></span>

                </button>


              </div>

            </div>

          </div>

        </div>
      </div >


      
                {
                  isLoginOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-200">


                      {/* Modal Container - Fullscreen em mobile, card em desktop */}
                      <div className="fixed inset-0 overflow-y-auto scroll-pink ">



                        <div className='flex flex-col justify-center items-center gap-10 h-full pb-32 pt-29 lg:pt-0 lg:pb-7 lg:rounded-4xl backdrop-blur-md bg-gradient-to-br from-yellow-500 to-yellow-600'>

                          <div className=''>
                            <button
                              onClick={() => setIsLoginOpen(false)}
                              className="overflow-hidden backdrop-blur-md px-6 py-3 border border-white/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer duration-700 ease-in-out active:scale-70"
                            >
                              <h1 className='text-gray-700 font-semibold font-sans flex gap-3'> <ArrowLeft className='text-gray-700' /> VOLTAR</h1>
                            </button>
                          </div>

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



                          <div className='flex flex-col justify-center items-center gap-7'>


                            <div className='relative'>
                              <AudioLines className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                              <input type="text" name="" id="" placeholder='Titulo Do Assunto'
                                onFocus={() => {

                                  setTimeout(() => {
                                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                  }, 300)
                                }}
                                className='w-full lg:w-[20vw] backdrop-blur-md text-gray-700
                               placeholder:text-gray-700 px-12 py-3 rounded-4xl
                        font-semibold text-xl
                       focus:outline-none transition  border border-white/20 shadow-lg' />
                            </div>




                            <div className='relative flex-col gap-4 flex justify-center items-center'>

                              <textarea name="text" id="" placeholder='Descreva O Assunto...'
                                onFocus={() => {

                                  setTimeout(() => {
                                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                  }, 300)
                                }}
                                className='resize-y lg:w-[30vw] lg:h-[30vh] w-[90vw] h-[20vh] sm:h-[20vh]  scroll-pink   backdrop-blur-md text-gray-700
                               placeholder:text-gray-700 px-3 py-2 rounded-xl
                        font-semibold text-xl
                       focus:outline-none transition  border border-white/20 shadow-lg'></textarea>


                              <button

                                className="flex gap-2 justify-center items-center   backdrop-blur-md  border border-white/20 text-gray-700
                               px-10 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70"
                              >
                                <SendHorizontal size={25} className="sm:w-5 sm:h-5" />
                                <span className="font-sans font-semibold">ENVIAR</span>

                              </button>







                            </div>









                          </div>














                        </div>


                      </div>
                    </div>
                  )
                }















    </>

  )
}

export default Home