import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Hello ${this.state.textInput}`);
    this.setState({
      textInput: ""
    });
  };

  render() {
    const { textInput } = this.state;
    return (
      <div className="styleOne">
        <Form>
          <FormGroup row>
            <Label for="text" sm={1}>Text</Label>
            <Col sm={5}>
              <Input value={textInput} onChange={this.handleInputChange} type="text" name="textInput" id="text" placeholder="with a placeholder" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 1, offset: 2 }}>
              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Example;