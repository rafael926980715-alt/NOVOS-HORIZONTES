import React, { useState } from 'react'
import { Bell, User, PartyPopper , CalendarDays } from 'lucide-react'

import '../index.css'
import '../App.css'
import loopone from '../assets/Cha.png'

import { Link } from 'react-router-dom'


function Navbar() {

  const [isEventOpen, setIsEventOpen] = useState(false)





  return (


    <>





      <header className="fixed  top-0 left-0 right-0 sm:px-5  lg:px-20 flex justify-between items-center z-400 lg:py-2 lg:w-[80vw] gap-9">


        {/* LOGO - Always visible */}
        <Link to='/' className="lg:w-[10vw] lg:shadow-lg rounded-full lg:hover:scale-95 cursor-pointer flex justify-center items-center  duration-700 ease-in-out active:scale-70 lg:border lg:border-white/20 lg:backdrop-blur-md rounded-full">
          <div className="sm:w-40 sm:h-12 w-[20vw] rounded-full">

            <img className=' h-full w-full object-cover' src={loopone} width={900} title='HOME' />

          </div>

        </Link>

        <nav className="flex lg:w-[32vw] w-69  rounded-full shadow-lg justify-between items-center  border border-white/20 backdrop-blur-md lg:py-0">








          <Link to='/perfilsearch' className=" flex gap-2 items-center lg:hover:scale-95   border border-white/20 text-gray-700 px-4 sm:px-5 lg:px-6 py-4 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70" title='PERFIL'>
            <User size={25} className="sm:w-5 sm:h-5" />
            <span className="font-sans font-semibold hidden sm:inline">PERFIL</span>
          </Link>

          <Link
          to='/Eventosnh' 
            className=" flex gap-2 items-center lg:hover:scale-95   border border-white/20 text-gray-700 px-4 sm:px-5 lg:px-6 py-4 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70" title='PERFIL'>
            <PartyPopper size={25} className="sm:w-5 sm:h-5" />
            <span className="font-sans font-semibold hidden sm:inline uppercase">evento</span>
          </Link>

          <Link
          to='/CalenProvonh' 
            className=" flex gap-2 items-center lg:hover:scale-95   border border-white/20 text-gray-700 px-4 sm:px-5 lg:px-6 py-4 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70" title='PERFIL'>
            <CalendarDays size={25} className="sm:w-5 sm:h-5" />
            <span className="font-sans font-semibold hidden sm:inline uppercase">calendario</span>
          </Link>




          <Link
            title='NOTIFICACOES'
            to='/notificacions'
            className="flex gap-2 items-center  border border-white/20 lg:hover:scale-95 text-gray-700 px-4 sm:px-5 lg:px-6 py-4 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg relative cursor-pointer duration-700 ease-in-out active:scale-70">
            <Bell size={25} className="sm:w-5 sm:h-5" />
            <span className="font-sans font-semibold hidden sm:inline">NOTIFICAÇÕES</span>


          </Link>




        </nav>

      </header>


     








 






    </>










  )
}
export default Navbar