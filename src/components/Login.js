import React from "react";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login-info">
          <p>Test info</p>
        </div>
        <div className="login-form">
          <LoginForm/>
        </div>
      </div>
    );
  }
}
