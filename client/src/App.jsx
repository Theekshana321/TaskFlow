
import './App.css';
import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';
import { useState } from 'react';
import TaskForm from './components/TaskForm';


function App() {

  const [showTaskForm, setShowTaskForm] = useState(false);
  return (
    
    <div className='app'>
      <Sidebar/>

      <main className='main-content'>
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your TaskFlow dashboard!</p>
          </div>

          <button 
          className="create-task-btn"
          onClick={() => setShowTaskForm(true)}
          >
            
            + Create Task
          </button>
        </div>

                
                {showTaskForm && (
          <TaskForm
            onCancel={() => setShowTaskForm(false)}
          />
        )}


        

        <div className='task-cards'>
           <TaskCard
            title="Total Tasks"
            count={12}
            color="#2563eb"
          />

          <TaskCard
            title="In Progress"
            count={5}
            color="#d97706"
          />

          <TaskCard
            title="Completed"
            count={7}
            color="#16a34a"
          />
        </div>
        <TaskList/>
      </main>

    </div>
  );
}

export default App;
