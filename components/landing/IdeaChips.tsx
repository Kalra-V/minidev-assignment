'use client';

import { LANDING_COPY } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';

export function IdeaChips({ setPrompt }: { setPrompt: (prompt: string) => void }) {
  const handleChipClick = (idea: string) => {
    const input = document.querySelector('input[placeholder*="launchpad"]') as HTMLInputElement;
    if (input) {
      setPrompt(`Create a ${idea.toLowerCase()}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-sm text-neutral-500">Popular ideas:</span>
      {LANDING_COPY.ideaChips.map((chip) => (
        <Badge
          key={chip}
          variant="outline"
          className="cursor-pointer hover:bg-neutral-100"
          onClick={() => handleChipClick(chip)}
        >
          {chip}
        </Badge>
      ))}
    </div>
  );
}

