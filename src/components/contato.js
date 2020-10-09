import React, {Component} from 'react';

class Contato extends Component{
    constructor(props){
        super();
        this.state = {
            telefone: props.text,
            twitter: props.text2,
            email: "fulano@gmail.com",
        }
    }
    
    
    render(){
        return(
            <div className="mb-5">
                <h2 className="titles">Contato</h2>
                <p className="textos2">Fale Conosco:</p>
                <p className="textos">
                    {this.state.telefone}
                </p>
                
                <p className="textos">
                    {this.state.twitter}
                </p>
            </div>
        )
    }
}

export default Contato