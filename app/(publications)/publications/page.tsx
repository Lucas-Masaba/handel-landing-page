import type { Metadata } from 'next';

import { findLatestPosts } from '~/utils/posts';
import PublicationsList from './PublicationsList';

export const metadata: Metadata = {
  title: 'Publications',
};

export default async function Publications() {
  const posts = await findLatestPosts();

  return (
    <section className="max-w-3xl px-6 py-12 mx-auto sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-8 text-4xl font-bold tracking-tighter leading-tighter font-heading md:mb-16 md:text-5xl">
          Publications
        </h1>
      </header>
      <PublicationsList posts={posts} />
    </section>
  );
}
