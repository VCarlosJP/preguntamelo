import React from "react";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login login-info">
          <img style={{width:"100%", height:"100%"}}src="https://www.andalucialab.org/wp-content/uploads/2020/02/INSERTAR_LOGO2.jpg"></img>
        </div>
        <div className="login login-form">
          <LoginForm/>
        </div>
      </div>
    );
  }
}
