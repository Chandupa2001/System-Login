import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [token, setToken] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    let url = "http://localhost:5000/api/user/signup";

    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        alert("Registered Successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={onSignUp}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              onChange={onChangeHandler}
              name="name"
              value={data.name}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <br />
            <div className="input-icon-wrapper">
              <input
                type={hidePass ? "password" : "text"}
                id="password"
                onChange={onChangeHandler}
                name="password"
                placeholder="Password"
                value={data.password}
                required
              />
              {hidePass ? (
                <FaRegEye
                  className="password-icon"
                  onClick={() => setHidePass(!hidePass)}
                />
              ) : (
                <FaEyeSlash
                  className="password-icon"
                  onClick={() => setHidePass(!hidePass)}
                />
              )}
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="phoneNo">Phone Number</label>
            <br />
            <input
              type="tel"
              onChange={onChangeHandler}
              name="phoneNumber"
              value={data.phoneNumber}
              placeholder="Phone Number"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigation("/")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
