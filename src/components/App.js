import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (
  <div className="App-header">
    <h2>CareCloud React-Redux Boilerplate</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    )
  }
}

export default App;
