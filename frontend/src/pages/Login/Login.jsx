import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let url = "http://localhost:5000/api/user/login";

    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        setToken(response.data.success);
        localStorage.setItem("token", response.data.token);
        console.log("Logged In");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={onLogin}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              onChange={onChangeHandler}
              name="email"
              placeholder="Email Address"
              value={data.email}
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
              {
                hidePass ? <FaRegEye
                className="password-icon"
                onClick={() => setHidePass(!hidePass)}
              /> : 
              <FaEyeSlash
                className="password-icon"
                onClick={() => setHidePass(!hidePass)}
              />
              }
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Do not have an account?{" "}
          <span onClick={() => navigation("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
