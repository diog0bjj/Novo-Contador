import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  color:#fff;
}
body{
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100vw;
  height:100vh;
  background-color:#F5DEB3;
}
`
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:70vw;
border: solid black;
height:30rem;
background-color:#1C1C1C;
`
const Titulo = styled.div`
font-size:large;
display:flex;
justify-content:center;
align-items:center;
height:8rem;
width:100%;
`
const Number = styled.div`
font-size:x-large;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:15rem;
`
const Botoes = styled.div`
display:flex;
justify-content:center;
width:100%;
height:7rem;
`
const Botao = styled.button`
width:34%;
height:7rem;
background-color:#FF8C00;
font-size:x-large;
font-weight:bold;
border:solid black;
`

class App extends Component {
  state={
    count : 2,
  };

  adicionar = () => {
    this.setState({
      count:this.state.count < 20 ? this.state.count +1 : this.state.count
    })
  }
  diminuir = () => {
    this.setState({
      count:this.state.count > 2 ? this.state.count -1 : this.state.count
    })
  }
  limpar = () => {
    this.setState({count:2})
  }

  render(){
    return(
      <Container>
        <GlobalStyle/>
        <Titulo>
          <h1>EU REFIZ ESSE CÓDIGO</h1>
        </Titulo>
        <Number>
          <h2>{this.state.count} vezes</h2>
        </Number>
        <Botoes>
          <Botao onClick={this.adicionar}>+</Botao>
          <Botao onClick={this.diminuir}>-</Botao>
          <Botao onClick={this.limpar}>limpar</Botao>
        </Botoes>
      </Container>
    )
  }
}

export default App