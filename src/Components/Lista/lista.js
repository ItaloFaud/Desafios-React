import React, { Component } from "react";
import "./lista.css";

// class Lista extends Component{
//     render(){
//         return(<li>A{this.props.nome}</li>)
//     }
// }

const Lista = props =>{
    return (
        <ul>
            {props.pessoas.map((n,k) => {
                return <li key={k}>{n}</li>
            })}
        </ul>
    );
};


export default Lista;