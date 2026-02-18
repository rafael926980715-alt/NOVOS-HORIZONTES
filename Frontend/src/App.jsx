import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layoutt from './Layout/Layoutt'
import Cursos from './Pages/Cursos'
import PerfilSearch from './Pages/Perfil'
import Notificacions from './Pages/Notificacoes'
import InscricaoNH from './Pages/Inscricao'
import CursosNh from './Pages/Cursosnha'
import EventNH from './Pages/Eventnh'
import BoletimNH from './Pages/Boletimnh'
import NotasNH from './Pages/Notasnh'
import CalenderPrNH from './Pages/CalendarioProvas'

function App() {

   
  

  return (
    <>
      <Router>
      <Routes>
        <Route  element={<Layoutt/>}>
  
        <Route path='/' element={<Cursos/>}/>
        <Route path='/perfilsearch' element={<PerfilSearch/>}/>
        <Route path='/notificacions' element={<Notificacions/>}/>
        <Route path='/Inscricaonh' element={<InscricaoNH/>}/>
        <Route path='/Cursonh' element={<CursosNh/>}/>
        <Route path='/Eventosnh' element={<EventNH/>}/>
        <Route path='/Boletomnh' element={<BoletimNH/>}/>
        <Route path='/Notasnh' element={<NotasNH/>}/>
        <Route path='/CalenProvonh' element={<CalenderPrNH/>}/>







        

        


        

        

        
         
        </Route>
      </Routes>
    </Router>





    </>
  )
}

export default App