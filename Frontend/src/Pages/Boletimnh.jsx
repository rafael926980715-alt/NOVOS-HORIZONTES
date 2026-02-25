import '../index.css'
import '../App.css'
import { Link } from 'react-router-dom' 
import { Download } from 'lucide-react'



function BoletimNH() {

    return (
        <div className="w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 lg:px-9 py-30 px-3 lg:grid lg:grid-cols-3  flex flex-col gap-4">

            <div className='h-full w-full flex border border-white/20 shadow-lg text-gray-700 flex-col rounded-4xl py-3 px-2 gap-3'>
               <h1 className='text-center text-4xl font-bold audiowide-regular text-gray-700 uppercase'>boletim: 1 simestre</h1>
               <div className='w-full h-full border border-white/20 shadow-lg text-gray-700 rounded-4xl lg:grid lg:grid-cols-2  flex flex-col px-9 py-9 gap-9'>

                <Link to='/Notasnh'  className='w-full h-[30vh] border border-white/20 shadow-lg text-gray-700 rounded-4xl flex flex-col justify-center gap-5 transition-transform lg:hover:scale-95 duration-700 ease-in-out cursor-pointer active:scale-70'>
                <h1 className='text-center text-4xl font-bold audiowide-regular text-gray-700 uppercase'> mac </h1>
                <h2 className='text-center text-2xl font-semibold audiowide-regular text-gray-700 uppercase'>notas</h2>
                </Link>

               </div>

               <section className='relative flex gap-2'> <h1 className='text-center lg:text-5xl text-3xl font-bold audiowide-regular text-gray-700 uppercase w-full h-full border border-white/20 shadow-lg rounded-full px-3 py-2'>reprovado </h1> <span className=' border border-white/20 rounded-3xl flex items-center cursor-pointer shadow-lg duration-700 ease-in-out active:scale-70 px-3'><Download size={40} /></span></section>

            </div>

        </div>
    )
}

export default BoletimNH