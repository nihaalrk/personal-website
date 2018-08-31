import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/home_page.jsx';
import Resume from './pages/resume.jsx';
import NavBar from './header-component/nav_bar.jsx';
import Footer from './footer-component/footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/resume" component={Resume} />
        </div>
      </Router>
    )
  }
}

export default App;