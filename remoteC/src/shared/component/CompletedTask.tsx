import React from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import 'tailwindcss/tailwind.css';

interface Task {
  text: string;
  position: number;
}

interface CompletedTasksProps {
  completedTasks: Task[];
  undoCompleteTask: (index: number) => void;
}

export const CompletedTasks: React.FC<CompletedTasksProps> = ({ completedTasks, undoCompleteTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Completed Tasks</h2>
      <ul className="bg-white shadow-md rounded-md p-4 w-[400px]">
        {completedTasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between border-b py-2 line-through">
            <span>{task.text}</span>
            <button onClick={() => undoCompleteTask(index)} className="text-blue-500 hover:text-blue-700">
              <RiArrowGoBackLine />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
