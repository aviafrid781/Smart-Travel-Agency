import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Booking.css'

import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://form-server-hryl.vercel.app/services/${serviceId}`)

            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://form-server-hryl.vercel.app/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully Complate');
                    reset();
                }
            })
    }

    return (
        <div  className='booking'>
            <div className="booking-container">
                <div>
                    <h2> Visit {service.name}</h2>
                    <img src={service.img} alt="" />
                    <p>Package Days: {service.days}</p>
                    <p>Total Cost : $ {service.cost}</p>
                    <p className="px-5" >{service.discription}</p>
                </div>

                <div className="add-service">
                    <h2 style={{ marginLeft:"150px"}}> Registation for Booking </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email",)} defaultValue={user.email} />
                        <input {...register("name", { required: true, maxLength: 20 })} defaultValue={service.name} />
                        <input type="number" {...register("cost")} defaultValue={service.cost} />
                        <input type="number" {...register("number")} placeholder="Your Mobile number" />
                        <textarea  {...register("address")} placeholder="Your Address" />
                        <input className="btn btn-warning" type="submit" />
                    </form>
                </div>

                <br />

            </div>
        </div>
    );
};

export default Booking;