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

  return (
    <aside
      className={cn(
        'flex flex-col overflow-hidden border-r border-neutral-200 bg-white transition-[width] duration-300 ease-in-out',
        isCollapsed ? 'w-12' : 'w-64'
      )}
    >
      <div
        className={cn(
          'flex h-16 items-center border-b border-neutral-200 px-4 transition-all duration-200 ease-in-out',
          isCollapsed ? 'justify-center' : 'justify-between'
        )}
      >
        {isCollapsed ? (
          <button
            onClick={() => setIsCollapsed(false)}
            className="rounded p-3 hover:bg-neutral-50"
            aria-label="Expand sidebar"
          >
            ☰
          </button>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-neutral-900">Projects</h2>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-neutral-500 transition-colors hover:text-neutral-900"
              aria-label="Collapse sidebar"
            >
              ←
            </button>
          </>
        )}
      </div>

      <div
        className={cn(
          'flex-1 overflow-y-auto p-2 transition-opacity duration-200 ease-in-out',
          isCollapsed ? 'pointer-events-none opacity-0' : 'opacity-100'
        )}
        aria-hidden={isCollapsed}
      >
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

      <div
        className={cn(
          'border-t border-neutral-200 p-2 transition-opacity duration-200 ease-in-out',
          isCollapsed ? 'pointer-events-none opacity-0' : 'opacity-100'
        )}
        aria-hidden={isCollapsed}
      >
        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100">
          Settings
        </button>
      </div>
    </aside>
  );
}

