import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

// sidebar use for display and remove Categories and Subscribers name
const Home = ({sidebar}) => {

  const[category,setCategory]=useState(0)

  return (
    <div>
    {/* sidebar use for display and remove Categories and Subscribers name */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category ={category} />
      </div>
    </div>
  )
}

export default Home
