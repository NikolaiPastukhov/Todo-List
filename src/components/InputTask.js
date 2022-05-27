

const InputTask = ({text, changeText, addTask}) => {
    return (
    <div className="InputTask">
          <input value={text} placeholder="Введите задачу" onChange={(e) => changeText(e.target.value)}></input>
          <button onClick={addTask}> Добавить задачу </button>
        </div>
)}

export default InputTask;