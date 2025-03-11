import { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const startId = () => Math.random().toString(36).substring(2);
  const initialTodos = [
    {
      id: startId(),
      text: 'マクセル方程式',
      isFinished: true
    },
    {
      id: startId(),
      text: '塾',
      isFinished: true
    },
    {
      id: startId(),
      text: '確定申告',
      isFinished: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const eventAdd = (text) => {
    const shinTodo = {
      id: startId(),
      text: text,
      isFinished: false
    };
    setTodos((prevTodos) => [...prevTodos, shinTodo]);
  };

  // onToggle: 指定の todo の isFinished を反転
  const eventCheck = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      )
    );
  };

  // onDelete: 指定の todo を削除
  const eventDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className='Todo-name'>Todo app</div>
      <div className='Todo-box'>
        <TodoInput onAdd={eventAdd}/>
        <TodoList todos={todos} onCheck={eventCheck} onDelete={eventDelete}/>
      </div>
    </div>
  );
}

export default App;