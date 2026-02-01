import React, { useState } from 'react'
import { Megaphone , Grid2x2Check , GraduationCap, Bell, User, X, Lock, Mail, UserSearch, PartyPopper } from 'lucide-react'
import '../index.css'
import '../App.css'
import loopone from '../assets/LogoNH.png'
import { Link } from 'react-router-dom'


function Navbar() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)





  return (


    <>





      <header className="fixed top-0 left-0 right-0 py-1 px-4 sm:px-5  lg:px-8 flex justify-center items-center z-400">
        <div className="max-w-7xl  min-w-auto flex  items-center justify-center gap-30 lg:gap-130 relative">

          {/* LOGO - Always visible */}
          <Link to='/' className="w-[9vw] flex items-center justify-center lg:py-3 lg:px-3 rounded-full z-0 lg:justify-start cursor-pointer duration-700 ease-in-out active:scale-70">
            <div className="opacity-0  sm:opacity-100 lg:opacity-100  sm:w-40 sm:h-12 rounded-full">
            
                <img className='rounded-full h-full w-full object-cover shadow-lg' src={loopone} width={900} />
            
            </div>
   
          </Link>

          {/* NAVIGATION - Responsive */}
          <nav className="flex justify-between gap-2  sm:gap-3 lg:pr-0 lg:p-1 pr-37 w-full flex-nowrap rounded-full ">

          

            

             


            <Link to='/perfilsearch' className=" flex gap-2 items-center bg-black/10  backdrop-blur-md text-gray-700 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70">
              <User size={25} className="sm:w-5 sm:h-5" />
              <span className="font-sans font-semibold ">PERFIL</span>
            </Link>



            


            




            


       

            {/* NOTIFICAÇÕES Button */}
            <Link 
              to='/notificacions'
              className="flex gap-2 items-center bg-black/10  backdrop-blur-md text-gray-700 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg relative cursor-pointer duration-700 ease-in-out active:scale-70">
              <Bell size={25} className="sm:w-5 sm:h-5" />
              <span className="font-sans font-semibold ">NOTIFICAÇÕES</span>
    
           
            </Link>

           
          </nav>
        </div>
      </header>

 






    </>










  )
}
export default Navbar