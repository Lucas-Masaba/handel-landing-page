'use client';

import { useState } from 'react';
import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import Modal from '../common/Modal';
import {
  IconMapPin,
  IconWorld,
  IconBuildingBank,
  IconArrowsShuffle,
} from '@tabler/icons-react';

const WhyChooseUs = ({ header, content, items, id, hasBackground = true }: ContentProps) => {
  const icons = [IconMapPin, IconWorld, IconBuildingBank, IconArrowsShuffle];
  const [selectedItem, setSelectedItem] = useState<{ title: string; description: string } | null>(null);

  return (
    <section
      id={id}
      className="relative not-prose scroll-mt-[72px]"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/background-images/swirl.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          mixBlendMode: 'multiply',
        }}
      />
      
      <div className="relative px-4 py-12 mx-auto max-w-7xl md:px-6 md:py-16 lg:py-20 text-default">
        <div className="relative z-10">
          {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-[var(--brand-primary-600)]" />}
          {content && (
            <div className="mb-12 text-base font-bold text-left text-[var(--brand-accent-500)] dark:text-[var(--brand-accent-500)] whitespace-pre-line text-justify">
              {content}
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {items?.map((item, index) => {
              const Icon = icons[index] || IconMapPin;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedItem({ title: String(item.title || ''), description: String(item.description || '') })}
                  className="flex flex-col items-start p-3 text-left transition-shadow duration-300 bg-white rounded-lg shadow-md cursor-pointer dark:bg-slate-800 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-8 h-8 text-[var(--brand-accent-500)]" strokeWidth={2} />
                  </div>
                  {item.title && (
                    <h3 className="mb-3 text-lg font-bold text-[var(--brand-primary-600)] dark:text-white text-justify">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-sm text-justify text-gray-600 dark:text-slate-300 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          title={String(selectedItem.title)}
        >
          {selectedItem.description}
        </Modal>
      )}
    </section>
  );
};

export default WhyChooseUs;
