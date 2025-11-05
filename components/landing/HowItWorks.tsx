import { LANDING_COPY } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-neutral-900">
          How it works
        </h2>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {LANDING_COPY.howItWorks.map((step) => (
            <Card key={step.step}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl font-bold text-white">
                  {step.step}
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription className="mt-2">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

