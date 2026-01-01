'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import verticalLogo from '~/assets/images/handel-logo-vertical-cropped-removebg-preview.png';
import verticalLogoDark from '~/assets/images/handel-logo-vertical-dark-2-cropped-removebg-preview.png';

const BACKGROUND_IMAGES = [
  '/images/background-images/paper.jpg',
  '/images/background-images/blocks.jpg',
  '/images/background-images/brick-wall.jpg',
  '/images/background-images/concrete-mesh.jpg',
  '/images/background-images/geometric-bg.jpg',
];

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = BACKGROUND_IMAGES[currentImageIndex];
  const nextImage = BACKGROUND_IMAGES[(currentImageIndex + 1) % BACKGROUND_IMAGES.length];
  return (
    <section 
      id="heroOne"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        mixBlendMode: 'multiply',
        transition: 'background-image 1.5s ease-in-out',
      }}
    >
      {/* Gradient overlay mask to keep background color visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/70 dark:to-slate-800/70 pointer-events-none"></div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 relative z-10 w-full">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 md:order-1">
              {title && (
                <h1 className="text-3xl font-bold tracking-tighter leading-tighter font-heading md:text-4xl lg:text-5xl text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] text-left text-justify">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-6 mb-8 text-base font-normal text-[var(--brand-primary-600)] dark:text-slate-400 text-justify">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end md:ml-auto">
              <div className="max-w-xs">
                <Image
                  src={verticalLogo}
                  alt="Handel vertical logo"
                  width={400}
                  height={400}
                  className="mx-auto dark:hidden"
                />
                <Image
                  src={verticalLogoDark}
                  alt="Handel vertical logo dark"
                  width={400}
                  height={400}
                  className="hidden mx-auto dark:inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
