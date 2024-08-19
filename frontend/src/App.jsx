import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Listing from "./pages/Listing"
import Profile from "./pages/Profile"

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
          <Route path="/"element={<Home /> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path='/listings'element={<Listing/>} />
          <Route exact path='/profile'element={<Profile/>} />
          </Routes>
          </Layout>
          </BrowserRouter>
      

  )
}

export default App
