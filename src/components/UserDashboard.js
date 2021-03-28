import React from "react";

import "./styles/UserDashboard.scss";
import {questions} from "../stubs/fakeData.js"

// export default class UserDashboard extends React.Component {
class UserDashboard extends React.Component {
  state = {
    questionMode: true,
    isFetchingQuestions: true,
    userQuestions: [],
    publicQuestions: [],
  };

  componentDidMount() {
    this.getQuestions("posts", "userQuestions");
  }

  showUserQuestions = () => {
    this.setState({ questionMode: true });
    this.getQuestions("posts", "userQuestions");
  };

  showPublicQuestions = () => {
    this.setState({ questionMode: false });
    this.getQuestions("posts", "publicQuestions");
  };

  getQuestions = (entity, stateProperty) => {
    this.setState({ [stateProperty]: questions });
  }
  //   fetch(`http://localhost:3000/${entity}`)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ [stateProperty]: data }))
  //     .catch((err) => console.log("Couldn´t resolve"));
  // };

  renderQuestions = (questions) => {
    if (questions.length == 0) return <a>Nothing to show here...</a>;
    else {
      return questions.map((question, index) => (
        <div className="question-element">
          <a href="" className="question-title">
            {question.question}
          </a>
          <br></br>
          <div style={{ "margin-top": "5px" }}>
            <a className="question-status">{question.status}</a>
            <a className="question-date">Asked {question.date} ago</a>
          </div>
          <hr></hr>
        </div>
      ));
    }
  };

  render() {
    let {
      questionMode,
      userQuestions,
      publicQuestions,
      isFetchingQuestions,
    } = this.state;
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
              style={{ background: questionMode ? "#eeeeee" : "#ffffff" }}
            >
              My Questions
            </button>
            <button
              onClick={this.showPublicQuestions}
              className="public-questions-mode-button"
              style={{ background: questionMode ? "#ffffff" : "#eeeeee" }}
            >
              Public Questions
            </button>
          </div>
        </div>

        <div className="questions-main-container">
          <div className="questions-main">
            {questionMode
              ? this.renderQuestions(userQuestions)
              : this.renderQuestions(publicQuestions)}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
