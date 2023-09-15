import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from '../pages/auth/login/Login';
import SignUp from '../pages/auth/signUp/SignUp';

export default function Routing() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
