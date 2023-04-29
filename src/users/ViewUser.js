import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        rank: 0,
        address: "",
        city: "",
        phoneNo: ""
    });
    
    const {id}=useParams();
    
    useEffect(()=>{
    loadUser()
    },[])
    
    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>User details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of user id:{user.id}
                            <ul className='lsit-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>name:</b>{user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>username:</b>{user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>rank:</b>{user.rank}
                                </li>
                                <li className='list-group-item'>
                                    <b>address:</b>{user.address}
                                </li>
                                <li className='list-group-item'>
                                    <b>city:</b>{user.city}
                                </li>
                                <li className='list-group-item'>
                                    <b>phoneNo:</b>{user.phoneNo}
                                </li>
                            </ul>
                        </div>
                    </div>
                
                <Link className='btn btn-primary my-2' to={"/"}>BACK TO HOME SIR</Link>
                </div>
            </div>

        </div>
    )
}
