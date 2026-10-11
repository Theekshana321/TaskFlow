
import './App.css';
import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';

function App() {
  return (
    
    <div className='app'>
      <Sidebar/>

      <main className='main-content'>
        <h1>Dashboard</h1>
        <p>Welcome to your TaskFlow dashboard!</p>

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
      </main>

    </div>
  );
}

export default App;
