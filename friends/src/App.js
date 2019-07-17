import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import Axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    // Axios.get('http://localhost')
  }

  render() {
    return (
      <div className="App">
        <FriendsList />

      </div>
    );
  }
}

export default App;
