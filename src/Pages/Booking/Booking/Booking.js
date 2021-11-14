import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://fast-bastion-56494.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const history = useHistory();
  const handleOrder = (id) => {
    history.push(`/order/${id}`);

  };
  return (
    <div>
      <h2>this is booking: {serviceId}</h2>
      <br /> <br />
      <br />
      <img className="w-25" src={service?.img} alt="" />
      <h1>Details of : {service?.name}</h1>
      <p>{service?.discription}</p>
      <h5>Price:{service?.Price}</h5>
        <button
          className="btn-danger p-2 mt-2"
          onClick={() => handleOrder(service?._id)}
        >
          My order
        </button>
    </div>
  );
};

export default Booking;
