import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="#">menu item 1</a></li>
          <li><a href="#">menu item 2</a></li>
          <li><a href="#">menu item 3</a></li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn>Button</StyledBtn>
        <StyledBtn as='a' href='#'>Link</StyledBtn>
        <StyledBtn as={StyledLink} href='#'>StyledLink</StyledBtn>
        <StyledLink href={'#'}>Styled Link</StyledLink>
        <SuperBtn>SuperBtn</SuperBtn>
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
  
  &:hover {
    background-color: bisque;
  }
  
  &:last-child {
    background-color: chartreuse;
  }
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
  gap: 20px;
  
  button {
    cursor: pointer;
  }

  ${StyledLink} {
    cursor: zoom-in;
  }
`
const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    
    li > a {
      color: green;
    }
    
    li + li {
      margin-left: 20px;
    }
  }
`
