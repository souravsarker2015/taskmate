export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(todo => todo.id !== id)
        setTaskList(updatedTaskList)
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id)
        setTask(selectedTask)

    }

    return (
        <section className={'showTask'}>
            <div className="head">
                <span>
                    <span className={'title'}>ToDo</span>
                    <span className={'count'}>{taskList.length}</span>
                </span>
                <span className={'clearAll'} onClick={() => setTaskList([])}>Clear All</span>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className={'name'}>{task.name}</span>
                            <span className={'time'}>{task.time}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}


            </ul>
        </section>
    );
};