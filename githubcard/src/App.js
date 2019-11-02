import React, { Component } from 'react';
import Card from './components/Card.js';
import Followers from './components/Followers';
import GitHubButton from 'react-github-btn';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      follower: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/ChristCenteredDev')
      .then(res => res.json())
      .then(users => this.setState({ user: users }))
      .catch(err => console.log('error', err));

    fetch('https://api.github.com/users/ChristCenteredDev/followers')
      .then(res => res.json())
      .then(followers => this.setState({ follower: followers }))
      .catch(err => console.log('Error', err));
  }

  render() {
    return (
      <section className='main-container'>
        <div className='App'>
          <div className='card'>
            {console.log('Card...', this.state.user)}
            <Card {...this.state.user} />

            <GitHubButton
              href='https://github.com/ChristCenteredDev/'
              data-size='large'
            >
              Follow ChristCenteredDev
            </GitHubButton>
          </div>
          <div className='following'>
            <div>
              <h2>Followers</h2>
              {console.log('Followers...', this.state.follower)}
              {this.state.follower.map(followers => (
                <Followers followers={followers} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
