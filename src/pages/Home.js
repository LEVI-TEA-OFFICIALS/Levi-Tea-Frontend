import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = axios.get("http://localhost:8080/users");
        setUsers((await result).data);

    };

    const deleteUser = async (id) => {
        console.log("delete ho rha h")
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">username</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">phoneNo</th>
                            <th scope="col">rank</th>
                            <th scope="col">address</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNo}</td>
                                    <td>{user.rank}</td>
                                    <td>{user.address}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewuser/${user.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }


                    </tbody>
                </table>

            </div>
        </div>
    )
}
