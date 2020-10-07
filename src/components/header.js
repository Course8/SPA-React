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
    render(){
        return(
            <header>
                <nav>
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
            </header>
        )
    }
}

export default Header;