'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-[var(--brand-accent-500)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-500)] rounded"
    >
      ← Back to team
    </button>
  );
}
