'use client';

import Image, { StaticImageData } from 'next/image';
import { IconSphere } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import ImageSlideshow from '../common/ImageSlideshow';

const getPlaceholderProps = (src: string | StaticImageData) => {
  if (typeof src === 'string') return {};
  if (src.blurDataURL) return { placeholder: 'blur' as const, blurDataURL: src.blurDataURL };
  return {};
};

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
}: ContentProps) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  const placeholderProps = image ? getPlaceholderProps(image.src) : {};

  return (
    <WidgetWrapper
      id={id ? id : ''}
      hasBackground={hasBackground}
      containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
    >
      {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-[var(--brand-primary-600)]" />}
      <div className="mx-auto max-w-7xl">
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-16 md:min-h-[500px] lg:min-h-[600px]`}>
        <div 
          ref={textRef}
          className={`self-start md:basis-1/2 transition-all duration-700 ease-out ${
            isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
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
        <div 
          ref={imageRef}
          aria-hidden="true" 
          className={`mt-10 md:mt-0 md:basis-1/2 transition-all duration-700 ease-out delay-200 ${
            isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {slideshow && slideshow.length > 0 ? (
            <ImageSlideshow images={slideshow} />
          ) : image ? (
            <div className={`relative w-full h-96 md:h-full ${id === 'about-handel' ? 'bg-[var(--brand-primary-600)]' : ''}`}>
              <Image
                className="object-cover w-full h-full rounded-lg shadow-lg"
                style={id === 'about-handel' ? { filter: 'invert(1) sepia(0.5) hue-rotate(180deg) brightness(0.9)' } : {}}
                src={image.src}
                fill
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 50vw"
                {...placeholderProps}
                quality={75}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </WidgetWrapper>
  );
};

export default Content;
