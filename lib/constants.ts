// Landing Page Copy
export const LANDING_COPY = {
  hero: {
    title: 'Build viral miniapps on Farcaster',
    subtitle: 'Create miniapps with a single prompt—no coding required.',
    promptPlaceholder: 'Create a launchpad for music artist tokens',
  },
  ideaChips: ['Launchpad', 'Betting Game', 'Quiz'],
  howItWorks: [
    {
      step: 1,
      title: 'Type an Idea',
      description: 'Describe your idea in natural language.',
    },
    {
      step: 2,
      title: 'We Generate Everything',
      description:
        'Smart contracts, UI, and miniapp are auto-generated. Iterate with AI.',
    },
    {
      step: 3,
      title: 'Launch & Earn',
      description: 'Go live with a token and start earning $MINI.',
    },
  ],
  leaderboard: {
    title: 'Earn $MINI for the apps you launch',
    subtitle: 'Top miniapp creators get weekly $MINI rewards.',
  },
  footer: {
    tagline: 'Built on Base. Powered by Farcaster.',
    links: {
      twitter: 'https://x.com/minidevfun',
      farcaster: 'https://farcaster.xyz/minidev',
    },
  },
};

// Mock Leaderboard Data
export const MOCK_LEADERBOARD_DATA = {
  today: [
    {
      rank: 1,
      name: 'Music Token Launchpad',
      creator: '@alice',
      volume24h: '$12.5k',
      miniEarned: '1,250',
      appUrl: 'https://app.minidev.fun/music-launchpad',
    },
    {
      rank: 2,
      name: 'NBA Prediction Game',
      creator: '@bobsmith',
      volume24h: '$8.2k',
      miniEarned: '820',
      appUrl: 'https://app.minidev.fun/nba-game',
    },
    {
      rank: 3,
      name: 'Crypto Quiz Challenge',
      creator: '@carol',
      volume24h: '$5.7k',
      miniEarned: '570',
      appUrl: 'https://app.minidev.fun/crypto-quiz',
    },
  ],
  thisWeek: [
    {
      rank: 1,
      name: 'Music Token Launchpad',
      creator: '@alice',
      volume24h: '$45.2k',
      miniEarned: '4,520',
      appUrl: 'https://app.minidev.fun/music-launchpad',
    },
    {
      rank: 2,
      name: 'NBA Prediction Game',
      creator: '@bobsmith',
      volume24h: '$32.1k',
      miniEarned: '3,210',
      appUrl: 'https://app.minidev.fun/nba-game',
    },
    {
      rank: 3,
      name: 'Meme Token Creator',
      creator: '@dave',
      volume24h: '$28.9k',
      miniEarned: '2,890',
      appUrl: 'https://app.minidev.fun/meme-token',
    },
  ],
  allTime: [
    {
      rank: 1,
      name: 'Music Token Launchpad',
      creator: '@alice',
      volume24h: '$250k',
      miniEarned: '25,000',
      appUrl: 'https://app.minidev.fun/music-launchpad',
    },
    {
      rank: 2,
      name: 'Meme Token Creator',
      creator: '@dave',
      volume24h: '$180k',
      miniEarned: '18,000',
      appUrl: 'https://app.minidev.fun/meme-token',
    },
    {
      rank: 3,
      name: 'NBA Prediction Game',
      creator: '@bobsmith',
      volume24h: '$145k',
      miniEarned: '14,500',
      appUrl: 'https://app.minidev.fun/nba-game',
    },
  ],
};

