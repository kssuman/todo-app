import React from "react";
import { Task } from "../models";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";
import { DeleteTaskApi, UpdateTaskApi } from "../Api";

interface props {
    todo: Task;
    todoList: Task[];
    setTodoList: React.Dispatch<React.SetStateAction<Array<Task>>>;
}
  
export const TodoItem: React.FC<props> = ({ todo, todoList, setTodoList }) => {

    const handleComplete = (task: Task) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === task.id ? { ...todo, isCompleted: true } : todo
            )
        );
        UpdateTaskApi({ ...task, isCompleted: true });
    };

    const handleDelete = (id: number) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
        DeleteTaskApi(id);
    };

    let classname: string = ((new Date(Date.now()) > new Date(todo.deadline)) && !todo.isCompleted) ? "todo_item_expired" : "todo_item";
    console.log("Tasks1:", todo);
    return (
        <div>
            <div className={classname}>
                {todo.isCompleted ?
                    <span className="todo_item_done"><ImCheckboxChecked /></span> : 
                    <span className="todo_item_pending" onClick={() => handleComplete(todo)}><ImCheckboxUnchecked /></span>
                }
                {todo.isCompleted ? <s className="todo_item_text"> {todo.task} </s> : <span className="todo_item_text"> {todo.task} </span>}
                <span className="todo_item_delete" onClick={() => handleDelete(todo.id)}><TiDelete /></span>
            </div>
            <div><hr className="hrline"/></div>
        </div>
    
    )
}