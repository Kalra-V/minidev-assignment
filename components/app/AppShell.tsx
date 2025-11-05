'use client';
import { useState } from 'react';
import { AppNavbar } from './AppNavbar';
import { AppSidebar } from './AppSidebar';
import { ChatPanel } from './ChatPanel';
import { PreviewPanel } from './PreviewPanel';

export enum AppState {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export function AppShell() {
  const [appState, setAppState] = useState(AppState.DRAFT);
  return (
    <div className="flex h-screen flex-col">
      <AppNavbar appState={appState} />
      
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1">
            <ChatPanel />
          </div>
          
          <div className="hidden w-[500px] lg:block">
            <PreviewPanel setAppState={setAppState} />
          </div>
        </div>
      </div>
    </div>
  );
}

