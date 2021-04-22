import React, { Component } from 'react';
import ComponentFileOne from './components/componentFileOne';
//in App.js we import components

export class App extends Component {
  render() {
    return (
      <div>
        <h2>this is now rendering our component</h2>
        <ComponentFileOne/>
      </div>
    )
  }
};

export default App;
