import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Privateroute from "./components/Privateroute"

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  

    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Privateroute>
                <Home />
              </Privateroute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterAndLogout />} />
      


     



          </Routes>
          </BrowserRouter>
      

  )
}

export default App
