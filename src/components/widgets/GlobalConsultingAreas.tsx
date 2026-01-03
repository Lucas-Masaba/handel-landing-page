'use client';

import { useState, useEffect, useRef } from 'react';
import Modal from '../common/Modal';
import { 
  IconBriefcase,
  IconTrendingUp,
  IconLeaf,
  IconUsers,
  IconShieldHeart,
  IconShieldCheck,
  IconCreditCard,
} from '@tabler/icons-react';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { FAQsProps, Item } from '~/shared/types';
import { parseDescription, ContentRenderer } from '~/utils/contentParser';

// Icon mapping for global consulting areas
const consultingAreasIcons: Record<string, any> = {
  '1': IconTrendingUp,      // Trade Policy, Regional Integration & Economic Competitiveness
  '2': IconLeaf,            // Climate, Sustainability & Environmental Policy Advisory
  '3': IconUsers,           // International Development & Public Policy Advisory
  '4': IconShieldHeart,     // AML, CFT & Financial Integrity Consulting
  '5': IconShieldCheck,     // Anti-Corruption, Integrity & Good Governance Consulting
  '6': IconCreditCard,      // Finance, Investment & Development Funding Advisory
};

const GlobalConsultingAreas = ({ header, items, id, hasBackground = false }: FAQsProps) => {
  const [selectedArea, setSelectedArea] = useState<Item | null>(null);
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
  }, [items]);

  return (
    <>
      <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="max-w-6xl">
        {header && (
          <Headline 
            header={header} 
            titleClass="text-2xl sm:text-3xl text-[var(--brand-primary-600)]" 
            containerClass="text-left ml-0"
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items?.map((item, index) => {
            const iconIndex = String(index + 1);
            const IconComponent = consultingAreasIcons[iconIndex] || IconBriefcase;

            return (
              <div
                key={`consulting-area-${index}`}
                ref={el => { if (el) cardRefs.current[index] = el; }}
                onClick={() => setSelectedArea(item)}
                className={`card p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out flex gap-4 !bg-[var(--brand-primary-600)] border-2 border-[var(--brand-primary-800)] hover:border-[var(--brand-accent-500)] text-white shadow-lg ${
                  visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-accent-500)] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[var(--brand-primary-600)]" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white mb-2 text-justify">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-200 text-justify line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </WidgetWrapper>

      {/* Modal */}
      {selectedArea && (
        <Modal
          isOpen={!!selectedArea}
          onClose={() => setSelectedArea(null)}
          title={String(selectedArea.title || '')}
          maxWidth="max-w-4xl"
          maxHeight="max-h-[80vh]"
        >
          <ContentRenderer content={parseDescription(String(selectedArea.description || ''))} />
        </Modal>
      )}
    </>
  );
};

export default GlobalConsultingAreas;
