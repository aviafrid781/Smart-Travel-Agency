import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://dark-barrow-71379.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const matchOrders = orders.filter(order => order.email === user.email)
    const handelDelete = (id) => {
        const url = `https://dark-barrow-71379.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted Successfully')
                    const remainigServices = matchOrders.filter(mt => mt._id !== id)
                    setOrders(remainigServices)
                }
            })
    }



    return (
        <div>
            <h3>My Orders</h3>
            {
                matchOrders.map(mt => <Table striped bordered hover className="table table-success table-striped" >
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Email</th>
                            <th>Order Name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{mt._id}</td> */}
                            <td>{mt.email}</td>
                            <td>{mt.name}</td>
                            <td>{mt.cost}</td>
                            <td>{mt.number}</td>
                            <td>{mt.address}</td>
                            <td><button onClick={() => handelDelete(mt._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                        </tr>

                    </tbody>
                </Table>)
            }

        </div>

    );
};

export default MyOrder;