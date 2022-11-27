import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://form-server-hryl.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        <div >
            <h2 className="text-primary mt-10">Our Discount Packages</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;