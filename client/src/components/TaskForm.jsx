
function TaskForm({ onCancel }) {
  return (
    <div className="task-form">
      <h2>Create New Task</h2>

      <form>
        <div>
          <label htmlFor="task-title">Task Title</label>
          <input
            id="task-title"
            type="text"
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            placeholder="Enter task description"
            rows="3"
          />
        </div>

        <div>
          <label htmlFor="task-priority">Priority</label>
          <select id="task-priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="task-status">Status</label>
          <select id="task-status">
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>

          <button type="submit">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
