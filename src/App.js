import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Sobre from './components/sobre';
import Serviços from './components/serviços';
import Contato from './components/contato';
import Parceiros from './components/parceiros';
import 'bootstrap/dist/css/bootstrap.min.css';
import twitterIMG from './img/twitterIMG.png';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Header img={twitterIMG}></Header>
      <Sobre name={this.props.name} age="28" email="fulano@gmail.com" text="Projeto feito com React em Página única!"></Sobre>
      <Serviços></Serviços>
      <Contato text="Telefone: (51) 99257-8760" text2="Twitter: @cursoito"></Contato>
      <Parceiros></Parceiros>
      <Footer></Footer>
      </div>
    )
  }
}

export default App;

/**
 * @author: Course
 * @description: Site de teste.
 */
