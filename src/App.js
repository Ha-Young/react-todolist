import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoHead from './components/ToDoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
      </ToDoTemplate>
    </>
  );
}

export default App;
