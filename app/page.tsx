'use client';

import { SITE } from '~/config.js';
import { generateWebPageStructuredData } from '~/utils/seo';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import ProBonoContent from '~/components/widgets/ProBonoContent';
import WhyChooseUs from '~/components/widgets/WhyChooseUs';
import CombinedAdvantages from '~/components/widgets/CombinedAdvantages';

import GlobalConsultingAreas from '~/components/widgets/GlobalConsultingAreas';
import PracticeAreas from '~/components/widgets/PracticeAreas';
import Contact from '~/components/widgets/Contact';
import Team2 from '~/components/widgets/Team2';
import {
  heroHome,
  aboutHandel,
  integratedModel,
  combinedAdvantages,
  internationalTradePractice,
  whyClientsChoose,
  practiceAreas,
  globalConsultingAreas,
  proBono,
} from '~/shared/data/pages/home.data';

import { contact2Contact } from '~/shared/data/pages/contact.data';
import { teamAbout } from '~/shared/data/pages/about.data';

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Content {...aboutHandel} />
      <Content {...integratedModel} />
      <CombinedAdvantages {...combinedAdvantages} />
      {/* <Content {...internationalTradePractice} /> */}
      <WhyChooseUs {...whyClientsChoose} />
      <PracticeAreas {...practiceAreas} />
      <GlobalConsultingAreas {...globalConsultingAreas} />
      <ProBonoContent {...proBono} />
      <Team2 {...teamAbout} />
      <Contact {...contact2Contact} />
    </>
  );
}
