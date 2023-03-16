import React, { useState } from "react";
import "./registration.css";

export default function Registration(props) {
  const [fullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [fullNameError, setfullNameError] = useState(false);
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [gmailError, setGmailError]=useState(false);

  const fullNameHandler = (event) => {
    setFullName(event.target.value.trim());
    if (!fullName.length > 0) {
      setfullNameError(true);
    } else {
      setfullNameError(false);
    }
  };

  const PhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value.trim());
    if(!fullName.length > 0){
      setfullNameError(true);
    } else{
      setfullNameError(false);
    }
  };

  const gmailHandler = (event) => {
    setGmail(event.target.value);
  };

  const OTPHandler = (event) =>{
    setOTP(event.target.value);
  };

  const fullNameBlurHandler = (event) => {
    if (!fullName.length > 0) {
      setfullNameError(true);
    } else {
      setfullNameError(false);
    }
  };
  const loginFormhandler = () => {
    const data = {
      firstName: fullName,
      lastName: PhoneNumber,
      gmail: gmail,
      OTP:OTP,
    };
    console.log(data);
  };

  return (
    <div className="parent">
      <div className="login-container">
        <h1>Registration Form</h1>
        <div>
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            required
            onChange={fullNameHandler}
            value={fullName}
            onBlur={fullNameBlurHandler}
            className={
              fullName ? "input-success" : fullNameError ? "input-error" : ""
            }
          />

          {fullNameError ? <p className="error">First Name required</p> : ""}

          <br />

          <input
            type="Number"
            name="Phone Number"
            placeholder="Phone Number"
            required
            onChange={PhoneNumberHandler}
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
          <input
            type="Number"
            name="OTP"
            placeholder="OTP"
            required
            onChange={gmailHandler}
          />

          <br />
          <p>please fill the form and comfirm the registration</p>
          <br/>

          <button onClick={() => loginFormhandler()}>Submit Now</button>
        </div>
      </div>
    </div>
  );
}
