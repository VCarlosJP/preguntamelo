import React from "react";
import LoginForm from "./LoginForm";
import './styles/login.scss'


export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left-container">
          <div style={{ margin: "100px 25px" }}>
            <h1>Ask to an Expert</h1>
            <h1>we got you</h1>
          </div>
        </div>
        <div className="login login-form">
          <LoginForm/>
        </div>
      </div>
    );
  }
}
