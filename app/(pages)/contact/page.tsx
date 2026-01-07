import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact Handel Advocates - International Trade Law Firm',
  description: 'Contact Handel Advocates for expert legal consultation on international trade, regional trade law, corporate matters, and investment advisory. Serving clients across Uganda, EAC, COMESA, and internationally.',
  keywords: ['contact handel advocates', 'law firm contact Uganda', 'trade law consultation', 'legal consultation EAC', 'contact international trade lawyers'],
  openGraph: {
    title: 'Contact Handel Advocates',
    description: 'Get in touch with our expert legal team for trade law, corporate law, and investment advisory services.',
    url: '/contact',
  },
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      {/* <Features2 {...features2Contact} /> */}
    </>
  );
};

export default Page;
