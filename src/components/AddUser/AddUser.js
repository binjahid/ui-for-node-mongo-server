import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("your data has succesfully stored ");
        }
        nameRef.current.value = emailRef.current.value = "";
      });
    console.log(name, email);
  };
  return (
    <div>
      <h2>Please Add An User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" ref={nameRef} placeholder="name" id="" />
        <input type="email" name="" ref={emailRef} placeholder="email" id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddUser;
