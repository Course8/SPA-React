import React, {Component} from 'react';

class Serviços extends Component{
    constructor(props){
        super();
        this.state = {
            text3: props.text3,
        }

    }

    render(){
        return(
            <div className="mb-5">
                <h2 className="titles">Serviços</h2>
                <p className="textos2">
                    Serviços Oferecidos: 
                </p>
                <p className="textos">
                    Desenvolvimento de Softwares com Java, C# e Python;
                </p>
                <p className="textos">
                    Desenvolvimento de Games com Unity, Unreal Engine e Godot
                </p>
                <p className="textos">
                    Desenvolvimento Web (sites);
                </p>
            </div>
        )
    }
}

export default Serviços