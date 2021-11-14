import React from 'react';
import { useForm } from "react-hook-form";
// import useFirebase from "./../../Hook/UseFirebase";

// import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
const Reviwe = () => {
    // const {  handelRegister,signInUsingGoogle } = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();
    const {user}=useAuth()
    const onSubmit = (data) => {
    //    handelRegister(data?.email,data?.password)
    fetch("https://fast-bastion-56494.herokuapp.com/addSReview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
  
      console.log(data);
    };
    
       
    
    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
         
        <input
          className="input-field mt-5 w-50"
          name="email"
          value={user.email}
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
       
        <br />
        <input
          className="input-field mt-2 w-50"
          name="Comments"
        
          placeholder="Comments"
          {...register("Comments", { required: true })}
        />
        <br />
        

        <input
          className="submit-btn btn btn-danger mt-3 "
          type="submit"
          value="Review"
        />
      </form> 
        </div>
    );
};

export default Reviwe;