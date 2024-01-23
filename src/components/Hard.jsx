import React, { useState } from "react";
import HardCSS from "../css/hard.css";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Hard(props) {
  // const taskList = props.tasks?.map((task) => (
  //     <Todo id={task.id} name={task.name} completed={task.completed} />
  //   ));
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    const updatedTaks = tasks.map((task) => {
      //if thiss task has the same ID as the edited task
      if (id === task.id) {
        //use object spread to make a new object
        //whose 'completed' prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTaks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      //if this task has the same ID as te edited task
      if (id === task.id) {
        // copy the task and update its name
        return { ...task, name: newName };
      }
      //Return the original task if its not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, comleted: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  //   console.log(taskList);

  return (
    <div>
      <h1>Hello from Hard</h1>

      {/* ------- documentation starts here  */}

      <div className="todoapp stack-large">
        <h1>Todo List</h1>

        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </div>
  );
}
