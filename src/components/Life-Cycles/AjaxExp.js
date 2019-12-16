import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';
import './AjaxExp.css';

class AjaxExp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      isLoaded: false
    }
  }

  componentDidMount() {
    new WOW().init();
    this.handleAxios()
  }

  handleAxios = () => {
    axios.get("https://api.github.com/zen")
      .then(response => {
        setTimeout(() => {  // <-- delaying the data load to demo animated loading icon
          this.setState({
            quote: response.data,
            isLoaded: true
          });
        }, 3000)
      })
  }

  render() {
    const { quote, isLoaded } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div>
            {isLoaded ? (
              <div>
                <h1>Quote from API:</h1>
                <p>{quote}</p>
              </div>
            ) : (
                <div className="loader" />
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default AjaxExp;
