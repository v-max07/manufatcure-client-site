import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [adminn, setAdminn] = useState({});
  const ami = []
  const [total, setTotal] = useState([]);
  const [totaluser, setTotaluser] = useState([]);



  const makeadmin = id => {
    const single = users.find(u => u._id === id)
    const admin = {
      email: single?.email,
      name: single?.name,
      role: "admin",
    }
    fetch(`http://localhost:5000/User/admin/${single?.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  const remove = id => {
    const single = users.find(u => u._id === id)
    const admin = {
      email: single?.email,
      name: single?.name,

    }
    fetch(`http://localhost:5000/User/admin/${single?.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <h1>{users.length}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>

            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(u => <tr>

              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role !== 'admin' ? <button onClick={() => makeadmin(u._id)}>make admin</button> : <button onClick={() => remove(u._id)}>Remove</button>}</td>
            </tr>)
          }


        </tbody>
      </Table>
    </div>
  );
};

export default Users;