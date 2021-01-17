import React from 'react';
import logo from "../logo.svg";


export default class LoginForm extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="login-form-page">
                <div className="login-form-header">
                    <div>
                        <img className="login-form-logo" src={logo} alt="Logo de preguntamelo"></img>
                    </div>
                    <div>
                        <p>Preguntamelo</p>
                    </div>
                </div>
                <div className="login-form-text">
                    <div className="info-text">Login into your account</div>
                    <div className="info-text">Let's access to your dashboard</div>
                </div>
            </div>
        )
    }
}