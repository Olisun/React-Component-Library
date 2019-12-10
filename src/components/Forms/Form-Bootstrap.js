import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';

class BootstrapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { textInput } = this.state
    event.preventDefault();
    alert(`You typed ${textInput}`);
    this.setState({
      textInput: ""
    });
  };

  render() {
    const { textInput } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    const myStyles2 = {
      color: 'red',
      fontSize: '2em'
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <Form>
            <FormGroup row>
              <Label
                for="text"
                sm={2}
                style={myStyles2}>
                Captured State: {textInput}
              </Label>
              <Col sm={5}>
                <Input
                  value={textInput}
                  onChange={this.handleInputChange}
                  type="text"
                  name="textInput"
                  id="text"
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 1, offset: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={myStyles}
                  onClick={this.handleFormSubmit}>
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default BootstrapExample;