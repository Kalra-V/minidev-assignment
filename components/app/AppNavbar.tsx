'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AppState } from './AppShell';

export function AppNavbar({ appState }: { appState: AppState }) {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-900">@alice</span>
          <span className="text-xs text-neutral-500">0x1234...5678</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Top Up
        </Button>
        <Badge variant={appState === AppState.DRAFT ? 'warning' : 'success'}>{appState === AppState.DRAFT ? 'Draft' : 'Published'}</Badge>
      </div>
    </nav>
  );
}

