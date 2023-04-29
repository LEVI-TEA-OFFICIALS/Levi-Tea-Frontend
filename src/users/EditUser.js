import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        rank: 0,
        address: "",
        city: "",
        phoneNo: ""
    });

    const { name, username, rank, address, city, phoneNo } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit =async (e) => {  
        e.preventDefault();
        // console.log(user);
        await axios.put(`http://localhost:8080/user/${id}`,user); 
        navigate("/");
    };

    const loadUser= async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`); 
        setUser(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>
                                name
                            </label>
                            <input type={'text'}
                                className='form-control'
                                placeholder='Enter your name'
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="username" className='form-label'>
                                username
                            </label>
                            <input type={'text'}
                                className='form-control'
                                placeholder='Enter your username'
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="address" className='form-label'>
                                rank
                            </label>
                            <input type={'number'}
                                className='form-control'
                                placeholder='Enter your rank'
                                name="rank"
                                value={rank}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="address" className='form-label'>
                                address
                            </label>
                            <input type={'text'}
                                className='form-control'
                                placeholder='Enter your address'
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="city" className='form-label'>
                                city
                            </label>
                            <input type={'text'}
                                className='form-control'
                                placeholder='Enter your city'
                                name="city"
                                value={city}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="phoneNo" className='form-label'>
                                phoneNo
                            </label>
                            <input type={'text'}
                                className='form-control'
                                placeholder='Enter your phoneNo'
                                name="phoneNo"
                                value={phoneNo}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>

                        <Link type='submit' className='btn btn-outline-danger mx-2' to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
