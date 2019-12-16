import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';


class GitHubUserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // Demonstrating asychronous functions in CDM. With asych await, now need for .then.

  async componentDidMount() {
    new WOW().init();
    const { username } = this.props;
    const url = `https://api.github.com/users/${username}`;
    let response = await axios.get(url);
    console.log(response.data)
  }


  render() {
    const { username } = this.props;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>GitHub User Info</h1>
          {username}
        </div>
      </div>
    )
  }
}

export default GitHubUserInfo;
