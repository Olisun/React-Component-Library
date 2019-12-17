import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';


class GitHubUserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgURL: "",
      name: "",
      repos: ""
    }
  }

  // Demonstrating asychronous functions in CDM. With asych await, now need for .then.

  async componentDidMount() {
    new WOW().init();
    const { username } = this.props;
    const url = `https://api.github.com/users/${username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data)
    this.setState({
      imgURL: data.avatar_url,
      name: data.name,
      repos: data.repos_url
    })
  }


  render() {
    const { username, username2 } = this.props;
    const { imgURL, name, repos } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>GitHub User: {username}</h1>
          <img src={imgURL} />
          <p>Repos: {repos}</p>
        </div>
      </div>
    )
  }
}

export default GitHubUserInfo;
