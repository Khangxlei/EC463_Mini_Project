import React from 'react'
import Sidebar from '../components/Sidebar'
import "../style.scss"
import Chat from '../components/Chat'
import Register from './Register'

const Home = () => {
  return(
    <div className='home'>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}




export default Home