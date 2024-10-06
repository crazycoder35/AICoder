import React, { useState } from 'react';
import { useProject } from '../contexts/ProjectContext';
import { Project } from '../types';
import { PlusCircle } from 'lucide-react';

const ProjectCreation: React.FC = () => {
  const { setProject } = useProject();
  const [projectName, setProjectName] = useState('');
  const [projectPath, setProjectPath] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: Date.now().toString(),
      name: projectName,
      path: projectPath,
      tasks: []
    };
    setProject(newProject);
    setProjectName('');
    setProjectPath('');
  };

  return (
    <div className="bg-white shadow sm:rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Create New Project</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Enter the details for your new AI coding project.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs mr-3">
            <label htmlFor="projectName" className="sr-only">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="w-full sm:max-w-xs mr-3 mt-3 sm:mt-0">
            <label htmlFor="projectPath" className="sr-only">
              Project Path
            </label>
            <input
              type="text"
              name="projectPath"
              id="projectPath"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Project Path"
              value={projectPath}
              onChange={(e) => setProjectPath(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreation;