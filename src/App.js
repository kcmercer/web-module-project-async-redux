import React from 'react';
import './App.css';
import Fact from './components/catFact'
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin-top: 2%;
  color: #CBCCD6;
`

function App() {
  return (
    <div className="App">
      <StyledH1>Cat Fact Printer</StyledH1>
      <Fact />
    </div>
  );
}

export default App;