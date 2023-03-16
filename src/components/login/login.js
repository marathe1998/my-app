import React, { useState } from "react";
import "./login.css";

export default function Login(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [firstNameError, setfirstNameError] = useState(false);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value.trim());
    if (!firstName.length > 0) {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
    }
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const gmailHandler = (event) => {
    setGmail(event.target.value);
  };

  const firstNameBlurHandler = (event) => {
    if (!firstName.length > 0) {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
    }
  };
  const loginFormhandler = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      gmail: gmail,
    };
    console.log(data);
  };

  return (
    <div className="parent">
      <div className="login-container">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            onChange={firstNameHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
            className={
              firstName ? "input-success" : firstNameError ? "input-error" : ""
            }
          />

          {firstNameError ? <p className="error">First Name required</p> : ""}

          <br />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            onChange={lastNameHandler}
          />

          <br />

          <input
            type="gmail"
            name="gmail"
            placeholder="Gmail"
            required
            onChange={gmailHandler}
          />

          <br />

          <button onClick={() => loginFormhandler()}>Submit Now</button>
        </div>
      </div>
    </div>
  );
}
