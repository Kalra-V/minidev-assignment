# Minidev Assignment - Frontend Implementation

A Next.js 14 application featuring a landing page and app builder interface for creating Farcaster miniapps.

Vercel deployment: 
- Landing page - https://minidev-assignment-a5irci0lc-kalra-vs-projects.vercel.app/
- App - https://minidev-assignment-a5irci0lc-kalra-vs-projects.vercel.app/app

## How I approached this assignment
- I went through the entire assignment docs and the figma file
- Using AI, laid the foundation of the assignment to quickly get it up and running
- After that, carefully went through the basic structure of the code and app
- Fixed bugs, and implemented functionalities as expected
- Worked incrementally on the foundation laid by AI

## What could've improved from my end
- Could have spent more time on the assignment but wasn't able to, because of full-time job in a fast-paced startup (I resigned on 4th November, 2025. Currently giving knowledge transfers, after that do not need to serve notice period as it was negotiable)
- Could have improved the UI by learning more about UI-focused development

## Project Overview

This project implements:
- **Landing Page** (`/`) - Marketing page with hero, features, and leaderboard
- **App Builder** (`/app`) - Three-pane interface for building miniapps with AI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Funnel Display (Google Fonts)
- **Tooling**: ESLint, Prettier

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Project Structure

```
/app
  /(landing)
    /page.tsx          # Landing page
  /app
    /page.tsx          # App builder page
    /layout.tsx        # App layout
  /layout.tsx          # Root layout with fonts
  /globals.css         # Global styles + Tailwind

/components
  /landing             # Landing page components
    /Navbar.tsx
    /Hero.tsx
    /PromptBar.tsx
    /IdeaChips.tsx
    /HowItWorks.tsx
    /Leaderboard.tsx
    /Footer.tsx
  /app                 # App builder components
    /AppNavbar.tsx
    /AppSidebar.tsx
    /ChatPanel.tsx
    /ChatMessage.tsx
    /ChatInput.tsx
    /PreviewPanel.tsx
    /PreviewToolbar.tsx
    /AppShell.tsx
  /ui                  # Shared UI primitives
    /Button.tsx
    /Input.tsx
    /Card.tsx
    /Badge.tsx
    /Tabs.tsx

/lib
  /utils.ts            # Utility functions (cn helper)
  /constants.ts        # App constants and copy text
```

## Design System

The project follows the Figma design system with:

### Colors
- **Primary (Orange)**: `##FF9500` with full shade scale
- **Secondary (Purple)**: `#8B5CF6` with full shade scale
- **Neutral**: Grayscale from 50-950

### Spacing Scale
- 0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 80px

### Border Radius
- sm (4px), md (12px), lg (16px), xl (20px), 2xl (24px), etc.

### Typography
- Font Family: Funnel Display
- Weights: 400, 500, 600, 700, 800

## Features Implemented

### Landing Page
- ✅ Navbar with branding and CTAs
- ✅ Hero section with title, subtitle, and prompt input
- ✅ Idea chips that populate the prompt input
- ✅ "How it Works" section with 3 steps
- ✅ Leaderboard with tabs (Today, This Week, All-time)
- ✅ Footer with tagline and social links
- ✅ Fully responsive design

### App Builder
- ✅ Top navbar with account info and publish status
- ✅ Collapsible sidebar with project list
- ✅ Chat panel with message history
- ✅ Multiline chat input (Shift+Enter for new line)
- ✅ Preview panel with iPhone frame
- ✅ Preview toolbar with actions (Code, Screenshot, Refresh, Publish)
- ✅ Three-pane responsive layout
- ✅ Keyboard navigation support

## Authentication & Build Flow

Currently stubbed with placeholder data:
- Login flow redirects to app with `?idea=` parameter
- Chat simulates AI responses with loading states
- Preview shows placeholder iPhone frame
- Projects list uses mock data


### Environment Variables

None required for the initial setup (all UI-focused).

## Notes & Deviations

1. **Font**: Used Funnel Display from Google Fonts as Funnel Sans was not available
2. **Authentication**: Stubbed - not implemented as assignment is UI-focused
3. **Backend**: No backend integration - all data is mocked
4. **Build Flow**: Simulated with timeouts and mock responses
5. **Preview Rendering**: Shows placeholder - actual miniapp rendering not implemented


