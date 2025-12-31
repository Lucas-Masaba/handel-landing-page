import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import verticalLogo from '~/assets/images/handel-logo-vertical-cropped-removebg-preview.png';
import verticalLogoDark from '~/assets/images/handel-logo-vertical-dark-2-cropped-removebg-preview.png';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
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
                <p className="mt-6 mb-8 text-base font-normal text-gray-600 dark:text-slate-400 text-justify">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
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
