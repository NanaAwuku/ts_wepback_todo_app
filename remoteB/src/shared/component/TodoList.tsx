import React from 'react';
import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';
import 'tailwindcss/tailwind.css';

interface Task {
  text: string;
  position: number;
}

interface TodoListProps {
  tasks: Task[];
  completeTask: (index: number) => void;
  removeTask: (index: number) => void;
}

export function TodoList({ tasks, completeTask, removeTask }: TodoListProps) {
  return (
    <ul className="bg-white rounded-md p-4 w-[400px]">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center justify-between border-b py-2">
          <span className="text-lg">{task.text}</span>
          <div className="flex gap-2">
            <button onClick={() => completeTask(index)} className="text-green-500 hover:text-green-700">
              <RiCheckboxCircleLine />
            </button>
            <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">
              <RiCloseCircleLine />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
