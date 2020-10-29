import React, { Component } from 'react';
import './App.css';
import Quotebox from './Quotebox';
import Button from './Button';
import image from './cnpic.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      random: [],
    }
  }

  fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response=>response.json())
    .then(quote=>this.setState({random:quote.value}));
  }
 componentDidMount(){
   this.fetchJoke()
  }

  render(){

//destructed this.state.random to just { random }
  const { random } = this.state;

   return(
   <div>
     <div className ="image">
     <img alt='cnpic' src={image}></img>
     </div>
       <div className ="header">
          <h1 className ="title">Chuck Norris Facts</h1>
         <p>Arguably the worlds best quote generater in existance.<br />
            This statement is Chuck Norris approved therefore it's true.<br />
            No more questions. Just fact. Side note: <b>Badass mother f*$@£rs rock Pink.</b>
        </p>
      </div>
        <div className="quote">
        < Quotebox props={random} />
        </div>
        <div className = "buttonclass">
        < Button props = {this.fetchJoke} />
        </div>
        <div>
        <p>Chuck Norris approves you clicking hit me.</p>
      </div>
    </div>
    );
  };

}

export default App;