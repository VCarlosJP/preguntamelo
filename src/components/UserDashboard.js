import React from "react";

import "./styles/UserDashboard.scss";

// export default class UserDashboard extends React.Component {
class UserDashboard extends React.Component {
  state = {
    questionButton: true,
  };

  showUserQuestions = () => {
    this.setState({ questionButton: true });
  };

  showPublicQuestions = () => {
    this.setState({ questionButton: false });
  };

  render() {
    let { questionButton } = this.state;
    return (
      <div>
        <div className="header">
          <h4 className="user-name">Carlos Villanueva</h4>
          <button className="login-logout-button">Log Out</button>
        </div>

        <div className="ask-question-box">
          <h1 className="ask-question-title">How can we help you?</h1>
        </div>

        <div className="ask-question-search-bar-main-container">
          <div className="ask-question-search-bar-container">
            <input
              className="search-box"
              placeholder="Ask a question..."
            ></input>
            <button className="ask-question-button">Ask Button</button>
          </div>
        </div>

        <div className="select-mode-container">
          <div className="select-mode-box">
            <button
              onClick={this.showUserQuestions}
              className="my-questions-mode-button"
              style={{ background: questionButton ? "#eeeeee" : "#ffffff" }}
            >
              My Questions
            </button>
            <button
              onClick={this.showPublicQuestions}
              className="public-questions-mode-button"
              style={{ background: questionButton ? "#ffffff" : "#eeeeee" }}
            >
              Public Questions
            </button>
          </div>
        </div>

        <div className="questions-main-container">
          <div className="questions-main">
            <div className="question-element">
              <a href="" className="question-title">
                When I spot a possible improvement while reviewing, can I
                suggest to join the paper as a co-author?
              </a>
              <br></br>
              <a className="question-date">Asked 2 days ago</a>
              <a className="question-status">Sent</a>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
