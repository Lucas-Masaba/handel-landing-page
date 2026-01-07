import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { callToActionFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';

export const metadata: Metadata = {
  title: 'FAQs - International Trade Law & Legal Services',
  description: 'Frequently asked questions about international trade law, EAC/COMESA regulations, corporate law services, investment advisory, and working with Handel Advocates in Uganda and East Africa.',
  keywords: ['trade law FAQs', 'legal services questions', 'EAC trade regulations', 'COMESA law questions', 'Uganda law firm FAQs', 'international trade questions'],
  openGraph: {
    title: 'FAQs - Handel Advocates',
    description: 'Common questions about our legal services, trade law expertise, and advisory services.',
    url: '/faqs',
  },
};

const Page = () => {
  return (
    <>
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
