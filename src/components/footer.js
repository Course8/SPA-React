import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super()
        this.state = {
            ano: 2020,
            autor: "Course",

        }
    }

    render(){
        return(
            <footer className="Footer pé direitos py-3">
                <a>Direitos Reservados © {this.state.autor} {this.state.ano}</a>
            </footer>
        )
    }
}

export default Footer;