import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
};

const projects = [
  { slug: 'project-alpha', title: 'Project Alpha', description: 'Large-scale infrastructure advisory', image: '/images/project-alpha.jpg' },
  { slug: 'project-beta', title: 'Project Beta', description: 'Cross-border commercial project', image: '/images/project-beta.jpg' },
  { slug: 'project-gamma', title: 'Project Gamma', description: 'Strategic consulting and implementation', image: '/images/project-gamma.jpg' },
];

export default function Projects() {
  return (
    <section className="max-w-3xl px-6 py-12 mx-auto sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center leading-tighter font-heading md:mb-16 md:text-5xl">
          Projects
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
        {projects.map(({ slug, title, description }) => (
          <div key={slug} className="flex flex-col overflow-hidden border border-[var(--brand-primary-50)] dark:border-white dark:text-white dark:bg-[var(--brand-primary-500)] shadow-lg rounded-xl">
            <Link href={`/projects/${slug}`} className="p-4">
              <div className="mb-3 text-sm font-medium text-[var(--brand-accent-500)]">Project</div>
              <h2 className="mb-2 text-lg font-semibold">{title}</h2>
              <p className="text-sm text-gray-600 dark:text-slate-200">{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
