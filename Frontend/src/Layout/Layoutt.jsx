import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'


function Layoutt() {
    return (

        <>

            <Navbar />


            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layoutt