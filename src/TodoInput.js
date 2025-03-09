const TodoInput = () => {
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
        <form>
            <input placeholder="タスクをいれろ"></input>
            <button type="submit">追加</button>
        </form>
    );
}

export default TodoInput;