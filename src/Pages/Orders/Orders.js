import React from 'react';
import {useState,useEffect} from 'react';
import useAuth from "../../hooks/useAuth";
const Orders = () => {
    const [ordres,setOrders]=useState([]);
    const { user } = useAuth();
    useEffect(()=>{
fetch(`https://fast-bastion-56494.herokuapp.com/orders?email=${user.email}`)
.then(res=>res.json())
.then(data=>setOrders(data))


    },[])

    return (
        <div>
           <h1>This Orders {ordres.length}</h1>
            {
                ordres.map(order=><div
                key={order._id}
                >
{order.name}
<br />
{order.email}
<br /> 
{order.date}
<br /><br />



                </div>)
            }
        </div>
    );
};

export default Orders;