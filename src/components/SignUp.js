import React from "react";

import "./styles/SignUp.scss";

class SignUp extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="left-container">
          <div style={{ margin: "100px 25px" }}>
            <h1>Ask to an Expert</h1>
            <h1>we got you</h1>
          </div>
        </div>
        <div className="right-container">
          <form className="form-container">
            <h2>Manage all your questions</h2>
            <p>
              Lets get you all set up so you can verify your personal account
            </p>
            <hr />
            <div className="form-block">
              <div>
                <label>First Name</label>
                <br></br>
                <input type="text" />
              </div>
              <div>
                <label>Last Name</label>
                <br></br>
                <input type="text" />
              </div>
            </div>
            <div className="form-block">
              <div>
                <label>Phone Number</label>
                <br></br>
                <input type="number" />
              </div>
              <div>
                <label>Email</label>
                <br></br>
                <input type="email" />
              </div>
            </div>
            <div className="form-block">
              <div>
                <label>Password</label>
                <br></br>
                <input type="password" />
              </div>
              <div>
                <label>Confirm Password</label>
                <br></br>
                <input type="password" />
              </div>
            </div>
            <br></br>
            <input type="checkbox" id="terms-policy"></input>
            <label for="terms-policy">
              <label> I agree to all the</label>&nbsp;
              <a href="/terms-of-use">
                <b>Privacy Terms</b>
              </a>
            </label>
            <br />
            <br />
            <button className="create-account-button">Create Account</button>
            <br />
            <br />
            <label>
              <b>Already have an account?</b>
            </label>
            &nbsp;
            <a href="/login">
              <b>Log In</b>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
