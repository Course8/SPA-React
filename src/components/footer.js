import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super()
        this.state = {
            contato: '51 99277-1430',
            email: "fulano@gmail.com",
            ano: 2020,
            autor: "Course",

        }
    }

    render(){
        return(
            <footer className="Footer">
                <p>Fale Conosco: Telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <a href="">Direitos Reservados © {this.state.autor} {this.state.ano}</a>
            </footer>
        )
    }
}

export default Footer;