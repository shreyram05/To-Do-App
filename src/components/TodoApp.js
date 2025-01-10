import React, { useState } from "react";
import "../styles.css"; 
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <h2>Pending Tasks</h2>
      <ul>
        {tasks.filter((task) => !task.completed).map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => completeTask(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.filter((task) => task.completed).map((task) => (
          <li key={task.id}>
            <s>{task.text}</s>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
