import TodoTask from "./TodoTask";
import {useSelector} from 'react-redux';

const TodoList = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    console.log(...tasks)
    return (
        <div className="TasksList">
            {tasks.map(task =>
                <TodoTask key={task.id} {...task}  />
            )
            }
        </div>
    )
}

export default TodoList;