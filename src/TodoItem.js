// TodoItemコンポーネントを定義しています。propsとしてtodo, onDelete, onCheckを受け取ります。
const TodoItem = ({ todo, onDelete, onCheck }) => {
    // todoオブジェクトからtextとisFinishedを取り出しています。
    const { text, isFinished } = todo;

    // タスクのスタイルを設定しています。完了した場合は線を引きます。
    const taskStyle = {
        textDecoration: isFinished ? 'line-through' : 'none'
    };

    return (
        <div>
            {/* チェックボックスを表示しています。チェック状態はisFinishedに基づきます。 */}
            <input type="checkbox" checked={isFinished} onChange={onCheck} />
            {/* タスクのテキストを表示しています。スタイルはtaskStyleを使用します。 */}
            <div style={taskStyle}>{text}</div>
            {/* 削除ボタンを表示しています。クリックするとonDelete関数が呼ばれます。 */}
            <button onClick={onDelete}>削除</button>
        </div>
    );
}

// TodoItemコンポーネントをエクスポートしています。
export default TodoItem;