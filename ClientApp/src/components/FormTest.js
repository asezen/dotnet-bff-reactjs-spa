import React, { Component } from 'react';

export class FormTest extends Component {
  static displayName = FormTest.name;

  constructor(props) {
    super(props);

    this.state = { 
      ContactName:'',
      ContactEmail:''      
     }; 
  }

  onDataChange(event) { 
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, () => {
      // console.log("New state in ASYNC callback:", name, value);
    });

    this.props.dataChanged(name,value);
  } 
  
  getCurrentStateData(){
    return {FormData:{ 'ContactName': this.state.ContactName, 'ContactEmail': this.state.ContactEmail}};
  }

  render() {
    return (
      <div>
        <hr/>
        <h2>Form Data Test</h2>  
        <form>
          <input name='ContactName'  onChange={this.onDataChange.bind(this) }  /> 
          <br/>
          <input name='ContactEmail'  onChange={this.onDataChange.bind(this) }  /> 
        </form>
        <hr/>
      </div>
    );
  }

}

 
// FormTest.PropTypes = {
//   showCount: React.PropTypes.func

// }
