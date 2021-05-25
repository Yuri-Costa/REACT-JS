import React from "react";
import './App.css';
import bem101 from "./ben10.png";
import bem102 from "./ben10.png";

function DataFormatada(props) {
  return <p>{props.date.toLocaleTimeString()}</p>
}
class Relogio extends React.Component{
  constructor(props){
    super(props)      //DateTime.Now 
    this.state = {   date : new Date()     }
  }
    //nascimento
  componentDidMount(){
      this.timerID = setInterval( () => {  this.thick()        },
      
      
      1000)
      console.log("Eu sou o relogio " + this.timerID)
  }

    //morte
  componentWillUnmount(){
      clearInterval(this.timerID)
  }
  //Função criada para atualizar o valor do relogio e consequentimente a pagina renderizada
  thick(){
    //Set traduzido é definir
    this.setState({
      date : new Date()
    });
  }

   PararRelogio(){
     clearInterval(this.timerID)
     console.log("RELÓGIO " + this.timerID+" PAROU")
  }

    VoltarRealogio(){
      this.timerID = setInterval( () => {  this.thick()},
      1000)
    }
  
  render(){
    return(
      <div>
        <DataFormatada date={this.state.date}/>
        <button class="btn1" onClick={() => this. PararRelogio()}> <h3>STOP!</h3></button>    
        <button class="btn2" onClick={() => this. VoltarRealogio()}><h3>START!</h3></button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <div className="div123">
        <li className ="relogios">
          <img src = {bem101} className = "ben10"></img>
          <img src = {bem102} className = "ben10-1"></img>
        </li>
        <h3 class= "clock1"> <Relogio /></h3>
        <h3 class= "clock2"> <Relogio /></h3>
        </div>



      </header>
      <style>{}</style>
    </div>
    
  );
}

export default App;
