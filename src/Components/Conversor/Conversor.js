import React, { Component } from "react";
import "./Conversor.css";



const Conversor = props =>{
    
        return (
            <center>
            <div>
            <h1>Conversor de Moedas</h1>
            <input onChange={props.change} value={props.vetor.valor} type="text" placeholder="Informe o valor de reais"></input><br></br>
            <h2>O valor em Dólar ${props.vetor.valor} na cotação de R$ {props.vetor.cotacao} vale R$ {props.vetor.convertido}</h2>
            </div>
            
            </center>
        );
     
    
};


export default Conversor;