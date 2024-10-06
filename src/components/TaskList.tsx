import React from 'react';
import { useProject } from '../contexts/ProjectContext';

const TaskList: React.FC = () => {
  const { project, updateTaskStatus } = useProject();

  if (!project) {
    return null;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {project.tasks.map((task) => (
          <li key={task.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-600 truncate">{task.description}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value as any)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Assigned to: {task.assignedTo}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;