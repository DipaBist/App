
// rfce
import React from "react"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import { Route,Routes } from 'react-router-dom'
import Home from "./pages/home"
import Createnote from "./pages/createnote"

 function App(){
  return(
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar/>

    <main className="flex-1 container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/create" element={<Createnote/>} />
      </Routes>
    </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
  
 }
  export default App