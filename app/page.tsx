import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';

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

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Content {...aboutHandel} />
      <Content {...integratedModel} />
      <Content {...combinedAdvantages} />
      <Content {...internationalTradePractice} />
      <Content {...whyClientsChoose} />
      <PracticeAreas {...practiceAreas} />
      <GlobalConsultingAreas {...globalConsultingAreas} />
      <Content {...proBono} />
      <Team2 {...teamAbout} />
      <Contact {...contact2Contact} />
    </>
  );
}
