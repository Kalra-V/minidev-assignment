'use client';

import { Button } from '@/components/ui/Button';

export function PreviewToolbar() {
  const handleScreenshot = () => {
    alert('Screenshot feature - to be implemented');
  };

  const handleRefresh = () => {
    alert('Refresh preview - to be implemented');
  };

  const handlePublish = () => {
    alert('Publish modal - to be implemented');
  };

  const handleCodeView = () => {
    alert('Code view - to be implemented');
  };

  return (
    <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={handleCodeView}>
          Code
        </Button>
        <Button variant="ghost" size="sm" onClick={handleScreenshot}>
          Screenshot
        </Button>
        <Button variant="ghost" size="sm" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      
      <Button variant="primary" size="sm" onClick={handlePublish}>
        Publish
      </Button>
    </div>
  );
}

