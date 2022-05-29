import React, { useEffect } from 'react'
import Canvas from '../Component/Canvas/Canvas'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "./layout.style.scss"
import "../Style/style.scss"
import Modal from '../Component/Modal/Modal'
import { observer } from 'mobx-react-lite'
import userState from '../Store/UserState/user.state'
import { useParams } from 'react-router'
import { WSConnector } from '../API/API'

const Layout = observer(() => {
  const params = useParams()

  useEffect(() => {
    userState.name && WSConnector(params.id as string)
  }, [userState.name])
  
  return (
    <>
    {userState.name 
      ? 
        <div className='layout'>
          <Header/>
          <Canvas/>
          <Footer/>
        </div>
      : 
        <Modal/>
    }
    </>
  )
})

export default Layout