
function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Design dashboard UI",
      status: "Completed",
      priority: "High",
    },
    {
      id: 2,
      title: "Build REST API",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 3,
      title: "Connect MongoDB database",
      status: "To Do",
      priority: "Medium",
    },
  ];

  return (
    <div className="task-list">
      <h2>My Tasks</h2>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <span className={`status-badge ${task.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {task.status}
                </span>
                
                </td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
