import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Privateroute from "./components/Privateroute"
import Layout from './hocs/Layout';

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  

    return (
      <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route
            path="/"
            element={
             
                <Home />
            
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      


     



          </Routes>
          </Layout>
          </BrowserRouter>
      

  )
}

export default App
