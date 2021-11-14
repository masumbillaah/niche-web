import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fast-bastion-56494.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const showData=services.slice(0,6)
    console.log(showData)
    return (
        <div id="services">
            <h2 className="text-primary mt-5 mb-5">Our Product</h2>
            <div className="service-container">
                {
                    showData.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;