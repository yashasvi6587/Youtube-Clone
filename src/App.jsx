import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  // sidebar use for display and remove Categories and Subscribers name
  const[sidebar,setSidebar]=useState(true)

  return (
    <div>
      {/* sidebar use for display and remove Categories and Subscribers name */}
      <Navbar setSidebar={setSidebar}/>
      <Routes>
      {/* sidebar use for display and remove Categories and Subscribers name */}
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
