
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Estudiantes } from './components/student/Estudiantes'
import { AgregarEstudiante } from './components/student/AgregarEstudiantes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Estudiantes />} />
        <Route path="/agregar" element={<AgregarEstudiante />}/>
      </Routes>
    </>
  )
}

export default App
