import Image from 'next/image';
import { IconSphere } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import ImageSlideshow from '../common/ImageSlideshow';

const Content = ({
  header,
  content,
  contentAfterItems,
  items,
  image,
  slideshow,
  isReversed,
  isAfterContent,
  id,
  hasBackground = true,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-[var(--brand-primary-600)]" />}
    <div className="mx-auto max-w-7xl">
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-16 md:min-h-[500px] lg:min-h-[600px]`}>
        <div className="self-center md:basis-1/2">
          {content && <div className="mb-8 text-base text-center text-[var(--brand-primary-600)] lg:mb-12 dark:text-[var(--brand-accent-500)] whitespace-pre-line text-justify">{content}</div>}
          <ItemGrid
            items={items}
            columns={1}
            defaultIcon={IconSphere}
            containerClass="gap-4 md:gap-y-6"
            panelClass="flex max-w-full"
            titleClass="text-base font-normal leading-6 text-[var(--brand-primary-600)] dark:text-white mt-1 mb-2"
            descriptionClass="mt-1"
            iconClass="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-[var(--brand-accent-500)] text-[var(--brand-primary-600)] mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 p-0.5"
          />
          {contentAfterItems && <div className="mt-8 text-base text-center text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] whitespace-pre-line text-justify">{contentAfterItems}</div>}
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {slideshow && slideshow.length > 0 ? (
            <ImageSlideshow images={slideshow} />
          ) : image ? (
            <div className="relative w-full h-96 md:h-full">
              <Image
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src={image.src}
                fill
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                quality={75}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
