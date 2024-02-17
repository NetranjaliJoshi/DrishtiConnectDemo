import React from "react";
import "../css/VolunteerLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const VolunteerLogin = () => {
  const [id, setId] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    const passRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    const emailRegex = /\S+@\S+\.\S+/;

    if (!Email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(Email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!Password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passRegex.test(Password)) {
      errors.password =
        " Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  async function save(event) {
    event.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("http://localhost:8080/register/save", {
          Email: Email,
          Password: Password,
        });
        alert("Volunteer registation has been done successfully");
        setId("");

        setEmail("");
        setPassword("");
      } catch (err) {
        alert("Volunteer Registation Failed");
      }
      navigate("/volunteerProfile");
    }
  }

  return (
    <div className="main-login">
      <form className="myform">
        <h1>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1" className="label-control">
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            required
            id="Email"
            value={Email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && (
            <div className="error" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}

          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="label-control">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            id="Password"
            value={Password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="error" style={{ color: "red" }}>
              {errors.password}
            </div>
          )}
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-primary " onClick={save}>
            Login
          </button>
        </div>

        <p>
          <a href="/volunteerRegister">Don't have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default VolunteerLogin;
