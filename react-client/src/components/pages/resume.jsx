import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <div className="fields">
		      <div className="fieldOuter">
		        <label for="Name">Name</label>
			  	</div>
			  	<div className="fieldInner">
		  			<input id="Name" type="text" />
		    	</div>
			  </div>
		  </div>
    )
  }
}

export default Resume;