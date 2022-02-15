////Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

import React, { Component } from "react";
import './App.css'

class App extends Component {
  state = {
    count: 0,
    msg:""
  };

  add = () => {
    const {count} = this.state
       if (count < 10) {
         this.setState({
           count: count + 1
         })
       }
  };

  remove = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({
        count: count - 1
      })
    }
  };

  render() {
    const {count} = this.state
    const {add, remove} = this
    return (
      <div className="container">
        <section className="box">
        <h1>React Counter App</h1>
        <div className="counter">
        <button onClick={add}>Adicionar</button>
        <h2>{count}</h2>
        <button onClick={remove}>Subtrair</button>
        </div>
        </section>
      </div>
    );
  }
}

export default App;
