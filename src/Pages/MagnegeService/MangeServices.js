import React, { useEffect, useState } from 'react';
// import './Services.css';
const MangeServices = () => {
const [serivces,setServices]=useState([])
useEffect(()=>{
fetch('https://fast-bastion-56494.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setServices(data))
},[])

const handelDelete=id=>{
const url=`https://fast-bastion-56494.herokuapp.com/services/${id}`
fetch(url,{
method:'DELETE'

})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount){
const remainig= serivces.filter(serivce=>serivce._id !== id);
    setServices(remainig);
alert('Sucsessfull deleted')

    }
    
})

}


    return (
        <div>
            {/* <h2>This Mange Service</h2> */}
<div className="service-container mt-5">
     {

serivces.map(serivce=><div key={serivce._id}>
<h1>{serivce.name}</h1>
<br /> <br />
<img className="w-25 "  src={serivce.img} alt="" />

<br /><br />

<p>{serivce.discription}</p>

<button className="btn-danger px-2 py-1" onClick={()=>handelDelete(serivce._id)}>Delete</button>
<br /><br /><br />
</div>)

            }
</div>
           
        </div>
    );
};

export default MangeServices;