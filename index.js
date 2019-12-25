import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
         
        <Calcolatore></Calcolatore>
      </div>
    );
  }
}


function VerdettoEbollizione (props){
  return (props.temperatura >=100) ? 'Bolle' : 'Non Bolle'
}


class Calcolatore extends Component {

  constructor(props) {
    super(props);
    this.state = {'temperatura':0}
    this.cambiaValore = this.cambiaValore.bind(this);
  }

  cambiaValore(e){
    console.log(e.type,e.target.value)
    this.setState({'temperatura':e.target.value})
  }

  render(){ return (
    <fieldset>
    <div>
      <label>Temperatura</label>
      <input type="text" onInput={this.cambiaValore}></input>
    </div>
    
      <VerdettoEbollizione temperatura={this.state.temperatura}></VerdettoEbollizione> 
    </fieldset>
    );
  }
}

render(<App />, document.getElementById('root'));
