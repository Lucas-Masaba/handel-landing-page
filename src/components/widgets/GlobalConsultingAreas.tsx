'use client';

import { useState } from 'react';
import { 
  IconX, 
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

  return (
    <>
      <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="max-w-6xl">
        {header && (
          <Headline 
            header={header} 
            titleClass="text-2xl sm:text-3xl" 
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
                onClick={() => setSelectedArea(item)}
                className="card p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-accent-500)] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[var(--brand-primary-600)]" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[var(--brand-primary-600)] dark:text-white mb-2 text-justify">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 text-justify line-clamp-2">
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedArea(null)}
        >
          <div 
            className="bg-white dark:bg-[var(--brand-primary-600)] rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-[var(--brand-primary-600)] border-b border-gray-200 dark:border-[var(--brand-primary-800)] p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] pr-8 text-justify">
                {selectedArea.title}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArea(null);
                }}
                className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-[var(--brand-primary-700)] rounded-full transition-colors"
                aria-label="Close"
              >
                <IconX className="w-6 h-6 text-gray-600 dark:text-slate-400" />
              </button>
            </div>
            
            <div className="p-6">
              <ContentRenderer content={parseDescription(String(selectedArea.description || ''))} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalConsultingAreas;
