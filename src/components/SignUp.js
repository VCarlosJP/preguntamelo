import React from "react";

import "./styles/SignUp.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  postUser = (valuesToPost) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/createUser`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valuesToPost),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  // JSON.stringify(valuesToPost)

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = this.state;
    const valuesToPost = { firstname, lastname, phoneNumber, email, password };

    if (Object.values(valuesToPost).every((property) => property != "")) {
      if (this.state.agreeTerms) {
        if (this.state.password == this.state.confirmPassword)
          this.postUser(valuesToPost);
        else alert("Passwords need to be the same");
      } else alert("You have to accep our policy ;)");
    } else alert("You need to fill all the camps");
  };

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
          <form className="form-container" onSubmit={this.handleSubmit}>
            <h2>Manage all your questions</h2>
            <p>
              Lets get you all set up so you can verify your personal account
            </p>
            <hr />
            <div className="form-block">
              <div>
                <label>First Name</label>
                <br></br>
                <input
                  type="text"
                  name="firstname"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <br></br>
                <input
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-block">
              <div>
                <label>Phone Number</label>
                <br></br>
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Email</label>
                <br></br>
                <input type="email" name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-block">
              <div>
                <label>Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <br></br>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br></br>
            <input
              type="checkbox"
              name="agreeTerms"
              onChange={this.handleChange}
            ></input>
            <label for="terms-policy">
              <label> I agree to all the</label>&nbsp;
              <a href="/terms-of-use">
                <b>Privacy Terms</b>
              </a>
            </label>
            <br />
            <br />
            <button className="create-account-button" type="submit">
              Create Account
            </button>
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
