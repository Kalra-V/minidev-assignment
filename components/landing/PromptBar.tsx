'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LANDING_COPY } from '@/lib/constants';

export function PromptBar() {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!prompt.trim()) {
      setError('Tell us your idea to get started.');
      return;
    }
    setError('');
    // Navigate to app with idea parameter
    window.location.href = `https://app.minidev.fun?idea=${encodeURIComponent(prompt)}`;
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="flex-1">
        <Input
          placeholder={LANDING_COPY.hero.promptPlaceholder}
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setError('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          error={error}
          aria-label="Enter your miniapp idea"
        />
      </div>
      <Button size="lg" onClick={handleSubmit}>
        Generate
      </Button>
    </div>
  );
}

