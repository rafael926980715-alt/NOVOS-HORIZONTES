import '../index.css'
import '../App.css'
import { ArrowRight, MapPinHouse, PhoneOutgoing, MessageCircleMore, Bell, User, X, Lock, Mail, MapPinPen, PenLine, AudioLines, SendHorizontal, Megaphone, ArrowLeft, Image , Cake } from 'lucide-react'



function InscricaoNH() {

  return (



    <>



      <div className="relative w-full min-h-screen  bg-gradient-to-br from-yellow-500 to-yellow-600 pb-10 pt-30">

        <div className='relative flex flex-col justify-center items-center'>

          <div className='rounded-[50%] backdrop-blur-md border border-white/20 shadow-lg p-3'>


            <User className='text-gray-700' size={200} />
            <span className='absolute bottom-8 right-0 w-13 h-13 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20  duration-700 ease-in-out active:scale-70 lg:hover:scale-95 cursor-pointer'><Image className='text-gray-700' size={40} /></span>

          </div>



          <div className='w-full h-full flex flex-col justify-center items-center pt-3'>


                <h1 className='text-center text-gray-700  font-bold uppercase text-xl py-2 font-mono'> sessao de inscricao pra o aluno </h1>

            <form className='lg:grid lg:grid-cols-5 flex flex-col justify-center items-center w-full lg:w-[90vw] shadow-lg border border-white/20 backdrop-blur-md rounded-2xl h-full px-3 lg:gap-0 gap-5 py-3'>


              <span className='relative'>
                <User className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={24} />
                <input type="text"
                  placeholder='Seu Nome Completo'
                  className='lg:w-[13vw] backdrop-blur-md text-gray-700 w-full
                               placeholder:text-gray-700 px-12 py-2 border border-white/20 rounded-4xl font-semibold font-mono  text-[16px] focus:outline-none uppercase
                                                    transition shadow-lg placeholder:font-mono'/>
              </span>


               <span className='relative'>

                <Lock className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={24} />
                <input type="password"
                  placeholder='Cria Sua Senha'
                  className='lg:w-[13vw] backdrop-blur-md text-gray-700 w-full
                               placeholder:text-gray-700 px-12 py-2 border border-white/20 rounded-4xl font-semibold font-mono  text-[16px] focus:outline-none uppercase
                                                    transition shadow-lg placeholder:font-mono'/>
              </span>

               <span className='relative'>
                <Cake className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-700" size={24} />
                <input type="date"
                  className='lg:w-[13vw] backdrop-blur-md text-gray-700 w-full
                               placeholder:text-gray-700 px-12 py-2 border border-white/20 rounded-4xl font-semibold font-mono  text-[16px] focus:outline-none uppercase
                                                    transition shadow-lg placeholder:font-mono'/>
              </span>


              <span className='relative'>
               
              </span>







            </form>












          </div>







        </div>











      </div>










    </>
  )
}

export default InscricaoNH