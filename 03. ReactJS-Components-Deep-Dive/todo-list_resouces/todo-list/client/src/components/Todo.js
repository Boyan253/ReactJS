export default function Todo({
    id,
    isCompleted,
    text,
    toggleTodoStatus
}) {
    return (<tr className={`todo ${isCompleted ? 'is-completed' : ''}`.trim()}>
        <td>{text}</td>
        <td>{isCompleted ? 'Complete' : 'Not Completed'}</td>
        <td className="todo-action">
            <button className="btn todo-btn" onClick={() => toggleTodoStatus(id)}>Change status</button>
        </td>
    </tr>)
}