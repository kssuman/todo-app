import React, { useEffect, useState} from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Task } from "./models";
import { TodoList } from './components/TodoList';
import { GetTasksApi, AddTaskApi } from "./Api";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Array<Task>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    let date = Date.now();
    let todo: Task = { id: date, task, deadline: new Date(new Date().setTime(date + deadline * (60 * 1000))), isCompleted: false };

    if (task) {
      setTodoList([...todoList, todo]);
      AddTaskApi(todo);
      setTask("");
      setDeadline(0);
    }
  };

  useEffect(()=>{
    GetTasksApi().then(result => {
      if (todoList.length === 0) setTodoList(result);
  })
  }, [todoList.length])

  return (
    <div className="App">
      <span className='heading'>todos</span>
      <InputField task={task} setTask={setTask} deadline={deadline} setDeadline={setDeadline} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
