import { useDispatch } from "react-redux";
import { deleteTask } from "../store/TasksSlice";
import { checkedTaskComplete } from "../store/TasksSlice";



const TodoTask = ({ id, completed, text}) => {
    const dispatch = useDispatch()

    return (
        <div className="TasksList-Task" key={id}>
            <input type='checkbox' defaultChecked={completed} onClick={() => dispatch(checkedTaskComplete({id}))} ></input>
            <span>{text}</span>
            <button onClick={() => dispatch(deleteTask({id})) }>&times;</button>
        </div>
    )
}
export default TodoTask;