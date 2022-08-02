import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
        </Routes>
    </div>
  )
}
