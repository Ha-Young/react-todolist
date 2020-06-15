import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialToDos = [
  {
    id: 1,
    text: '출근하기',
    done: true,
  },
  {
    id: 2,
    text: '반차쓰기',
    done: true,
  },
  {
    id: 3,
    text: '집에서 조금 쉬기',
    done: true,
  },
  {
    id: 4,
    text: '카페에서 공부하기 (ToDoList 끝내기)',
    done: false,
  },
  {
    id: 5,
    text: '밥 먹기',
    done: false,
  },
  {
    id: 6,
    text: 'API 강의 듣기',
    done: false,
  },
];

function toDoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);

    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );

    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error(`Unhandled action... type : ${action.type}`);
  }
}

const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
const ToDoNextIdContext = createContext();

export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(toDoReducer, initialToDos);
  const nextId = useRef(7);

  return (
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        <ToDoNextIdContext.Provider value={nextId}>
          {children}
        </ToDoNextIdContext.Provider>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

export function useToDoState() {
  const context = useContext(ToDoStateContext);
  if (!context) {
    throw new Error('Cannot find ToDoStateContext Provider');
  }
  return context;
}

export function useToDoDispatch() {
  const context = useContext(ToDoDispatchContext);
  if (!context) {
    throw new Error('Cannot find ToDoDispatchContext Provider');
  }
  return context;
}

export function useToDoNextId() {
  const context = useContext(ToDoNextIdContext);
  if (!context) {
    throw new Error('Cannot find ToDoNextIdContext Provider');
  }
  return context;
}
