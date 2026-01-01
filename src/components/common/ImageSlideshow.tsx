'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface ImageSlideshowProps {
  images: Array<{ src: string; alt: string }>;
}

const ImageSlideshow = ({ images }: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-96 md:h-full">
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <Image
          key={currentIndex}
          className="w-full h-full object-cover animate-fadeIn"
          src={images[currentIndex].src}
          fill
          alt={images[currentIndex].alt}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
        aria-label="Previous image"
      >
        <IconChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
        aria-label="Next image"
      >
        <IconChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-3 h-3'
                : 'bg-white/50 hover:bg-white/70 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlideshow;
