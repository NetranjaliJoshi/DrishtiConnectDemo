import React from "react";
import "../css/VolunteerRegister.css";
const VolunteerRegister = () => {
  return (
    <div className="main-register">
      <form className="myform">
        <div class="form-group col-md-12">
          <label for="Name" className="label-control">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputEmail4" className="label-control">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputPassword4" className="label-control">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputAddress" className="label-control">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main Station.."
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputCity" className="label-control">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            placeholder="City"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputState" className="label-control">
            State
          </label>
          <input
            type="text"
            class="form-control"
            id="inputState"
            placeholder="State"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="inputZip" className="label-control">
            Zip
          </label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            placeholder="Zip"
            required
          />
        </div>
        <h1></h1>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerRegister;
