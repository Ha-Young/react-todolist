import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoHead from './components/ToDoHead';
import ToDoList from './components/ToDoList';

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
        <ToDoList />
      </ToDoTemplate>
    </>
  );
}

export default App;
