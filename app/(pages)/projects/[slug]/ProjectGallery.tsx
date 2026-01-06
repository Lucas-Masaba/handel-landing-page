'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: images.length > 1,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    images.length > 1 ? [autoplay.current] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const canShowDots = images.length > 1;

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => {
      emblaApi.off('select', () => {});
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative w-full group">
        <div className="embla w-full overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="embla__container flex w-full">
            {images.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                <div className="relative h-[400px] md:h-[500px] w-full bg-[var(--brand-primary-50)] dark:bg-[var(--brand-primary-900)] overflow-hidden rounded-lg">
                  {/* Blurred backdrop to fill empty space */}
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover scale-110 blur-2xl opacity-40"
                    sizes="(max-width: 768px) 100vw, 56vw"
                    aria-hidden="true"
                    priority={index === 0}
                  />

                  {/* Foreground contained image */}
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 56vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation (overlay) */}
        {canShowDots && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 drop-shadow-sm">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 pointer-events-auto ${
                  index === selectedIndex
                    ? 'bg-white shadow ring-2 ring-white/70 scale-110'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
