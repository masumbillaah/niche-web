import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
      const { register, reset,handleSubmit } = useForm();
  const onSubmit = data =>{ 
      console.log(data)
 axios.post('https://fast-bastion-56494.herokuapp.com/services',data)
    .then(res=>{
        if(res.data.insertedId){
alert('Added SucsessFully')
reset();
        }
    })  
};
    return (
        <div className="add-service">
            <h2>Please add a  Service</h2>
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name" ) }placeholder="Brand" />
      <textarea {...register("discription" )} placeholder="Add a Discription" />
      <input type="number" {...register("Price")} placeholder="Price" />
        <input {...register("img" )} placeholder="Image Url" />
      <input type="submit" className="btn-danger" />
    </form>

        </div>
    );
};

export default AddService;