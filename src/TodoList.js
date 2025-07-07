// TodoItemコンポーネントをインポートしています。
import TodoItem from "./TodoItem";

// TodoListコンポーネントを定義しています。propsとしてtodos, onCheck, onDeleteを受け取ります。
const TodoList = ({ todos, onCheck, onDelete }) => {
    return (
        <div>
            {/* todos配列を1つずつ取り出して、TodoItemコンポーネントを表示しています。 */}
            {todos.map((todo) => (
                <TodoItem
                    // todoオブジェクトをTodoItemに渡しています。
                    todo={todo}
                    // 各TodoItemにユニークなキーを設定しています。
                    key={todo.id}
                    // チェックボックスが変更されたときにonCheck関数を呼び出します。
                    onCheck={() => onCheck(todo.id)}
                    // 削除ボタンが押されたときにonDelete関数を呼び出します。
                    onDelete={() => onDelete(todo.id)}
                />
            ))}
        </div>
    );
}

// TodoListコンポーネントをエクスポートしています。
export default TodoList;