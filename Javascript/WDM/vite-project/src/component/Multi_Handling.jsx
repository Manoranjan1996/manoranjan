import React, { useState } from "react";

const Multi_Handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    number: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const subHandler = (e) => {
    e.preventDefault();
    alert("your form Submited !  Thank you Visit again");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      number: "",
    });
  };

  return (
    <>
      <form onSubmit={subHandler}>
        <div>
          Name:-{" "}
          <input
            value={formData.name}
            name="name"
            onChange={onChangeHandler}
            type="text"
          />
        </div>
        <div>
          Email:-{" "}
          <input
            value={formData.email}
            name="email"
            onChange={onChangeHandler}
            type="email"
          />
        </div>
        <div>
          Password:-{" "}
          <input
            value={formData.password}
            name="password"
            onChange={onChangeHandler}
            type="password"
          />
        </div>
        <div>
          Age:-{" "}
          <input
            value={formData.age}
            name="age"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          Phone:-{" "}
          <input
            value={formData.number}
            name="number"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Multi_Handling;
