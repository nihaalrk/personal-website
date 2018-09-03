import React, { Component } from 'react';
import { render } from "react-dom";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Box className="title-box">Nihaal Korandla's Personal Website</Box>
      </div>
    );
  }
}

export default HomePage;