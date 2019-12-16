import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';

class AjaxExp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: ""
    }
  }

  componentDidMount() {
    new WOW().init();
    axios.get("https://api.github.com/zen")
      .then(response => {
        this.setState({
          quote: response.data
        })
      })
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Quote from API:</h1>
          <p>{quote}</p>
        </div>
      </div>
    )
  }
}

export default AjaxExp;
