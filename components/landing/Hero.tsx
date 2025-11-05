'use client';
import { LANDING_COPY } from '@/lib/constants';
import { PromptBar } from './PromptBar';
import { IdeaChips } from './IdeaChips';
import { useState } from 'react';

export function Hero() {
  const [prompt, setPrompt] = useState('');
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
          {LANDING_COPY.hero.title}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          {LANDING_COPY.hero.subtitle}
        </p>
        
        <div className="mt-10">
          <PromptBar prompt={prompt} setPrompt={setPrompt} />
        </div>
        
        <div className="mt-6">
          <IdeaChips setPrompt={setPrompt} />
        </div>
      </div>
    </section>
  );
}

