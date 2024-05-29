import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import 'tailwindcss/tailwind.css';

interface RemoteAProps {
  addTask: (text: string) => void;
}

export function Header({ addTask }: RemoteAProps) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={taskText}
        placeholder="Add a new Task"
        onChange={(e) => setTaskText(e.target.value)}
        className="border p-2 mr-2 w-[300px] rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-900 text-white p-2 rounded-lg"
      >
        <MdAddCircle />
      </button>
    </div>
  );
}
