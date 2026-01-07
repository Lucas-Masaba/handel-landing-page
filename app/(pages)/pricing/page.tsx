import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing - Legal Services & Trade Advisory',
  description: 'Transparent pricing for legal services including international trade law, corporate advisory, investment law, and trade policy consulting. Flexible engagement models for businesses across Uganda and East Africa.',
  keywords: ['legal services pricing', 'law firm fees Uganda', 'trade law consultation fees', 'corporate law pricing', 'investment advisory costs'],
  openGraph: {
    title: 'Pricing - Handel Advocates Legal Services',
    description: 'Transparent and flexible pricing for comprehensive legal and trade advisory services.',
    url: '/pricing',
  },
};

const Page = () => {
  return (
    <>
      <Hero {...heroPricing} />
      <Pricing {...pricingPricing} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
