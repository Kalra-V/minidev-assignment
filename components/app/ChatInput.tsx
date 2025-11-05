'use client';

import { useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/Button';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe what you want to build... (Shift+Enter for new line)"
        rows={3}
        disabled={disabled}
        className="flex-1 resize-none rounded-lg border border-neutral-300 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
        aria-label="Chat message input"
      />
      <Button onClick={handleSend} disabled={disabled || !input.trim()}>
        Send
      </Button>
    </div>
  );
}

