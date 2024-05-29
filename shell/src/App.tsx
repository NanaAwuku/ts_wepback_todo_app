import React, { useState, useEffect } from 'react';
import { Header } from "RemoteApp1/RemoteA";
import { TodoList } from "RemoteApp2/RemoteB";
import { CompletedTasks } from "RemoteApp3/RemoteC";

interface Task {
  text: string;
  position: number;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const storedCompletedTasks = localStorage.getItem('completedTasks');
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedCompletedTasks) setCompletedTasks(JSON.parse(storedCompletedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const addTask = (task: string) => {
    const newTask: Task = { text: task, position: tasks.length };
    setTasks([...tasks, newTask]);
    console.log('Task added:', task);
  };

  const completeTask = (index: number) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    console.log('Task completed:', completedTask.text);

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const undoCompleteTask = (index: number) => {
    const taskToUndo = completedTasks[index];
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);

    const updatedTasks = [...tasks];
    updatedTasks.splice(taskToUndo.position, 0, taskToUndo);
    setTasks(updatedTasks);
    console.log('Task undone:', taskToUndo.text);
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    console.log('Task removed:', tasks[index].text);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header addTask={addTask} />
      <TodoList tasks={tasks} completeTask={completeTask} removeTask={removeTask} />
      {completedTasks.length > 0 && (
        <CompletedTasks completedTasks={completedTasks} undoCompleteTask={undoCompleteTask} />
      )}
    </div>
  );
}
