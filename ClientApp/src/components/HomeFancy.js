import React, { Component } from 'react';
import { IntCounter } from './IntCounter';
import { FormTest } from './FormTest';

export class HomeFancy extends Component {
  static displayName = HomeFancy.name;

  constructor(props) {
    super(props);

    this.state = { 
      FormTestData: {
        ContactName:'',
        ContactEmail:''   
      }, 

      childDataGatherMethods: []
     }; 

     this.onDataChange = this.onDataChange.bind(this);
  }

   onShowCount(cnt){
     alert(cnt);
   }

   
   onDataChange(varName, value){
    console.log("data change event:", varName, value);
    
    let formTest = this.state.FormTestData; 
    formTest[varName] = value;
      // ['FormTestData.'+varName]: value  // tek seviye değişkende çalışıyor ama bu şekilde olmayan bir state daha yaratıyor
    this.setState((state,props)=>({
      FormTestData: formTest
    })
    , () => {
      // console.log("New state in ASYNC callback on Formtest:", this.state.FormTestData);
      console.log("New state in ASYNC callback:", this.state);
    });
    
  }

  addNewChildMethod(m){
    let methods = this.state.childDataGatherMethods; 
    methods.push(m);
    this.setState((state,props)=>({
      childDataGatherMethods: methods
    })
    , () => { 
      console.log("New state in ASYNC callback:", this.state);
    });

  }
  gatherDataFromChilds(){
    let methods = this.state.childDataGatherMethods; 
    methods.map((m) =>{ 
     let d = m();
     console.log("child metod çağrıldı ",m,d)
    }
  );
  
  }

  render () {
    return (
      <div> 
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>

        <IntCounter showCount ={this.onShowCount} />
        <hr/>
        <h1>HomeFancy page : Parent-Child Data Test
        https://www.javascriptstuff.com/component-communication/#2-instance-methods
          </h1>        
        <p aria-live="polite">Current Name: <strong>{this.state.FormTestData.ContactName}</strong></p>
        <p aria-live="polite">Current email: <strong>{this.state.FormTestData.ContactEmail}</strong></p>
        <button >get values</button>
        <hr/>
        <FormTest 
          dataChanged ={this.onDataChange} 
          ref={cc => {
            this.gatherDataFromChilds(cc.getCurrentStateData);
          }}
        
        />
      </div>
    );
  }
}
