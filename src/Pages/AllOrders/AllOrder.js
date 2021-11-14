import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
  
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
  

  console.log(status);
  useEffect(() => {
    fetch("https://fast-bastion-56494.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
//   console.log(orders)
// const status = "apporved";
const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`https://fast-bastion-56494.herokuapp.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };


    return (
        <div className="text-white bg-danger m-5">
            <h2>This AllOrder</h2>
            <Table striped bordered hover className="bg-dark ">
        <thead className="text-white">
          <tr >
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
           
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody className="text-white">
            <tr >
              <td className="text-white">{index}</td>
              <td className="text-white">{pd?.name}</td>
              <td className="text-white">{pd?.description}</td>
              <td className="text-white">{pd?.image}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                    className="m-1 bg-warning text-black"
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <br />
                    <option  value="done">Done</option>
                  </select>
                  <input className="m-1 bg-info" type="submit" />
                </form>
              </td>
              
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default AllOrder;