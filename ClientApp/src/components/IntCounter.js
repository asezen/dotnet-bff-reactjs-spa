import React, { Component } from 'react';

export class IntCounter extends Component {
  static displayName = IntCounter.name;

  constructor(props) {
    super(props);

    this.state = { 
      currentCount: 0,
      ContactName:'',
      ContactEmail:''      
     };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    var currentCount = this.state.currentCount + 1;
    this.setState({
      currentCount: currentCount
    });

    this.props.showCount(currentCount);
  }
  setContactName(event){

    console.log('Value of Contact Name has not changed yet:       ',this.state.ContactName);
    var cVal = event.target.value;
    this.setState(prevState => ({
      ContactName: cVal
    }), () => {
      console.log("New state in ASYNC callback:", this.state.ContactName);
    });
 
  }
  
  setContactNameValue(val){  
    
    console.log('Value of Contact Name has not changed yet:       ',this.state.ContactName); 
    this.setState(prevState => ({
      ContactName: val
    }), () => {
      console.log("New state in ASYNC callback:", this.state.ContactName);
    });
  }
  setContactEmailValue(val){  
    
    console.log('Value of Contact Email has not changed yet:       ',this.state.ContactName); 
    this.setState(prevState => ({
      ContactEmail: val
    }), () => {
      console.log("New state in ASYNC callback:", this.state.ContactName);
    });
  }
  
  render() {
    return (
      <div>
        <h2>Counter</h2>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
        <hr/>
        <form>
          {/* <input defaultValue='' onChange={this.setContactName.bind(this) }  /> */}
          <input name='ContactName' defaultValue='' 
                onChange={({target:{value}})=> this.setContactNameValue(value)}  /> 
          <br/>
          <input  name='ContactEmail' defaultValue='' 
                onChange={({target:{value}})=> this.setContactEmailValue(value)}  />
          <p aria-live="polite">Current email: <strong>{this.state.ContactEmail}</strong></p>
        </form>
        <hr/>
      </div>
    );
  }

}

// IntCounter.PropTypes = {
//   showCount: React.PropTypes.func

// }
