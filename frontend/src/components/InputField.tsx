import React, { useRef }  from "react";
import "./styles.css";

interface props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  deadline: number;
  setDeadline: React.Dispatch<React.SetStateAction<number>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<props> = ({ task, setTask, handleAdd, deadline, setDeadline }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input"
     onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <div className="input__task">
        <div>
          <input
            type="text"
            ref={inputRef}
            value={task}
            placeholder="What needs to be done?"
            required={true}
            minLength={10}
            onChange={(e) => setTask(e.target.value)}
            className="input__task_textbox"
          />
        </div>

        <div className="input__deadline_button">
          <input
            type="number"
            placeholder="Enter a deadline (in Minutes)?"
            onChange={(e) => setDeadline(Number(e.target.value))}
            ref={inputRef}
            value={deadline}
            min={0}
            className="input__deadline" />
            <button type="submit" className="input__submit_button">Add</button>
        
        </div>
        
        
      </div>
  </form>
  )
};

