import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Sobre from './components/sobre';
import Serviços from './components/serviços';
import Contato from './components/contato';
import Parceiros from './components/parceiros';
import charlesIMG from './img/charlesIMG.png';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1><Header></Header></h1>
        <br></br>
        <h1><Sobre></Sobre></h1>
        <br></br>
        <h1><Serviços></Serviços></h1>
        <br></br>
        <h1><Contato></Contato></h1>
        <br></br>
        <h1><Parceiros></Parceiros></h1>
        <br></br>
        <h1><Footer className="Footer"></Footer></h1>
      </div>
    )
  }
}

export default App;

/**
 * @author: Course
 * @description: Site de teste.
 */
