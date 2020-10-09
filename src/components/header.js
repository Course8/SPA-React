import React, {Component} from 'react';
import '../App.css';

// function Topo(){
//     return(
//         <header>
//             <nav>
//                 <a>Home </a>
//                 <a>Sobre</a>
//             </nav>
//         </header>
//     );
// }

class Header extends Component{
    constructor(props){
        super();
        this.state = {
            img: props.img,
        }
    }

    greetins(props){
        if(props.name == ""){
            return <p>Bem vindo Visitante!</p>
        } else {
            return <p>Bem vindo {props.name}!</p>
        }
    }
    
    render(){
        return(

            <header className="topo py-2 mb-4">
                <div className="row">
                    <div className="col-3">
                    <span class="greetings">BEM VINDO VISITANTE!</span>
                    </div>

                    <div className="col-6">
                    <nav className="">
                    <a href="">Home</a>
                    <a> </a>
                    <a href="">Sobre</a>
                    <a> </a>
                    <a href="">Contato</a>
                    <a> </a>
                    <a href="">Serviços</a>
                    <a> </a>
                    <a href="">Parceiros</a>
                    </nav>
                    </div>

                    <div className="col-3">
                        <img className="img" src={this.state.img}></img>
                        <span className="textos2">@cursoito</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;