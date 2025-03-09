import TodoItem from "./TodoItem";

const TodoList = (pros) => {
    return (
        <div>
            <TodoItem todo={pros.todos[0]}/>
            <TodoItem todo={pros.todos[1]}/>
            <TodoItem todo={pros.todos[2]}/>
        </div>
    );
}

export default TodoList;