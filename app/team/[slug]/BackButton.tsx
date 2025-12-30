'use client';

import { useRouter } from 'next/navigation';
import { IconChevronLeft } from '@tabler/icons-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Go back to team"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm transition hover:bg-white hover:shadow md:px-5 md:py-2.5 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600"
    >
      <IconChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      <span className="text-sm md:text-base font-medium">Back to team</span>
    </button>
  );
}
