import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoHead from './components/ToDoHead';
import ToDoList from './components/ToDoList';
import ToDoCreate from './components/ToDoCreate';
import { ToDoProvider } from './components/ToDoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <ToDoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoTemplate>
    </ToDoProvider>
  );
}

export default App;
