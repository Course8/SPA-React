import React, {Component} from 'react';

class Contato extends Component{
    constructor(props){
        super();
        this.state = {
            text: props.text,
            text2: props.text2,
            telefone: "(51)9224-2690",
            twitter: "@cursoito",
        }
    }
    
    
    render(){
        return(
            <div className="mb-4">
                <h2 className="titles">Contato</h2>
                <p className="textos">
                    {this.state.text}
                </p>
                
                <p className="textos">
                    {this.state.text2}
                </p>
            </div>
        )
    }
}

export default Contato