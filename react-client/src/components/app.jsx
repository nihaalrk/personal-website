import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './home_page.jsx';
import NavBar from './header-component/nav_bar.jsx';
import Footer from './footer-component/footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    )
  }
}

export default App;