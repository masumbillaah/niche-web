import React from 'react';
import { useForm } from "react-hook-form";
// import useFirebase from "./../../Hook/UseFirebase";
import useAuth from './../../../hooks/useAuth';
import { Link } from "react-router-dom";
const Register = () => {
    const {  handelRegister,signInUsingGoogle } = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
       handelRegister(data?.email,data?.password)
        console.log(data);
      };

    return (
        <div>
       <h2>Please Register</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
           <input
          className="input-field mt-5 w-25"
          name="name"
          placeholder="Your Name"
          type="text"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field mt-2 w-25"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
       
        <br />
        <input
          className="input-field mt-2 w-25"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        

        <input
          className="submit-btn btn btn-danger mt-3 "
          type="submit"
          value="Register"
        />
      </form> 
      <br />
      <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
<br /><br />
<p>Are You Login? <Link to="/loginmain">Please Login</Link></p>





        </div>
    );
};

export default Register;