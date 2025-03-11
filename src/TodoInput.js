import { useState } from "react"

const TodoInput = ({onAdd}) => {
    const [task, setTask] = useState('');
    const eventChange = (e) => {setTask(e.target.value); }

    const eventSubmit = (e) => {
        e.preventDefault();
        if (task === '') return;
        onAdd(task);
        setTask('');
    }
    const formStyle = {
        display: 'flex',
    }
    const inputStyle = {
        backgroundColor: 'darkgrey', border: 'none',
        outline: 'none', formSize: 16, color: 'white',
        lineHeight: 2, flex: 1
    }
    const btnStyle = {
        backgroundColor: 'dingrey', border: 'none',
        color: 'white', formSize: 16, corsor: 'pointer',
        paddingLeft: 15, paddingRight: 15
    }
    return(
        <form style={formStyle} onSubmit={eventSubmit}>
            <input type="text" placeholder="タスクをいれろ"
            style={inputStyle} onChange={eventChange} value={task}></input>
            <button type="submit" style={btnStyle}>追加</button>
        </form>
    );
}

export default TodoInput;