import React from 'react';
import logo from "../logo.svg";
import './styles/login.scss'


export default class LoginForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {email:"",pass:""};

        this.singIn = this.singIn.bind(this);
        this.register = this.register.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handlePassChange(event){
        this.setState({pass:event.target.value});
    }

    singIn(){
        if(this.state.email===""||this.state.pass===""){
            alert("Hace falta rellenar campos");
        }else{
            console.log("logeandose");
            fetch('http://127.0.0.1:8000/login',{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({email:this.state.email, pass:this.state.pass})
            })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                if(data.error==0||data.error=='0'){
                    alert(data.message);
                }else{
                    alert(data.message);
                }
            })
            .catch(function(err){
                console.log(err)
            });
        }
        
    }
    
    register(){
        window.location.href="/signup/";
    }

    render(){
        
        return(
            <div className="login-form-container">
                <div className="login-form-header">
                    <img className="login-form-logo" src={logo} alt="Logo de preguntamelo"></img>
                    <p style={{alignSelf:"center"}}>Preguntamelo</p>
                </div>
                <div className="login-form-text">
                    <div className="info-text">Login into your account</div>
                    <div className="info-text">Let's access to your dashboard</div>
                    <hr style={{width:"75%"}}/>
                    <div className="login-form-section">
                        <span style={{fontWeight:"bold"}}>
                            Email
                        </span>
                        <input placeholder="Email or Phone number" type="text" onChange={this.handleEmailChange}></input>
                        <span style={{fontWeight:"bold"}}>
                            Password
                        </span>
                        <input placeholder="Password" type="password" onChange={this.handlePassChange}></input>

                        <a href={{}}>Reset password</a>
                        <button className="sign-in-button" onClick={this.singIn}>Sing in</button>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center',marginLeft:"5%"}}>
                    <p>Dont have an account yet?</p>
                    <a onClick={this.register} href={{}}>Join our community</a>
                </div>
                {/**
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
                    <hr style={{width:"75%"}}/>
                    <div className="login-form-section">
                    <span style={{fontWeight:"bold"}}>
                        Email
                    </span>
                    <input placeholder="Email or Phone number" type="text" onChange={this.handleEmailChange}></input>
                    <span style={{fontWeight:"bold"}}>
                        Password
                    </span>
                    <input placeholder="Password" type="password" onChange={this.handlePassChange}></input>

                    <a href={{}}>Reset password</a>
                    <button className="sign-in-button" onClick={this.singIn}>Sing in</button>
                </div>
                </div>
                <div style={{display:'flex', alignItems:'center',marginLeft:"5rem"}}>
                    <p>Dont have an account yet?</p>
                    <a onClick={this.register} href={{}}>Join our community</a>
                </div>
            </div> */}
            </div>
            
        )
    }
}