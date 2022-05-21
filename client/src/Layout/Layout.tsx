import React from 'react'
import Canvas from '../Component/Canvas/Canvas'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "./layout.style.scss"
import "../Style/style.scss"

const Layout = () => {
  return (
    <div className='layout'>
      <Header/>
      
      <Canvas/>

       <Footer/>
    </div>
  )
}

export default Layout