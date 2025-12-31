'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';
import { parseDescription, ContentRenderer } from '~/utils/contentParser';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();

  return (
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700"
        >
          <div className={classCollapseItem}>
            <div
              className="align-center flex justify-between"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded="false"
              aria-controls={`accordion__panel-${index}`}
              role="button"
            >
              <h2 className="w-full pr-2 text-base font-medium leading-6 text-[var(--brand-primary-600)] dark:text-slate-300">{title}</h2>
              {iconDown && iconUp ? (
                activeIndex === index ? (
                  iconUp
                ) : (
                  iconDown
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              ) : (
                <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              )}
            </div>
            {activeIndex === index && (
              <div
                className="mt-3 select-none"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
              >
                {typeof description === 'string' ? (
                  <ContentRenderer content={parseDescription(description)} />
                ) : Array.isArray(description) ? (
                  <div className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                    {description.map((item, itemIndex) => (
                      <p key={itemIndex} className="mb-2 text-justify">{item}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapse;
