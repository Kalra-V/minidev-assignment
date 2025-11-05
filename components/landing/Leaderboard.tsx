'use client';

import { useState } from 'react';
import { LANDING_COPY, MOCK_LEADERBOARD_DATA } from '@/lib/constants';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';

type LeaderboardPeriod = 'today' | 'thisWeek' | 'allTime';

export function Leaderboard() {
  const [period, setPeriod] = useState<LeaderboardPeriod>('today');

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">
            {LANDING_COPY.leaderboard.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {LANDING_COPY.leaderboard.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <Tabs
            value={period}
            onValueChange={(v) => setPeriod(v as LeaderboardPeriod)}
            className="w-full"
          >
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="thisWeek">This Week</TabsTrigger>
                <TabsTrigger value="allTime">All-time</TabsTrigger>
              </TabsList>
            </div>

            {(['today', 'thisWeek', 'allTime'] as const).map((p) => (
              <TabsContent key={p} value={p}>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-neutral-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          Rank
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          Miniapp
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          Creator
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          24h Volume
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          MINI Earned
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {MOCK_LEADERBOARD_DATA[p].map((entry) => (
                        <tr
                          key={entry.rank}
                          className="hover:bg-neutral-50"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-neutral-900">
                            {entry.rank}
                          </td>
                          <td className="px-4 py-4 text-sm text-neutral-900">
                            {entry.name}
                          </td>
                          <td className="px-4 py-4 text-sm text-neutral-600">
                            {entry.creator}
                          </td>
                          <td className="px-4 py-4 text-sm text-neutral-900">
                            {entry.volume24h}
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-primary">
                            {entry.miniEarned}
                          </td>
                          <td className="px-4 py-4 text-sm">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(entry.appUrl, '_blank')}
                            >
                              Try
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

