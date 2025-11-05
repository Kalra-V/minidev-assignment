import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Leaderboard } from '@/components/landing/Leaderboard';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}

