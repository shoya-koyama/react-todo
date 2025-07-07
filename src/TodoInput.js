// useStateフックをインポートしています。
import { useState } from "react"

// TodoInputコンポーネントを定義しています。propsとしてonAddを受け取ります。
const TodoInput = ({ onAdd }) => {
    // タスクの入力値を管理するためのstateを定義しています。
    const [task, setTask] = useState('');
    // 入力値が変更されたときに呼び出される関数です。
    const eventChange = (e) => { setTask(e.target.value); }

    // フォームが送信されたときに呼び出される関数です。
    const eventSubmit = (e) => {
        // ページがリロードされないようにします。
        e.preventDefault();
        // 入力値が空の場合は何もしません。
        if (task === '') return;
        // 入力値をonAdd関数に渡して新しいタスクを追加します。
        onAdd(task);
        // 入力欄を空にします。
        setTask('');
    }
    // フォームのスタイルを設定しています。
    const formStyle = {
        display: 'flex',
    }
    // 入力欄のスタイルを設定しています。
    const inputStyle = {
        backgroundColor: 'darkgrey', border: 'none',
        outline: 'none', formSize: 16, color: 'white',
        lineHeight: 2, flex: 1
    }
    // ボタンのスタイルを設定しています。
    const btnStyle = {
        backgroundColor: 'dingrey', border: 'none',
        color: 'white', formSize: 16, corsor: 'pointer',
        paddingLeft: 15, paddingRight: 15
    }
    return (
        // フォームを表示しています。送信時にeventSubmit関数を呼び出します。
        <form style={formStyle} onSubmit={eventSubmit}>
            {/* 入力欄を表示しています。値が変更されたときにeventChange関数を呼び出します。 */}
            <input type="text" placeholder="タスクをいれろ"
                style={inputStyle} onChange={eventChange} value={task}></input>
            {/* 追加ボタンを表示しています。 */}
            <button type="submit" style={btnStyle}>追加</button>
        </form>
    );
}

// TodoInputコンポーネントをエクスポートしています。
export default TodoInput;