import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('Error', error))
    // .post('http://localhost:5000/friends' this.state.data)
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
