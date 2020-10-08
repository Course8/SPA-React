import React, {Component} from 'react';

class Sobre extends Component{

    constructor(props){
        super();
        this.state = {
            text: props.text,
            name: "fulano",
            age: props.age
        }
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    }

    setName(){
        this.setState({
            name: "ciclano"
        })
    }

    resetName(){
        this.setState({
            name: "fulano"
        })
    }

    render(){
        let list= [
            {name: "fulano", email: "seuemail@gmail.com"},
            {name: "ciclano", email: "outroemail@gmail.com"}
        ]

        return(
            <div id="sobre py-4">
                <h2 className="titles">
                    Sobre
                </h2>
                    <p className="textos">
                        {this.state.text}
                    </p>
                    <p className="textos">
                        Eu sou o {this.state.name}
                    </p>
                    <button className="botões" onClick={this.setName}>Mudar nome</button>
                    <button className="botões mb-5" onClick={this.resetName}>Resetar nome</button>
            </div>
        )
    }
}

export default Sobre