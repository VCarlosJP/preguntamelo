import React from 'react';
import './styles/HomeNavBar.scss';

export default class HomeNavBar extends React.Component{
    constructor(props){
        super(props);

        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    signUp(){
        console.log("sign up");
        window.location.href="signup/";
    }

    login(){
        console.log("login");
        window.location.href="login/";
    }

    render(){
        return(
            <div>
                <div className="home-nav-bar">
                    <div className="home-nav-bar-logo">
                        <img style={{width:"5%",height:"5%"}}alt="Logo" src="https://www.andalucialab.org/wp-content/uploads/2020/02/INSERTAR_LOGO2.jpg"></img>
                    </div>
                    <div className="home-nav-bar-buttons">
                        <button className="home-btn signup" onClick={this.signUp}>Sign up</button>
                        <button className="home-btn login" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}