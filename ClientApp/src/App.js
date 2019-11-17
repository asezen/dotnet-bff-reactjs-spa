import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { HomeFancy } from './components/HomeFancy';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  onGreet(){
    alert("hello bro");
  }

  render () {
    return (
      <div>
        <div>
        <Layout >
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
        </Layout>
        </div> 
      </div>
    );
  }
}
