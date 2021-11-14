// import React from 'react';

// const SetExpoler = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default SetExpoler;
import React from "react";

// import { Link,  } from "react-router-dom";

const SetExpoler = ({ setexpoler }) => {
  // const {service} = props;
  const {  name, Price, discription, img } = setexpoler;
//   const history = useHistory();
//   const handelOrder = (id) => {};
  return (
    <div className="service pb-3">
      <img className="w-75 h-50" src={img} alt="" />

      <h3 className="mt-4">{name}</h3>
      <h5 > $ {Price}</h5>
      <p className="px-5">{discription.slice(0,80)}</p>
      {/* <Link to={`/booking/${_id}`}>
        <button className="btn btn-danger mb-5">
          Order Now
          </button>
      </Link> */}
    </div>
  );
};

export default SetExpoler;
