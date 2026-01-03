'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Publication {
  slug: string;
  title: string;
  image: string;
}

interface PublicationsListProps {
  posts: Publication[];
}

export default function PublicationsList({ posts }: PublicationsListProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;

    const observers = cardRefs.current.map((card, index) => {
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
        if (observer && cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]!);
        }
      });
    };
  }, [posts]);

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:p-0">
      {posts.map(({ slug, title, image }: Publication, index: number) => (
        <div
          key={slug}
          ref={el => { if (el) cardRefs.current[index] = el; }}
          className={`flex flex-col overflow-hidden border border-[var(--brand-primary-50)] dark:border-white dark:text-white dark:bg-[var(--brand-primary-500)] shadow-lg rounded-xl transition-all duration-700 ease-out ${
            visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <Link href={`/${slug}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image || '/images/hero.jpg'} alt={title} className="object-cover w-full h-48" />
            <h2 className="p-4 font-bold">{title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
