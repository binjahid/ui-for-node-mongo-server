import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDeleteUser = (id) => {
    const url = `http://localhost:4000/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User Successfully Deleted");
          const updatedUser = users.filter((user) => user._id !== id);
          setUsers(updatedUser);
        }
      });
  };
  return (
    <div>
      <h2>Users Added {users.length}</h2>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} :: {user.email}
          <Link to={`/users/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button
            onClick={() => {
              handleDeleteUser(user._id);
            }}
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};

export default Users;
