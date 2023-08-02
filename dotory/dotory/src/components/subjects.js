import React, { Component } from "react";
import '../pocket.css'
class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Java"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
    this.props.setSubject(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="Java" name="subject" /> Java  
        <input type="radio" value="C++" name="subject" /> C++  
        <input type="radio" value="Algorithm" name="subject" /> Algorithm  
        <input type="radio" value="Math" name="subject" /> Math  
        <input type="radio" value="Etc" name="subject" /> Etc  
      </div>
    );
  }
}

export default Demo1;