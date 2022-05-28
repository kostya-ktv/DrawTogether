import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { App } from '../App'

const Router = () => {
   const navigate = useNavigate()
   useEffect(() => navigate(`/f${(+new Date()).toString(16)}`),[navigate])

  return (
    <Routes>
       <Route path='/:id' element={<App/>}/>
    </Routes>
  )
}

export default Router