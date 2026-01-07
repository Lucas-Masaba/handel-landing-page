import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  heroServices,
  testimonialsServices,
} from '~/shared/data/pages/services.data';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Legal Services - International Trade, Corporate & Investment Law',
  description: 'Comprehensive legal services including international trade law, EAC/COMESA regional trade, corporate law, investment advisory, trade policy consulting, and regulatory compliance for businesses in Uganda and East Africa.',
  keywords: ['legal services Uganda', 'international trade law services', 'corporate law services', 'investment law', 'trade policy advisory', 'EAC legal services', 'COMESA trade law', 'regulatory compliance', 'cross-border legal services'],
  openGraph: {
    title: 'Legal Services - Handel Advocates',
    description: 'Expert legal services in international trade, corporate law, and investment advisory across Uganda, EAC, and COMESA.',
    url: '/services',
  },
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Features2 {...features2Services} />
      <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} />
      {/* <Features4 {...features4Services} /> */}
      <Testimonials {...testimonialsServices} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
