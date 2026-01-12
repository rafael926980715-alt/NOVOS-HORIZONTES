import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layoutt from './Layout/Layoutt'
import Home from './Pages/Home'
import Cursos from './Pages/Cursos'
import PerfilSearch from './Pages/Perfil'
import Eventos from './Pages/Eventos'








function App() {

   
  

  return (
    <>
      <Router>
      <Routes>
        <Route  element={<Layoutt/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/perfilsearch' element={<PerfilSearch/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        

        

        
         
        </Route>
      </Routes>
    </Router>





    </>
  )
}

export default App