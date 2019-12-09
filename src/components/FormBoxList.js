import React, { Component } from 'react'
import FormBox from './FormBox';
import FormBoxNew from './FormBoxNew';
import { WOW } from 'wowjs/dist/wow';

class FormBoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    };
  }

  componentDidMount() {
    new WOW().init()
  }

  createBox = (newBox) => {
    const { boxes } = this.state;
    this.setState({
      boxes: [...boxes, newBox]
    })
  }

  removeBox = (id) => {
    const { boxes } = this.state;
    this.setState({
      boxes: boxes.filter(box => box.id !== id)  // <-- filter makes a new array with all boxes who's unique id does not equal the id of the box being removed.
    })
  }

  render() {
    const { boxes } = this.state;
    const boxesForRender = boxes.map(box => (  // <-- map makes a new box and puts it into the array.
      <FormBox
        key={box.id}
        id={box.id}  // <-- can't use key as the selector for remove so that's why we use id.
        height={box.height}
        width={box.width}
        color={box.color}
        removeBox={() => this.removeBox(box.id)}  // <-- passing arrow function down as prop.
      />
    ))
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Box Maker</h1>
          <FormBoxNew
            createBox={this.createBox}
          />
          {boxesForRender}
        </div>
      </div>
    )
  }
}

export default FormBoxList;