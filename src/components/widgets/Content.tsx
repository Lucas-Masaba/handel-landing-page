import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Content = ({
  header,
  content,
  contentAfterItems,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = true,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    // hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`  md:gap-16`}>
        <div className="self-center md:basis-1/2">
          {content && <div className="mb-8 text-base text-center text-[var(--brand-primary-600)] lg:mb-12 dark:text-[var(--brand-accent-500)] whitespace-pre-line text-justify">{content}</div>}
          <ItemGrid
            items={items}
            columns={1}
            defaultIcon={IconCheck}
            containerClass="gap-4 md:gap-y-6"
            panelClass="flex max-w-full"
            titleClass="text-base font-normal leading-6 text-[var(--brand-primary-600)] dark:text-white mt-1 mb-2"
            descriptionClass="mt-1"
            iconClass="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-[var(--brand-accent-500)] text-[var(--brand-primary-600)] mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 p-0.5"
          />
          {contentAfterItems && <div className="mt-8 text-base text-center text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] whitespace-pre-line text-justify">{contentAfterItems}</div>}
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {image && (
            <div className="relative max-w-4xl m-auto">
                          {/* <Image
                            className="mx-auto w-full rounded-lg shadow-lg bg-[var(--brand-primary-400)] dark:bg-[var(--brand-primary-700)]"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
