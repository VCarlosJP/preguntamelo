import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/dashboard" component={UserDashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
