import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '~/shared/data/projects.data';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project ? project.title : 'Project',
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <section className="max-w-3xl px-6 py-12 mx-auto">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-4">The requested project does not exist.</p>
        <Link href="/projects" className="mt-6 inline-block text-blue-600">Back to projects</Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl px-6 py-12 mx-auto sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-4 text-3xl font-bold tracking-tighter leading-tight">{project.title}</h1>
        <p className="text-sm text-gray-600 dark:text-slate-200">{project.description}</p>
      </header>

      <div className="mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
      </div>

      <div className="mt-6 prose prose-lg dark:prose-invert">
        <p>{project.details}</p>
      </div>

      <div className="mt-8">
        <Link href="/projects" className="text-blue-600">← Back to Projects</Link>
      </div>
    </section>
  );
}
