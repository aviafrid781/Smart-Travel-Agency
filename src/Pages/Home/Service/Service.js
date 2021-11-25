import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, _id, img, discount, cost, discription } = service;
    return (
        <div className="service pb-3">
            <img with="500px" height="350px" src={img} alt="" />
            <h1> Country : {name}</h1>
            <p className="discount">Avilabe Discount : {discount}% </p>
            <p>Total Cost : $ {cost}</p>

            <p className="px-5" >{discription}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>

            </Link>


        </div>
    );
};

export default Service;