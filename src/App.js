import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const todos = [
    {
      text: 'マクセル方程式',
      isFinished: true
    },
    {
      text: '塾',
      isFinished: true
    },
    {
      text: '確定申告',
      isFinished: true
    }
  ]
  return (
    <div className="App">
      <div className='Todo-name'>Todo app</div>
      <div className='Todo-box'>
        <TodoInput />
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
