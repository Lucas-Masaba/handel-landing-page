'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';

interface Project {
  slug: string;
  title: string;
  client?: string;
  clients?: string;
  role?: string;
  image: string;
  summary?: string;
  coverage?: string;
}

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentRefs = cardRefs.current;
    const observers = currentRefs.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(index));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && currentRefs[index]) {
          observer.unobserve(currentRefs[index]!);
        }
      });
    };
  }, [projects]);

  return (
    <div className="grid grid-cols-1 gap-8 p-0">
      {projects.map((project: Project, index: number) => (
        <div
          key={project.slug}
          ref={el => { if (el) cardRefs.current[index] = el; }}
          className={`group overflow-hidden border border-[var(--brand-primary-50)] dark:border-[var(--brand-primary-700)] bg-[var(--brand-primary-600)] dark:bg-[var(--brand-primary-600)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out ${
            visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="flex flex-col h-full md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-gray-100 dark:bg-[var(--brand-primary-900)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between w-full md:w-3/5 p-6 md:p-8 bg-[var(--brand-primary-600)] dark:bg-[var(--brand-primary-600)]">
                <div>
                  <div className="flex flex-col gap-2 mb-3">
                    {project.client && (
                      <p className="text-sm font-semibold text-[var(--brand-primary-100)]">
                        {project.client}
                      </p>
                    )}
                    {project.clients && (
                      <p className="text-sm font-semibold text-[var(--brand-primary-100)]">
                        {project.clients}
                      </p>
                    )}
                    {project.coverage && (
                      <p className="text-sm text-slate-200">
                        Coverage: {project.coverage}
                      </p>
                    )}
                  </div>
                  <h2 className="mb-3 text-xl font-bold tracking-tighter text-white transition-colors duration-300 md:text-2xl font-heading">
                    {project.title}
                  </h2>
                  {project.summary && (
                    <p className="text-base text-justify text-slate-200 line-clamp-3 md:line-clamp-none">
                      {project.summary}
                    </p>
                  )}
                </div>

                {/* Footer with CTA */}
                <div className="flex items-center mt-6 text-white font-semibold group-hover:text-[var(--brand-accent-500)] group-active:text-[var(--brand-accent-500)] dark:group-hover:text-[var(--brand-accent-500)] dark:group-active:text-[var(--brand-accent-500)] group-hover:gap-2 gap-1 transition-all duration-300">
                  <span>View Project</span>
                  <IconArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
