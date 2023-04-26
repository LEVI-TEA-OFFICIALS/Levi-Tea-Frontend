import React, { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="p-4">
        <table className="table border shadow table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User name</th>
              <th scope="col">Shop Name</th>
              <th scope="col">Email id.</th>
              <th scope="col">Rank</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.rank}</td>
                <td>{user.phoneNo}</td>
                <td>{user.address}</td>
                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <button className="btn btn-outline-primary mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
