import React, { useState } from 'react'
import axios from 'axios';
import "./SignUp.css";

export default function SignUp() {

    const URL="http://localhost:8000";

    //userDataState
    const [userDataState, setUserDataState] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    })

    //onChangeHandler
    const onChangeHandler=(e)=>{
        setUserDataState({...userDataState,[e.target.name]:e.target.value})
    }

      //errorsState
  const [errorsState, setErrorsState] = useState({})

  //formValidation
  const formValidation = () => {
    const { name, email, password, cpassword } = userDataState
    let isValid = true
    const newErrors = {}
    if (!name.trim()) {
      newErrors.name = "Name is Required !"
      isValid = false
    }
    if (!email.trim()) {
      newErrors.email = "Email is Required !"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is Required !"
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
      isValid = false;
    }
    if (!cpassword.trim()) {
      newErrors.cpassword = " Conform Password is Required !"
      isValid = false
    } else if (password !== cpassword) {
      newErrors.cpassword = "Password is Not Match"
      isValid = false
    }
    setErrorsState(newErrors)
    return isValid
  }


    //onSubmitHandler
    const onSubmitHandler =async(e)=>{
        e.preventDefault();
        const {name,email} =userDataState
        if (formValidation()) {
            userDataState.name=name.trim().toLowerCase()
            userDataState.email=email.trim()

           await axios.post(`${URL}/signUpUser`,userDataState)
             .then((res)=>{
                console .log("RES => ",res)
             }).catch((err)=>{
                console.log(err)
             })
        }
    }

    return (
        <>

            <div className="container-fluid">
                <div className="sign-up-main-div">
                    <div className="row justify-content-lg-between justify-content-center">
                        <div className=" left-side col-8 col-lg-5 ms-lg-5 mt-5">
                            <h1>No account? Sign up</h1>
                            <p>Have an account already? <a href="#">Sign in here!</a> </p>

                            <div className="row g-3">
                                <div className="col">
                                    <input type="text" name='name' className="form-control p-sm-3 rounded-4 mt-4" placeholder="First name" aria-label="First name"                onChange={onChangeHandler}                  />
                                    {errorsState.name && <span className="text-danger">{errorsState.name}</span>}
                                </div>
                                <div className="col">
                                    <input type="email" name='email' className="form-control p-sm-3 p-sm-3 rounded-4 mt-4" placeholder="Email adress" aria-label="Email adress"            onChange={onChangeHandler}         />
                                    {errorsState.email && <span className="text-danger">{errorsState.email}</span>}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col">
                                    <input type="password" name='password' className="form-control p-sm-3 rounded-4 mt-4 " placeholder="Password" aria-label="Password"                    onChange={onChangeHandler}          />
                                    {errorsState.password && <span className="text-danger">{errorsState.password}</span>}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col">
                                    <input type="password" name='cpassword' className="form-control p-sm-3 rounded-4 mt-4" placeholder="Confirm Password" aria-label="Confirm Password"    onChange={onChangeHandler}           />
                                    {errorsState.cpassword && <span className="text-danger">{errorsState.cpassword}</span>}
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success mt-4 " type="button" onClick={onSubmitHandler}>Submit</button>
                            </div>

                            <h2 className="mt-5 text-center" >Or sign in with your social account</h2>

                            <div className="row d-flex justify-content-between ">
                            <button type="button" className="btn btn-danger btn-lg mt-4  "> <i class="fa-brands fa-google me-2"></i> Google </button>
                            <button type="button" className="btn btn-info btn-lg mt-4   "> <i class="fa-brands fa-facebook-f me-2"></i> Facebook </button>
                            </div>
                            <p className=' mt-5'> &copy;All rights reserved. Made byCreatex Studio</p>
                        </div>
                        <div className=" right-side col-lg-5 ">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
