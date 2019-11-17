import React, { Component } from 'react';
import { IntCounter } from './IntCounter';
import { FormTest } from './FormTest';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);

    this.state = { 
      FormTestData: {
        ContactName:'',
        ContactEmail:''   
      }, 
     }; 

     this.onDataChange = this.onDataChange.bind(this);
  }

   onShowCount(cnt){
     alert(cnt);
   }

      // ['FormTestData.'+varName]: value
   onDataChange(varName, value){
    console.log("data change event:", varName, value);
    
    let formTest = this.state.FormTestData; 
    formTest[varName] = value;
    this.setState((state,props)=>({
      FormTestData: formTest
    })
    , () => {
      console.log("New state in ASYNC callback on Formtest:", this.state.FormTestData);
      console.log("New state in ASYNC callback:", this.state);
    });
    
  }
 

  render () {
    return (
      <div> 
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>

        <IntCounter showCount ={this.onShowCount} />
        <hr/>
        <h1>Home page : Parent-Child Data Test</h1>        
        <p aria-live="polite">Current Name: <strong>{this.state.FormTestData.ContactName}</strong></p>
        <p aria-live="polite">Current email: <strong>{this.state.FormTestData.ContactEmail}</strong></p>
        <button >get values</button>
        <hr/>
        <FormTest dataChanged ={this.onDataChange} />
      </div>
    );
  }
}
