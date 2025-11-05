import { LANDING_COPY } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-neutral-600">
            {LANDING_COPY.footer.tagline}
          </p>
          
          <div className="flex gap-6">
            <a
              href={LANDING_COPY.footer.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              X (Twitter)
            </a>
            <a
              href={LANDING_COPY.footer.links.farcaster}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              Farcaster
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

