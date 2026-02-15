import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layoutt from './Layout/Layoutt'
import Home from './Pages/Home'
import Cursos from './Pages/Cursos'
import PerfilSearch from './Pages/Perfil'
import Notificacions from './Pages/Notificacoes'
import InscricaoNH from './Pages/Inscricao'
import CursosNh from './Pages/Cursosnha'






function App() {

   
  

  return (
    <>
      <Router>
      <Routes>
        <Route  element={<Layoutt/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/perfilsearch' element={<PerfilSearch/>}/>
        <Route path='/notificacions' element={<Notificacions/>}/>
        <Route path='/Inscricaonh' element={<InscricaoNH/>}/>
        <Route path='/Cursonh' element={<CursosNh/>}/>


        

        


        

        

        
         
        </Route>
      </Routes>
    </Router>





    </>
  )
}

export default App