'use client';

import { AppState } from './AppShell';
import { PreviewToolbar } from './PreviewToolbar';

export function PreviewPanel({ setAppState }: { setAppState: (appState: AppState) => void }) {
  return (
    <div className="flex flex-col border-l border-neutral-200 bg-neutral-50">
      <PreviewToolbar setAppState={setAppState} />
      
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="relative h-[600px] w-[375px] overflow-hidden rounded-[3rem] border-8 border-neutral-900 bg-white shadow-2xl">
          <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-neutral-900" />
          
          <div className="flex h-full items-center justify-center p-4 text-center">
            <div>
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Preview
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Your miniapp will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

