import React from "react";

export default class UserDashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h4 className="user-name">Carlos Villanueva</h4>
          <button className="login-logout-button">Log Out</button>
        </div>

        <div className="ask-question-box">
          <h1 className="ask-question-title">How can we help you?</h1>
          <input className="search-box" placeholder="Ask a question..."></input>
        </div>
      </div>
    );
  }
}
