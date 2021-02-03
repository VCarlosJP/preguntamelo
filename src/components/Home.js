import React from "react";
import HomeBody from "./HomeBody";
import HomeNavBar from "./HomeNavBar";

export default class Home extends React.Component {
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column",overflowX:"hidden"}}>
        <HomeNavBar/>
        <div style={{alignSelf:"center"}}>
          <HomeBody/>
        </div>
      </div>  
    );
  }
}
