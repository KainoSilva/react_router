import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <div className='UsersPage'>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <Link to={`/users/${user.id}/albums`}>Album</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
