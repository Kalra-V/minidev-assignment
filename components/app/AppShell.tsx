import { AppNavbar } from './AppNavbar';
import { AppSidebar } from './AppSidebar';
import { ChatPanel } from './ChatPanel';
import { PreviewPanel } from './PreviewPanel';

export function AppShell() {
  return (
    <div className="flex h-screen flex-col">
      <AppNavbar />
      
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1">
            <ChatPanel />
          </div>
          
          <div className="hidden w-[500px] lg:block">
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

