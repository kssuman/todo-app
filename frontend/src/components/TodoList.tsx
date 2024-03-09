import React from "react";
import "./styles.css";
import { Task } from "../models";
import { TodoItem } from "./TodoItem";

interface props {
  todoList: Task[];
  setTodoList: React.Dispatch<React.SetStateAction<Array<Task>>>;
}

export const TodoList: React.FC<props> = ({ todoList, setTodoList }) => {

  return (
    <div className="todoList">
      {
        todoList?.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))
      }
    </div>
  )
    

}

