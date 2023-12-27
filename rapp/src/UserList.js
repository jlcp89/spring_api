import React, { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error));
}, []);


  return (
    <div>
      <h2>Empleados</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}> Nombre: {user.firstName}  {user.lastName}, Email: {user.emailId}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;