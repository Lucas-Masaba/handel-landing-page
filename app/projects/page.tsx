import type { Metadata } from 'next';

import Link from 'next/link';
import { projects } from '~/shared/data/projects.data';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <section className="max-w-3xl px-6 py-12 mx-auto sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center leading-tighter font-heading md:mb-16 md:text-5xl">
          Projects
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
        {projects.map(({ slug, title, description, image }) => (
          <div key={slug} className="flex flex-col overflow-hidden border border-[var(--brand-primary-50)] dark:border-white dark:text-white dark:bg-[var(--brand-primary-500)] shadow-lg rounded-xl">
            <Link href={`/projects/${slug}`} className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={title} className="object-cover w-full h-40 rounded-t-xl" />
              <div className="p-4">
                <div className="mb-3 text-sm font-medium text-[var(--brand-accent-500)]">Project</div>
                <h2 className="mb-2 text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-slate-200">{description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
