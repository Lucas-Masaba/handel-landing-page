import type { Metadata } from 'next';
import ProjectsList from './ProjectsList';
import { projects } from '~/shared/data/projects.data';

export const metadata: Metadata = {
  title: 'Projects & Case Studies - Trade Law & Policy Advisory',
  description: 'Explore our featured projects and case studies in international trade law, EAC/COMESA trade policy development, capacity building, cross-border advisory, and regional trade integration across East Africa.',
  keywords: ['trade law projects', 'EAC trade policy', 'COMESA projects', 'international trade case studies', 'trade policy development', 'capacity building Uganda', 'cross-border advisory'],
  openGraph: {
    title: 'Projects & Case Studies - Handel Advocates',
    description: 'Demonstrating expertise in international trade, policy development, and cross-border advisory services across East Africa.',
    url: '/projects',
  },
};

export default function Projects() {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:py-20">
      <header className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl text-[var(--brand-primary-600)] font-bold tracking-tighter leading-tighter font-heading md:text-4xl">
          Projects & Case Studies
        </h1>
        <p className="max-w-3xl text-lg text-justify text-muted dark:text-slate-400">
          Explore our selected projects demonstrating expertise in international trade, policy development, capacity building, and cross-border advisory services.
        </p>
      </header>
      <ProjectsList projects={projects} />
    </section>
  );
}
