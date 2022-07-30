import React from 'react'
import {Route,Routes} from "react-router-dom"
import Layout from '../layout/Layout'
import HomePage from '../pages/Home/Home'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />}/>
      </Route> 
    </Routes>
  )
}

export default Router