import React, { useState } from 'react';
import { Header } from './shared/component/Header';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]); // Assuming tasks are strings for simplicity

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    console.log('Task added:', task); // Handle the task addition as needed
  };

  return (
    <div>
      <Header addTask={addTask} />
    </div>
  );
};

export default App;
