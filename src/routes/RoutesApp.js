import React from 'react'
import { render } from "react-dom";
import {Routes, Route} from "react-router-dom";
import CreateUser from '../pages/addUser/CreateUser';
import Home from '../pages/home/Home';
// import your route components too


const RoutesApp = () => {
  return (
    <Routes>

        <Route index element={<Home />} />
        <Route path="createuser" element={<CreateUser/>}/>
        
    </Routes>
  )
}

export default RoutesApp



