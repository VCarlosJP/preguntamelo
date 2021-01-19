import React from 'react';
import logo from "../logo.svg";



export default class LoginForm extends React.Component{
    
    constructor(props){
        super(props);
        this.singIn = this.singIn.bind(this);
        this.register = this.register.bind(this);
    }

    singIn(){
        console.log("logeandose");
    }
    register(){
        console.log(this.props);
        //this.props.history.push("/signup");
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
                    <hr style={{width:"100%"}}/>
                    <div className="login-form-section">
                    <span style={{fontWeight:"bold"}}>
                        Email
                    </span>
                    <input placeholder="Email or Phone number"></input>
                    <span style={{fontWeight:"bold"}}>
                        Password
                    </span>
                    <input placeholder="Password"></input>

                    <a style={{marginLeft:'10px', color:'rgb(191, 96, 29)', fontWeight:'bold'}}>Reset password</a>
                    <button className="sign-in-button" onClick={this.singIn}>Sing in</button>
                </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <p>Dont have an account yet?</p>
                    <a style={{marginLeft:'10px', color:'rgb(191, 96, 29)', fontWeight:'bold'}} onClick={this.register}>Join our community</a>
                </div>
            </div>
        )
    }
}