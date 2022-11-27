import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        //use axios for post API
        axios.post('https://form-server-hryl.vercel.app/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })
    }


    return (
        <div className="add-service">
            <h2> Add  a New  Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Country Name" />
                <textarea  {...register("discription")} placeholder="Discription" />
                <input type="number" {...register("cost")} placeholder="Total cost" />
                <input type="number" {...register("days")} placeholder="Package days" />
                <input type="number" {...register("discount")} placeholder="Discount" />
                <input {...register("img")} placeholder="img url" />
                <input className="btn btn-warning" type="submit" />
            </form>
            {/* <br />
            <br />
            <br />
             */}

        </div>
    );
};

export default AddService;