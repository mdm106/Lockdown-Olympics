import React, { Component } from "react";

class PageHeading extends Component {
  render() {
    const { children } = this.props; 
    return (
      <header className="header margin-auto">
          <h1>{ children }</h1>
      </header>
      );
  }
}

PageHeading.defaultProps = {
    children: "Lockdown Olympics"
  }

export default PageHeading;