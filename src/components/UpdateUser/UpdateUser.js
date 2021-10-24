import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleUpdatedUser = () => {};
  return (
    <div>
      <h2>Update Your Existing User</h2>
      <h3>{user.name}</h3>
      <p>
        <small>User Id : {id}</small>
      </p>
      <form onSubmit={handleUpdatedUser}></form>
    </div>
  );
};

export default UpdateUser;
