const TodoItem = ({ todo, onDelete, onCheck }) => {
    const { text, isFinished } = todo;

    const taskStyle = {
        textDecoration: isFinished ? 'line-through' : 'none'
    };

    return (
        <div>
            <input type="checkbox" checked={isFinished} onChange={onCheck} />
            <div style={taskStyle}>{text}</div>
            <button onClick={onDelete}>削除</button>
        </div>
    );
}

export default TodoItem;