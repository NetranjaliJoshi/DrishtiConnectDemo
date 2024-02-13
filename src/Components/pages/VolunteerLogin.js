import React from "react";
import "../css/VolunteerLogin.css";

const VolunteerLogin = () => {
  return (
    <div className="main-login">
      <form className="myform">
        <div class="form-group">
          <label for="exampleInputEmail1" className="label-control">
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            required
          />
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
            id="exampleInputPassword1"
            placeholder="Enter Password"
            required
          />
        </div>
        <h1></h1>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerLogin;
