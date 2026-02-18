import '../index.css'
import '../App.css'



function NotasNH() {


    return (

        <div className="w-full min-h-screen overflow-y-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 lg:px-9 py-30 px-3 flex justify-center">
            
            <nav className='h-full w-full lg:w-[50vw] flex border border-white/20 shadow-lg text-gray-700 flex-col rounded-4xl py-3 px-2 gap-3'>

            <section className='relative flex justify-around'> <h1 className='text-6xl font-bold audiowide-regular text-gray-700 uppercase lg:w-[24vw] overflow-hidden whitespace-nowrap'>matematica</h1> <p className='w-50 h-full text-3xl font-bold audiowide-regular uppercase border border-white/20 shadow-lg text-gray-700 px-4 py-3 rounded-full text-center'>20.0</p></section>

            </nav>

        </div>
    )
}

export default NotasNH