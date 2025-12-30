'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { GalleryProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Gallery = ({
  header,
  content,
  images,
  id,
  hasBackground = false,
}: GalleryProps) => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center', 
      skipSnaps: false,
      speed: 10,
      dragFree: false,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const canShowControls = (images?.length || 0) > 1;

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={false} containerClass="">
      <div className="w-full">
        {header && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
            <Headline header={header} titleClass="text-4xl md:text-5xl" />
          </div>
        )}
        {content && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16 text-lg text-muted dark:text-slate-400 text-center">
            {content}
          </div>
        )}

        <div className="relative w-full group">
          {/* Carousel Container */}
          <div className="embla w-full overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex w-full">
              {images?.map((image, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                  <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[85vh] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className="object-contain"
                      sizes="100vw"
                      quality={85}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Caption */}
                    {image.caption && (
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 lg:p-16">
                        <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-4xl">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {canShowControls && (
            <>
              {/* Navigation Arrows */}
              <button
                aria-label="Previous slide"
                onClick={scrollPrev}
                className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm p-3 sm:p-4 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <IconChevronLeft className="h-7 w-7 sm:h-9 sm:w-9 text-white drop-shadow-lg" />
              </button>
              <button
                aria-label="Next slide"
                onClick={scrollNext}
                className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm p-3 sm:p-4 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <IconChevronRight className="h-7 w-7 sm:h-9 sm:w-9 text-white drop-shadow-lg" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 sm:gap-3">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => scrollTo(idx)}
                    className={
                      'rounded-full transition-all duration-300 ' +
                      (idx === selectedIndex
                        ? 'bg-white w-8 h-3 sm:w-10 sm:h-3'
                        : 'bg-white/50 hover:bg-white/75 w-3 h-3 sm:w-3 sm:h-3')
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Gallery;
