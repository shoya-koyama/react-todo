import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck, onDelete }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCheck={() => onCheck(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                />
            ))}
        </div>
    );
}

export default TodoList;