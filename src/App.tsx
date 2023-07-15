import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
        <StyledBtn>Button</StyledBtn>
        <StyledBtn as='a' href='#'>Link</StyledBtn>
        <SuperBtn>SuperBtn</SuperBtn>
        <StyledLink>Styled Link</StyledLink>
      </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: #de5d5d;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
`

const StyledLink = styled.a`
  color: #254be5;
  font-size: 2rem;
  font-weight: bold;
`

const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: aqua;
  color: darkred;
`
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
