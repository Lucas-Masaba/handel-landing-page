import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { teamAbout } from '~/shared/data/pages/about.data';
import { toSlug } from '~/utils/utils';
import BackButton from './BackButton';

const members = teamAbout.teams;

export function generateStaticParams() {
  return members.map((m) => ({ slug: toSlug(m.name) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const member = members.find((m) => toSlug(m.name) === params.slug);
  if (!member) return { title: 'Team Member' };
  return {
    title: `${member.name} — ${member.occupation}`,
    description: `${member.name} (${member.occupation}) at Handel`,
    alternates: { canonical: `/team/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const member = members.find((m) => toSlug(m.name) === params.slug);
  if (!member) return notFound();

  const { name, occupation, image, items } = member;

  return (
    <main className="py-10 sm:py-14 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6 text-sm">
          <BackButton />
        </div>

        <section className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl ring-1 ring-[var(--brand-primary-200)] dark:ring-[var(--brand-primary-700)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] sm:text-4xl">
              {name}
            </h1>
            <p className="mt-2 text-lg font-medium text-gray-600 dark:text-slate-300">{occupation}</p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              {items?.map(({ title, href, icon: Icon }, idx) => (
                Icon && href ? (
                  <Link
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={String(title)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-[var(--brand-primary-200)] text-[var(--brand-primary-900)] hover:bg-[var(--brand-primary-600)] hover:text-[var(--brand-accent-500)] dark:text-white dark:ring-[var(--brand-primary-400)] dark:hover:bg-white dark:hover:text-[var(--brand-accent-500)]"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ) : null
              ))}
            </div>

            <div className="mt-8 space-y-4 text-base leading-7 text-gray-700 dark:text-slate-300">
              {member.bio && member.bio.length > 0 ? (
                member.bio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
              ) : (
                <p>
                  {name} is a core member of Handel. This profile page will feature a detailed biography, areas of
                  expertise, notable work, and ways to engage. For now, use the social links above or the contact page to
                  reach out.
                </p>
              )}
            </div>

            {/* <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--brand-primary-700)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-primary-800)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-500)]"
              >
                Contact {name.split(' ')[0]}
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md ring-1 ring-[var(--brand-primary-300)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-primary-900)] hover:bg-[var(--brand-primary-100)] dark:text-white dark:ring-[var(--brand-primary-700)] dark:hover:bg-[var(--brand-primary-800)]"
              >
                View Related Projects
              </Link>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}
