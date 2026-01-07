'use client';

import { useEffect, useRef, useState } from 'react';
import {
  IconMap,
  IconWorldLongitude,
  IconBuildingSkyscraper,
  IconUsersGroup,
} from '@tabler/icons-react';

import WidgetWrapper from '../common/WidgetWrapper';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  index: number;
  isVisible: boolean;
}

const AdvantageCard = ({ icon, title, index, isVisible }: AdvantageCardProps) => (
  <div
    className={`group relative rounded-xl bg-[var(--brand-primary-600)] p-6 transition-all duration-700 ease-out hover:shadow-xl hover:scale-105 flex flex-col h-full ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`}
    style={{
      transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
    }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent-500)]/0 via-[var(--brand-accent-500)]/10 to-[var(--brand-accent-500)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

    {/* Icon container */}
    <div className="relative mb-3 inline-flex h-10 w-10 items-center justify-center text-white group-hover:text-[var(--brand-accent-500)] group-hover:scale-110 transition-all duration-300">
      <div>
        {icon}
      </div>
    </div>
    {/* Content */}
    <h3 className="relative mb-2 text-base font-medium leading-6 text-justify text-white transition-colors">
      {title}
    </h3>

    {/* Accent underline */}
    <div className="mt-auto h-1.5 w-full rounded-full bg-white underline-bar" />
  </div>
);

interface CombinedAdvantagesProps {
  content?: string;
  contentAfterItems?: string;
  items?: Array<{
    title: string;
    description?: string;
  }>;
  id?: string;
}

const advantages = [
  {
    icon: <IconMap className="w-6 h-6" />,
    title: 'Deep local roots in Uganda',
  },
  {
    icon: <IconWorldLongitude className="w-6 h-6" />,
    title: 'Regional practice spanning the EAC, COMESA, and SADC, with pan-African reach through the AfCFTA',
  },
  {
    icon: <IconBuildingSkyscraper className="w-6 h-6" />,
    title: 'International-level expertise on trade, investment and cross-border commerce',
  },
  {
    icon: <IconUsersGroup className="w-6 h-6" />,
    title: 'A multidisciplinary team of lawyers, economists, and regulatory professionals',
  },
];

const CombinedAdvantages = ({
  content,
  contentAfterItems,
  id,
}: CombinedAdvantagesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <WidgetWrapper
      id={id || 'combined-advantages'}
      hasBackground={true}
      containerClass="relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--brand-accent-500)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--brand-primary-500)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-16">
            {/* Left rail: title and description */}
            <div className="flex flex-col justify-center h-full gap-6 md:w-5/12 lg:w-5/12">
              <div className="mb-6 md:mb-0">
                <div
                  ref={containerRef}
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {content && (
                    <p className="text-2xl sm:text-3xl font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] mb-3">
                      {content}
                    </p>
                  )}
                  {/* <div className="mt-3 h-1 w-16 bg-gradient-to-r from-[var(--brand-accent-500)] to-[var(--brand-accent-400)] rounded-full" /> */}
                </div>
              </div>

              {contentAfterItems && (
                <div
                  className={`transition-all duration-700 ease-out delay-200 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <p className="text-base text-[var(--brand-primary-600)] dark:text-[var(--brand-primary-200)] text-justify">
                    {contentAfterItems}
                  </p>
                </div>
              )}
            </div>

            {/* Right rail: cards grid */}
            <div className="md:w-7/12 lg:w-7/12">
              <div className="relative grid gap-6 sm:grid-cols-2 cards-grid">
                {advantages.map((advantage, index) => (
                  <AdvantageCard
                    key={advantage.title}
                    icon={advantage.icon}
                    title={advantage.title}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .cards-grid::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0) 0%,
            var(--brand-accent-400) 20%,
            var(--brand-accent-500) 50%,
            var(--brand-accent-400) 80%,
            rgba(0,0,0,0) 100%
          );
          opacity: 0.35;
          display: none;
        }
        @media (min-width: 640px) {
          .cards-grid::after {
            display: block;
          }
        }
        .underline-bar {
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 300ms ease;
        }
        .group:hover .underline-bar {
          background-color: var(--brand-accent-500);
          transform: scaleX(1);
        }
      `}</style>
    </WidgetWrapper>
  );
};

export default CombinedAdvantages;
