'use client';

import { useState, useEffect, useRef } from 'react';
import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';
import { toSlug } from '~/utils/utils';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => {
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
  }, [teams]);

  return (
  <section 
    className="relative not-prose scroll-mt-[72px] overflow-hidden"
    id={id ? id : ''}
    style={{
      backgroundImage: 'url(/images/background-images/building.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      mixBlendMode: 'multiply',
    }}
  >
    {/* Gradient overlay mask to keep background color visible */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-50/70 to-slate-100/70 dark:from-slate-900/80 dark:to-slate-800/80"></div>
    
    <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl md:px-6 md:py-16 lg:py-20 text-default">
      {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" subtitleClass="text-justify text-left ml-0" containerClass="text-left ml-0" />}
      <div className="flex items-stretch justify-start">
        <div className="grid w-full grid-cols-1 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {teams && teams.map(({ name, occupation, image, items }, index) => (
            <div 
              key={`item-team-two-${index}`} 
              ref={el => { if (el) cardRefs.current[index] = el; }}
              className={`flex transition-all duration-700 ease-out ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <ItemTeam
                name={name}
                occupation={occupation}
                image={image}
                items={items}
                linkHref={`/team/${toSlug(name)}`}
                containerClass="card flex flex-col justify-center w-full text-left cursor-pointer overflow-hidden border-2 border-transparent hover:border-[var(--brand-accent-500)] transition-all duration-300"
                imageClass="w-60 h-80 object-cover object-top"
                panelClass="flex-1 flex flex-col px-3 py-3"
                nameClass="text-base font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] mt-0.5 text-left"
                occupationClass="text-sm text-body-color min-h-[1.5rem] flex items-start justify-start text-left mt-0.5 text-[var(--brand-accent-500)]"
                itemsClass="flex justify-start relative px-0 pt-2 mx-0 overflow-hidden mt-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Team;
