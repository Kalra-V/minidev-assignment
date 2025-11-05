'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const mockProjects = [
  { id: '1', name: 'Music Launchpad', status: 'published' },
  { id: '2', name: 'NBA Game', status: 'draft' },
  { id: '3', name: 'Crypto Quiz', status: 'draft' },
];

export function AppSidebar() {
  const [activeProject, setActiveProject] = useState('1');
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <div className="flex w-12 flex-col border-r border-neutral-200 bg-white">
        <button
          onClick={() => setIsCollapsed(false)}
          className="p-3 hover:bg-neutral-50"
          aria-label="Expand sidebar"
        >
          ☰
        </button>
      </div>
    );
  }

  return (
    <aside className="flex w-64 flex-col border-r border-neutral-200 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-4">
        <h2 className="text-lg font-semibold text-neutral-900">Projects</h2>
        <button
          onClick={() => setIsCollapsed(true)}
          className="text-neutral-500 hover:text-neutral-900"
          aria-label="Collapse sidebar"
        >
          ←
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {mockProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project.id)}
            className={cn(
              'mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              activeProject === project.id
                ? 'bg-primary-50 text-primary-700'
                : 'text-neutral-700 hover:bg-neutral-100'
            )}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="border-t border-neutral-200 p-2">
        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100">
          Settings
        </button>
      </div>
    </aside>
  );
}

