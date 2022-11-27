import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const ManageOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch("https://form-server-hryl.vercel.app/orders")
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])


    const handelDelete = (id) => {
        const url = `https://form-server-hryl.vercel.app/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted Succesfull')
                    const remainigServices = manageOrders.filter(mg => mg._id !== id)
                    setManageOrders(remainigServices)
                }
            })
    }
    return (
        <div className="manageOrder-container" >
            <h3>Manage All Orders</h3>
            {
                manageOrders.map(mg => <Table striped bordered hover className="table-light" >
                    <thead>
                        <tr collapseOnSelect expand="lg">
                            {/* <th>#</th> */}
                            <th>Email</th>
                            <th>Order Name</th>
                            <th>Total Cost</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{mt._id}</td> */}
                            <td>{mg.email}</td>
                            <td>{mg.name}</td>
                            <td>{mg.cost}</td>
                            <td>{mg.number}</td>
                            <td>{mg.address}</td>
                            <td><button onClick={() => handelDelete(mg._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                        </tr>

                    </tbody>
                </Table>)
            }
        </div>
    );
};

export default ManageOrder;