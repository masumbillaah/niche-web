import React from "react";
import "./Service.css";
import { Link,  } from "react-router-dom";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, name, Price, discription, img } = service;
//   const history = useHistory();
//   const handelOrder = (id) => {};
  return (
    <div className="service pb-3">
      <img className="w-75 h-50" src={img} alt="" />

      <h3 className="mt-4">{name}</h3>
      <h5 > $ {Price}</h5>
      <p className="px-5">{discription.slice(0,80)}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-danger mb-5">
          Order Now
          </button>
      </Link>
    </div>
  );
};

export default Service;
