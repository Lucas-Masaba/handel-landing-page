import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import Testimonials2 from '~/components/widgets/Testimonials2';
import Gallery from '~/components/widgets/Gallery';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
  proBonoAbout,
  proBonoFocusAbout,
} from '~/shared/data/pages/about.data';

import { contact2Contact } from '~/shared/data/pages/contact.data';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About Handel Advocates',
  description: 'Learn about Handel Advocates, a premier Ugandan law firm offering elite legal services in international trade, regional trade law (EAC, COMESA), corporate law, and investment advisory across East Africa.',
  keywords: ['about handel advocates', 'law firm Uganda', 'international trade lawyers', 'EAC legal services', 'COMESA law firm', 'corporate law Uganda', 'legal team East Africa'],
  openGraph: {
    title: 'About Handel Advocates - Leading Trade Law Firm in East Africa',
    description: 'Premier legal services in international trade, regional trade law, and corporate advisory across Uganda, EAC, and COMESA regions.',
    url: '/about',
  },
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} />
      <Features3 {...features3About} />
      <Features {...featuresAbout} />
      <Gallery {...proBonoAbout} />
      <Features3 {...proBonoFocusAbout} />
      <Team2 {...teamAbout} />
      {/* <Testimonials2 {...testimonials2About} /> */}
      {/* <FAQs {...faqsAbout} /> */}
      {/* <Contact {...contact2Contact} /> */}
    </>
  );
};

export default Page;
