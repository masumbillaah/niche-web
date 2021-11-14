import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
const LoginMain = () => {
    const {handelLogin,signInUsingGoogle}=useAuth();
   
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        handelLogin(data?.email,data?.password)
        console.log(data);
      };
    return (
        <div>
           <h2>Please Login</h2> 
          
       
           <form onSubmit={handleSubmit(onSubmit)}>
           
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
          value="Log in"
        />
      </form>       
<br />
      <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>

<br /><br />
<p>New User? <Link to="/register">Please Register</Link></p>



        </div>
    );
};

export default LoginMain;