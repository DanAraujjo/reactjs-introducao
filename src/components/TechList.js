import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node Js", "React Js", "React Native"]
  };

  render() {
    return (
      <ul>
        {this.state.techs.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
    );
  }
}

export default TechList;
