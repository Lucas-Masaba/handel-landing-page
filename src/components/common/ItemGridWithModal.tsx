'use client';

import { useState } from 'react';
import { IconSphere } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import Modal from './Modal';

interface ItemGridWithModalProps extends ItemGridType {
  enableModal?: boolean;
}

const ItemGridWithModal = ({
  id,
  items,
  columns,
  defaultColumns,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
  enableModal = false,
}: ItemGridWithModalProps) => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; description: string } | null>(null);

  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid gap-4 md:gap-6 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto'
                : (columns || defaultColumns) === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2 mx-auto'
                : (columns || defaultColumns) === 2
                ? 'sm:grid-cols-2 mx-auto'
                : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon: Icon, callToAction }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
                <div className="flex items-start pt-0.5 flex-shrink-0">
                  {Icon ? (
                    <Icon className={twMerge('w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3', iconClass)} />
                  ) : DefaultIcon ? (
                    <DefaultIcon className={twMerge('w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3', iconClass)} />
                  ) : null}
                </div>
                <div>
                  {title && <h3 className={twMerge('text-base font-normal', titleClass)}>{title}</h3>}
                  {description && enableModal ? (
                    <>
                      <p
                        className={twMerge(
                          `text-sm text-black dark:text-white ${title ? 'mt-2' : ''} text-justify line-clamp-2`,
                          descriptionClass,
                        )}
                      >
                        {description}
                      </p>
                      <button
                        onClick={() => setSelectedItem({ title: String(title || ''), description: String(description) })}
                        className="mt-3 text-sm font-semibold text-[var(--brand-accent-500)] dark:text-[var(--brand-accent-500)] cursor-pointer group"
                      >
                        <span className="group-hover:hidden">Read more...</span>
                        <span className="hidden group-hover:inline">
                          Read more
                          <span className="inline-block animate-blink" style={{ animationDelay: '0s' }}>.</span>
                          <span className="inline-block animate-blink" style={{ animationDelay: '0.2s' }}>.</span>
                          <span className="inline-block animate-blink" style={{ animationDelay: '0.4s' }}>.</span>
                        </span>
                      </button>
                    </>
                  ) : (
                    description && (
                      <p
                        className={twMerge(`text-sm text-black dark:text-white ${title ? 'mt-2' : ''} text-justify`, descriptionClass)}
                      >
                        {description}
                      </p>
                    )
                  )}
                  {callToAction && (
                    <div
                      className={`${description && enableModal ? '' : 'mt-3'}`}
                    >
                      {/* CTA component can be added here if needed */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {enableModal && (
        <Modal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          title={selectedItem?.title || ''}
        >
          {selectedItem?.description || ''}
        </Modal>
      )}
    </>
  );
};

export default ItemGridWithModal;
