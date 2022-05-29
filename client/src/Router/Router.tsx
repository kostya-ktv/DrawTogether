import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { App } from '../App'

const Router = () => {
   const navigate = useNavigate()

   useEffect(() => {
     const id = window.location.href.split('/')[3]
     id ? navigate(`/${id}`) : navigate(`/f${(+new Date()).toString(16)}`)
    },[])

  return (
    <Routes>
       <Route path='/:id' element={<App/>}/>
    </Routes>
  )
}

export default Router