'use client';

import { useState } from 'react';
import { 
  IconX, 
  IconBriefcase,
  IconGavel,
  IconContract,
  IconBuildingCommunity,
  IconShieldCheck,
  IconMoneybag,
  IconNetwork,
  IconHome,
  IconPlane,
  IconTrendingUp,
} from '@tabler/icons-react';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { FAQsProps, Item } from '~/shared/types';
import { parseDescription, ContentRenderer } from '~/utils/contentParser';

// Icon mapping for practice areas
const practiceAreasIcons: Record<string, any> = {
  '1': IconGavel,           // International Trade & Regional Integration
  '2': IconContract,        // Business & Commercial Transactions
  '3': IconBuildingCommunity, // Corporate Law & Governance
  '4': IconShieldCheck,     // Anti-Corruption & Compliance
  '5': IconMoneybag,        // AML & CFT
  '6': IconNetwork,         // Digital Trade, Technology & E-Commerce
  '7': IconHome,            // Real Estate, Land & Property Law
  '8': IconPlane,           // Immigration & Mobility Law
  '9': IconTrendingUp,      // Foreign Direct Investment (FDI) & Market Entry
};

const PracticeAreas = ({ header, items, id, hasBackground = false }: FAQsProps) => {
  const [selectedPractice, setSelectedPractice] = useState<Item | null>(null);

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
            const IconComponent = practiceAreasIcons[iconIndex] || IconBriefcase;

            return (
              <div
                key={`practice-${index}`}
                onClick={() => setSelectedPractice(item)}
                className="card p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 hover:border-[var(--brand-accent-500)] hover:bg-[var(--brand-primary-600)] transition-all duration-300 ease-out flex gap-4 !bg-[var(--brand-primary-600)] !border-[var(--brand-primary-800)] text-white shadow-lg"
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
      {selectedPractice && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedPractice(null)}
        >
          <div 
            className="bg-white dark:bg-[var(--brand-primary-600)] rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-[var(--brand-primary-600)] border-b border-gray-200 dark:border-[var(--brand-primary-800)] p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] pr-8 text-justify">
                {selectedPractice.title}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPractice(null);
                }}
                className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-[var(--brand-primary-700)] rounded-full transition-colors"
                aria-label="Close"
              >
                <IconX className="w-6 h-6 text-gray-600 dark:text-slate-400" />
              </button>
            </div>
            
            <div className="p-6">
              <ContentRenderer content={parseDescription(String(selectedPractice.description || ''))} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeAreas;
