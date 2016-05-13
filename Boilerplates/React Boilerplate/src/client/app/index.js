import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

class App extends React.Component {
  render () {
    return (<div>
      <p> Hello React 2!</p>
      <AwesomeComponent />
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));