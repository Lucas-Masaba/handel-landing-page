import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Publications',
};

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <section className="max-w-3xl px-6 py-12 mx-auto sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center leading-tighter font-heading md:mb-16 md:text-5xl">
          Publications
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
        {posts.map(({ slug, title, image }: { slug: string, title: string, image: string }) => (
          <div key={slug} className="flex flex-col overflow-hidden border border-[var(--brand-primary-50)] dark:border-white dark:text-white dark:bg-[var(--brand-primary-500)] shadow-lg rounded-xl">
            <Link href={`/${slug}`}>
              <Image width={650} height={340} alt={title} src={`${image}`} />
              <h2 className="p-4 font-bold">{title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
