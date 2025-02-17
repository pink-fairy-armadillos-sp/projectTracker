import React from 'react';
import { Link } from 'react-router-dom';

const NewWorkspace = () => {
  const clearWorkspace = () => {
    localStorage.clear();

    if (window.location.href.includes('dashboard')) {
      window.location.reload(false);
    }
  }

  return (
    <Link to="/dashboard">
      <button
        className="py-2 px-4 bg-red-400 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none"
        onClick={clearWorkspace}
      >
        New Workspace
      </button>
    </Link>
  );
}

export default NewWorkspace;
