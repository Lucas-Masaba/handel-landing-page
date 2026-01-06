import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft, IconSphere } from '@tabler/icons-react';
import { projects } from '~/shared/data/projects.data';
import ProjectGallery from './ProjectGallery';

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return notFound();
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

interface ProjectDetailsProps {
  params: { slug: string };
}

export default function ProjectDetail({ params }: ProjectDetailsProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <section className="px-3 py-8 mx-auto sm:py-16 lg:py-20 sm:px-4">
      {/* Back Button */}
      <div className="max-w-6xl px-0 mx-auto mb-8 sm:px-2">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-200)] hover:text-[var(--brand-accent-500)] active:text-[var(--brand-accent-500)] dark:hover:text-[var(--brand-accent-500)] dark:active:text-[var(--brand-accent-500)] hover:gap-3 transition-all duration-300 font-semibold"
        >
          <IconArrowLeft size={20} />
          Back To Projects
        </Link>
      </div>

      <article className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="px-0 mb-12 sm:px-2">
          <div className="mb-6">
            {'client' in project && project.client && (
              <p className="text-sm font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-200)] mb-2">
                {project.client}
              </p>
            )}
            {'clients' in project && project.clients && (
              <p className="text-sm font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-200)] mb-2">
                {project.clients}
              </p>
            )}
            {'coverage' in project && project.coverage && (
              <p className="mb-2 text-sm text-muted dark:text-slate-400">
                Coverage: {project.coverage}
              </p>
            )}
          </div>
          <h1 className="mb-6 text-3xl text-[var(--brand-primary-600)] font-bold tracking-tighter md:text-4xl leading-tighter font-heading">
            {project.title}
          </h1>
          {'role' in project && project.role && (
            <p className="mb-2 text-lg text-muted dark:text-slate-400">
              <span className="font-semibold">Role:</span> {project.role}
            </p>
          )}
          {'focus' in project && project.focus && (
            <p className="text-lg text-muted dark:text-slate-400">
              <span className="font-semibold">Focus:</span> {project.focus}
            </p>
          )}
        </header>

        {/* Gallery (replacing single featured image) */}
        {project.galleryImages && project.galleryImages.length > 0 ? (
          <div className="px-0 mb-12 sm:px-2">
            <ProjectGallery images={project.galleryImages} title={project.title} />
          </div>
        ) : (
          project.image && (
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 px-4 sm:px-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 56vw"
                priority
              />
            </div>
          )
        )}

        {/* Content */}
        <div className="px-0 sm:px-2">
          {/* Summary */}
          <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
            {project.summary && (
              <p className="text-lg font-semibold leading-relaxed text-justify text-gray-700 md:text-xl dark:text-slate-300">
                {project.summary}
              </p>
            )}
          </div>

          {/* Scope of Work / Key Deliverables / Key Areas */}
          {'scopeOfWork' in project && project.scopeOfWork && (
            <div className="mb-12">
              <h2 className="mb-5 text-xl font-bold tracking-tighter md:text-2xl font-heading">
                Scope of Work
              </h2>
              <ul className="space-y-4">
                {project.scopeOfWork.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent-500)] dark:bg-[var(--brand-accent-500)] flex items-center justify-center">
                      <IconSphere size={12} className="text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-600)]" />
                    </span>
                    <span className="text-base text-justify text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {'keyDeliverables' in project && project.keyDeliverables && (
            <div className="mb-12">
              <h2 className="mb-5 text-xl font-bold tracking-tighter md:text-2xl font-heading">
                Key Deliverables
              </h2>
              <ul className="space-y-4">
                {project.keyDeliverables.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent-500)] dark:bg-[var(--brand-accent-500)] flex items-center justify-center">
                      <IconSphere size={12} className="text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-600)]" />
                    </span>
                    <span className="text-base text-justify text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {'keyAreasOfEngagement' in project && project.keyAreasOfEngagement && (
            <div className="mb-12">
              <h2 className="mb-5 text-xl font-bold tracking-tighter md:text-2xl font-heading">
                Key Areas of Engagement
              </h2>
              <ul className="space-y-4">
                {project.keyAreasOfEngagement.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent-500)] dark:bg-[var(--brand-accent-500)] flex items-center justify-center">
                      <IconSphere size={12} className="text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-600)]" />
                    </span>
                    <span className="text-base text-justify text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {'areasOfAdvisory' in project && project.areasOfAdvisory && (
            <div className="mb-12">
              <h2 className="mb-5 text-xl font-bold tracking-tighter md:text-2xl font-heading">
                Areas of Advisory
              </h2>
              <ul className="space-y-4">
                {project.areasOfAdvisory.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent-500)] dark:bg-[var(--brand-accent-500)] flex items-center justify-center">
                      <IconSphere size={12} className="text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-600)]" />
                    </span>
                    <span className="text-base text-justify text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {'activities' in project && project.activities && (
            <div className="mb-12">
              <h2 className="mb-5 text-xl font-bold tracking-tighter md:text-2xl font-heading">
                Activities
              </h2>
              <ul className="space-y-4">
                {project.activities.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent-500)] dark:bg-[var(--brand-accent-500)] flex items-center justify-center">
                      <IconSphere size={12} className="text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-600)]" />
                    </span>
                    <span className="text-base text-justify text-gray-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact Section */}
          {'impact' in project && project.impact && (
            <div className="mb-12 p-6 rounded-lg border border-[var(--brand-primary-600)] dark:border-[var(--brand-primary-200)] border-l-4 border-l-[var(--brand-accent-500)] dark:border-l-white bg-[var(--brand-primary-600)] text-white dark:bg-[var(--brand-primary-900)]">
              <h3 className="mb-3 text-lg font-bold tracking-tighter text-white font-heading dark:text-white">
                Impact
              </h3>
              <p className="text-base text-justify text-white dark:text-slate-200">
                {project.impact}
              </p>
            </div>
          )}

          {/* Sub-Projects Section for EU engagement */}
          {'subProjects' in project && project.subProjects && (
            <div className="mb-12">
              <h2 className="text-xl font-bold tracking-tighter md:text-2xl font-heading mb-7">
                Key Engagements
              </h2>
              <div className="space-y-8">
                {project.subProjects.map((subProject: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-8 bg-white dark:bg-[var(--brand-primary-700)] rounded-lg border border-[var(--brand-primary-100)] dark:border-[var(--brand-primary-600)] shadow-md"
                  >
                    <div className="mb-4">
                      <h3 className="mb-2 text-lg font-bold tracking-tighter md:text-xl font-heading">
                        {subProject.title}
                      </h3>
                      <p className="text-sm text-muted dark:text-slate-400">
                        <span className="font-semibold">{subProject.location}</span> • {subProject.year}
                      </p>
                    </div>

                    <p className="mb-6 text-base text-justify text-gray-700 dark:text-slate-300">
                      {subProject.content}
                    </p>

                    {subProject.context && (
                      <p className="mb-6 text-base italic text-justify text-gray-700 dark:text-slate-300">
                        {subProject.context}
                      </p>
                    )}

                    {subProject.focus && (
                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                          Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {subProject.focus.map((item: string, i: number) => (
                            <li key={i} className="flex gap-3 text-base text-gray-700 dark:text-slate-300">
                              <span className="flex-shrink-0 text-[var(--brand-accent-500)] dark:text-[var(--brand-primary-200)] font-bold">
                                ›
                              </span>
                              <span className="text-justify">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subProject.keyAreasOfFocus && (
                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                          Key Areas of Focus:
                        </h4>
                        <ul className="space-y-2">
                          {subProject.keyAreasOfFocus.map((item: string, i: number) => (
                            <li key={i} className="flex gap-3 text-base text-gray-700 dark:text-slate-300">
                              <span className="flex-shrink-0 text-[var(--brand-accent-500)] dark:text-[var(--brand-primary-200)] font-bold">
                                ›
                              </span>
                              <span className="text-justify">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subProject.insight && (
                      <div className="p-4 bg-[var(--brand-primary-50)] dark:bg-[var(--brand-primary-800)] rounded border-l-4 border-[var(--brand-primary-600)] dark:border-[var(--brand-primary-200)]">
                        <p className="text-base text-justify text-gray-700 dark:text-slate-300">
                          <span className="font-semibold">Key Insights:</span> {subProject.insight}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery removed here since it now appears in the featured area */}
        </div>
      </article>

      {/* Back to Projects Link */}
      <div className="max-w-6xl mx-auto px-0 sm:px-2 mt-16 pt-8 border-t border-[var(--brand-primary-100)] dark:border-[var(--brand-primary-700)]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-200)] hover:text-[var(--brand-accent-500)] active:text-[var(--brand-accent-500)] dark:hover:text-[var(--brand-accent-500)] dark:active:text-[var(--brand-accent-500)] hover:gap-3 transition-all duration-300 font-semibold"
        >
          <IconArrowLeft size={20} />
          Back To Projects
        </Link>
      </div>
    </section>
  );
}
