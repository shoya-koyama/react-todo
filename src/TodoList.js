import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        <div>
            {
                todos.map((todo) => <TodoItem todo = {todo}/>)
            }
        </div>
    );
}

export default TodoList;