// useStateというReactの機能を使うためにインポートしています。
import { useState } from 'react';
// アプリ全体のCSS（見た目）を読み込んでいます。
import './App.css';
// タスクを追加する入力欄のコンポーネントを読み込んでいます。
import TodoInput from './TodoInput';
// タスク一覧を表示するコンポーネントを読み込んでいます。
import TodoList from './TodoList';

// アプリの本体となるAppコンポーネントを作っています。
function App() {
  // ランダムな文字列を作って、タスクごとに違うIDを作る関数です。
  const startId = () => Math.random().toString(36).substring(2);
  // 最初から表示されるタスクのリストを作っています。
  const initialTodos = [
    {
      id: startId(), // タスクのID
      text: 'マクセル方程式', // タスクの内容
      isFinished: true // このタスクが終わっているかどうか
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
  // todosという名前でタスクのリストを管理しています。最初はinitialTodosが入っています。
  const [todos, setTodos] = useState(initialTodos);

  // 新しいタスクを追加する関数です。textは入力されたタスクの内容です。
  const eventAdd = (text) => {
    // 新しいタスクの情報を作ります。
    const shinTodo = {
      id: startId(),
      text: text,
      isFinished: false // 追加したばかりなので未完了
    };
    // 今までのタスクに新しいタスクを追加して、更新します。
    setTodos((prevTodos) => [...prevTodos, shinTodo]);
  };

  // チェックボックスを押したときに、タスクの完了・未完了を切り替える関数です。
  const eventCheck = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        // 押されたタスクだけisFinishedを反転させます。
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      )
    );
  };

  // 削除ボタンを押したときに、そのタスクを消す関数です。
  const eventDelete = (id) => {
    // idが一致しないタスクだけ残します。
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 画面に表示する内容を返します。
  return (
    <div className="App">
      {/* アプリのタイトルを表示します */}
      <div className='Todo-name'>Todo app</div>
      {/* タスク入力欄とタスク一覧を囲む箱です */}
      <div className='Todo-box'>
        {/* タスクを追加する入力欄を表示します */}
        <TodoInput onAdd={eventAdd} />
        {/* タスクのリストを表示します */}
        <TodoList todos={todos} onCheck={eventCheck} onDelete={eventDelete} />
      </div>
    </div>
  );
}

// Appコンポーネントを他のファイルでも使えるようにしています。
export default App;