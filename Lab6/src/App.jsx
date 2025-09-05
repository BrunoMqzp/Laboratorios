import React, {useState} from 'react'
import Login from './rutas/Login'
import HomePage from './rutas/homepage'
import Dashboard from './rutas/dashboard'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { Route, Routes, Navigate } from 'react-router-dom'
function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
