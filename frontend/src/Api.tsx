import { Task } from "./models";

const uri = 'https://localhost:7114/api/TodoItems';

export const GetTasksApi = async(): Promise<Task[]> => {
    try {
      const response = await fetch(uri);
      const json = await response.json();
      const data = JSON.stringify(json);
      return JSON.parse(data) as unknown as Task[];
  } catch (error) {
        console.error('Unable to get items.', error);
        return [];
      //throw error;
  }
}

export const AddTaskApi = (task: Task) => {
    fetch(uri, {
        method: 'POST',
        headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(() => {
      GetTasksApi();
    })
    .catch(error => console.error('Unable to add item.', error));
}

export const DeleteTaskApi = (taskId: number) => {
    fetch(`${uri}/${taskId}`, {
        method: 'DELETE'
    })
    .then(() => GetTasksApi())
    .catch(error => console.error('Unable to delete item.', error));
}

export const UpdateTaskApi = (task: Task) => {
    fetch(`${uri}/${task.id}`, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    body: JSON.stringify(task)
  })
  .then(() => GetTasksApi())
  .catch(error => console.error('Unable to update item.', error));
}
