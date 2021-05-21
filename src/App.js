import React from "react";
import './App.css';

function DataFormatada(props) {
  return <h2> Horário Atual: {props.date.toLocaleTimeString()}</h2>
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
  thick(){
   this.setState ({
     date : new Date()
   })
  }
  render(){
    return(
      <div>
        <h1>Relógio1</h1>
        <DataFormatada date = {this.state.date} />
        
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Relogio />
      </header>
    </div>
  );
}

export default App;
