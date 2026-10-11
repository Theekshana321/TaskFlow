
function TaskCard({ title, count, color }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <h2 style={{ color: color }}>{count}</h2>
    </div>
  );
}

export default TaskCard;
