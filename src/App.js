import React, { Component } from "react"; //jsx
import "./App.css";
import Lista from "./Components/Lista/lista";
import Conversor from "./Components/Conversor/Conversor";
//stateful components
class App extends Component {

  //1 desafio
  // state = {
  //   Texto: "Habilitado",
  //   Btn: "Desabilitado"
  // }

  // handle = () =>{
  //   this.setState({Texto: this.state.Btn, Btn: this.state.Texto });
  // }

  //2 desafio
  // state = {
  //   tempo: 60,
    
  // }

  // handle = () =>{
    
  //     setInterval(() => {
  //       if(this.state.tempo > 0){
  //       this.setState({tempo: this.state.tempo - 1})
  //     }else{
        
  //     }
  //     },10)
  //   }

  //3 e 4 desafio

  state = {
    pessoas: [""],
    nick: ""
  }

  componentDidMount(){
    if(this.setState({pessoas: JSON.parse(localStorage.getItem("pessoaas"))})){
      this.setState({pessoas: JSON.parse(localStorage.getItem("pessoaas"))})  
      console.log(localStorage.getItem("pessoaas"));

    }else{
      localStorage.setItem("pessoaas",JSON.stringify([]));
    }
    
    
  }

  
  handle = () =>{
    let p = this.state.pessoas;
    p.push(this.state.nick);
    this.setState({pessoas: p});
    localStorage.setItem("pessoaas",JSON.stringify(p));
  }

  handleL = () =>{
    
    this.setState({pessoas: []});
    localStorage.setItem("pessoaas", JSON.stringify([]));
  }

  handleChange = (n) =>{
    let nome = n.target.value;
    this.setState({nick: nome});
    console.log(nome);
  }

  //Conversor

  // state = {
  //   valor: 0,
  //   cotacao: 3.97,
  //   convertido: 0,
  //   conversao: false

  // }

  // handleClick = () =>{
   
  //     let c = this.state.valor*this.state.cotacao;
  //     this.setState({convertido: c})
      
  //     console.log(this.state.tag);
    
  //    console.log("Valor"+this.state.convertido)
    
  // }
  
  // handleChange = (campo) =>{
  //   this.setState({valor: campo.target.value});
  //   console.log(campo.target.value);
    
  //   let c = this.state.valor*this.state.cotacao;
  //   this.setState({convertido: c})
    
  // }
  
    
  

  render() {
    return (
      //1 desafio
      // <div className="App">
      //   {}
      //   <h1>{this.state.Texto}</h1>
      //   <button onClick={this.handle}>{this.state.Btn}</button>
      // </div>

      //2 desafio
      // <div className="App">
      //   <div id="Crono">
      //     <h1>{this.state.tempo}</h1>
          
      //     <button onClick={this.handle}>Habilitar</button>
      //   </div>

      //3 e 4 desafio
        <div className="App">
        <div>
          <input onChange={this.handleChange} type="text" placeholder="Nome aqui"></input>
        <button onClick={this.handle}>Cadastrar</button>
        <button onClick={this.handleL}>Limpar</button>
        </div>
        <div>
        <Lista pessoas={this.state.pessoas}></Lista>
        </div>
          
          
          
        
        
      </div>

      //Desafio Conversor
      // <div className="App">
      //   <Conversor vetor={this.state} change={this.handleChange} click={this.handleClick}></Conversor>
      //   <h2>{this.state.tag}</h2>
      // </div>
    );
  }
}

//stateless components
// const App = () => {
//   return (
//     <div className="App">
//       <h1>Neo</h1>
//     </div>
//   );
// };

export default App;
