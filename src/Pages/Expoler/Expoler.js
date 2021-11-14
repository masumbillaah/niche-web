import React, { useEffect, useState } from 'react';
import "./Expoler.css"
import Service from "../Home/Service/Service"

const  Expoler= () => {
    const [displays,setDisplays]=useState([]);
   
    useEffect(() => {
        fetch('https://fast-bastion-56494.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDisplays(data));
    }, [])

    // const showData=displays.slice(0,6)
    // console.log(showData)

    return (
        <div id="services">
            <h2 className="text-primary mt-5 mb-5">Explore</h2>
            <div className="service-container">
                {
                    displays.map( display=> <Service
                        key={display._id}
                        service={display}
                    ></Service>)
                }
            
            </div>
        </div>
    );
};

export default Expoler;

