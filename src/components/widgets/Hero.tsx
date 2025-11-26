import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-4xl pb-10 mx-auto text-center md:pb-16">
            {tagline && (
              <p className="text-base font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="mb-6 text-4xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            <div className="max-w-3xl mx-auto">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex flex-col gap-4 px-4 max-w-none flex-nowrap sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={`callToAction`} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative max-w-5xl m-auto">
              <Image
                className="w-full h-auto mx-auto bg-gray-400 rounded-md dark:bg-slate-700"
                src={image.src}
                alt={image.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
