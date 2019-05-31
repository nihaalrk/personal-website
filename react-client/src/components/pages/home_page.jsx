import React, { Component } from 'react';
import { render } from "react-dom";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
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