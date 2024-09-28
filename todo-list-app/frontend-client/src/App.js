import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm'; // Importing TaskForm component
import TaskTable from './components/TaskTable'; // Importing TaskTable component
import Modal from './components/Modal'; // Importing Modal component
import './components/App.css'; // Importing global styles

// Set the backend URL, fallback to localhost if not defined
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const App = () => {
  // State variables for managing tasks and selected task for editing
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/tasks`);
        const data = await response.json();
        setTasks(data); // Set tasks from the fetched data
      } catch (error) {
        console.error('Error fetching tasks:', error); // Log errors if any
      }
    };

    fetchTasks(); // Call the fetch function
  }, []); // Empty dependency array to run only on mount

  // Save a new task to the backend
  const saveTask = async (taskData) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/tasks/add-task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(taskData), // Convert task data to JSON
      });

      if (!response.ok) {
        throw new Error('Failed to save task'); // Handle unsuccessful response
      }

      const newTask = await response.json(); // Parse response to JSON
      setTasks((prevTasks) => [...prevTasks, newTask]); // Update task list
    } catch (error) {
      console.error('Error saving task:', error); // Log errors if any
    }
  };

  // Edit an existing task
  const editTask = (task) => {
    setSelectedTask(task); // Set selected task to edit
  };

  // Cancel editing a task
  const handleCancelEdit = () => {
    setSelectedTask(null); // Clear selected task
  };

  return (
    <div className="app">
      <h1>TODO-APPLICATION</h1>
      <TaskForm
        task={selectedTask}
        onSave={saveTask} // Pass saveTask function to TaskForm
        onCancel={handleCancelEdit} // Pass cancel edit function
      />
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.assignedTo} - {task.status} - {task.dueDate}
            <button onClick={() => editTask(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App; // Export the App component
