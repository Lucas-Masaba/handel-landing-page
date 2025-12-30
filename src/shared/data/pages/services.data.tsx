import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconBriefcase,
  IconFileText,
  IconScale,
  IconShield,
  IconTrendingUp,
  IconUsers,
  IconWorldWww,
  IconBuildingBank,
  IconGavel,
  IconCoin,
  IconDeviceDesktop,
  IconHome,
  IconPlane,
  IconChartBar,
  IconLeaf,
  IconLock,
  IconCash,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Handel Advocates | Global Consulting',
  subtitle:
    'Driving Regional and International Success Through Law and Policy. Elite legal services and strategic advisory across international trade, corporate law, investment, regulatory compliance, and cross-border commerce across Uganda, EAC, COMESA, AfCFTA, and global markets.',
  // callToAction: {
  //   text: 'Start Exploring',
  //   href: 'https://github.com/onwidget/Handel',
  //   targetBlank: true,
  // },
  image: {
    src: heroImg,
    alt: 'Hero Handel',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Practice Areas',
    subtitle: 'Comprehensive legal and consulting services across international trade, corporate law, investment, compliance, and strategic advisory.',
  },
  items: [
    {
      title: 'International Trade & Regional Integration',
      description: 'Trade remedies, customs compliance, RTA advisory, WTO dispute settlement, export controls, competition law, and sector-specific trade advisory.',
      icon: IconWorldWww,
    },
    {
      title: 'Business & Commercial Transactions',
      description: 'Commercial contracts, joint ventures, distribution agreements, supply chain arrangements, and cross-border trade within EAC, COMESA, and AfCFTA.',
      icon: IconFileText,
    },
    {
      title: 'Corporate Law & Governance',
      description: 'Company formation, M&A, shareholder agreements, corporate restructuring, board advisory, directors\' duties, and compliance frameworks.',
      icon: IconBriefcase,
    },
    {
      title: 'Anti-Corruption & Compliance',
      description: 'Risk assessments, compliance program design, due diligence, investigations, and representation in enforcement proceedings (FCPA, UK Bribery Act, OECD).',
      icon: IconShield,
    },
    {
      title: 'Anti-Money Laundering (AML) & CFT',
      description: 'AML/CFT program development, KYC/CDD frameworks, transaction monitoring, cross-border financial compliance, and regulatory inspections.',
      icon: IconBuildingBank,
    },
    {
      title: 'Digital Trade, Technology & E-Commerce',
      description: 'Digital trade regulation, data protection, fintech licensing, online consumer protection, cloud contracts, and digital platform advisory.',
      icon: IconDeviceDesktop,
    },
    {
      title: 'Real Estate, Land & Property Law',
      description: 'Land acquisition, commercial/residential transactions, lease agreements, investment structuring, mortgages, and dispute resolution.',
      icon: IconHome,
    },
    {
      title: 'Immigration & Mobility Law',
      description: 'Work permits, investor permits, residence visas, immigration compliance, EAC travel facilitation, and corporate mobility strategies.',
      icon: IconPlane,
    },
    {
      title: 'Foreign Direct Investment (FDI) & Market Entry',
      description: 'Investment structuring, UIA processes, incentives, sector-specific licensing, PPPs, joint ventures, and local content compliance.',
      icon: IconTrendingUp,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'The firm provides comprehensive legal services across multiple practice areas beyond international trade, including corporate and commercial law, anti-corruption compliance, AML/CFT, digital trade, real estate, immigration, and foreign direct investment advisory.',
  items: [
    {
      title: 'Business & Commercial Transactions',
      description: 'Contract drafting, review and negotiation. Joint ventures, distribution agreements, and cross-border trade transactions.',
      icon: IconFileText,
    },
    {
      title: 'Digital Trade, Technology & E-Commerce',
      description: 'Digital trade regulation, data protection, fintech licensing, and online consumer protection across Uganda and the region.',
      icon: IconDeviceDesktop,
    },
    {
      title: 'Real Estate & Property Law',
      description: 'Land acquisition, commercial and residential transactions, lease agreements, and property investment structuring.',
      icon: IconHome,
    },
    {
      title: 'Foreign Direct Investment (FDI) Advisory',
      description: 'Investment structuring, UIA processes, sector-specific licensing, PPPs, and joint venture compliance.',
      icon: IconTrendingUp,
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Handel Global Consulting - Strategic Advisory Services',
  items: [
    {
      title: 'Trade Policy & Regional Integration',
      description: 'Comprehensive trade policy research, negotiation support for EAC/COMESA/AfCFTA, export competitiveness studies, and market access strategy.',
      icon: IconChartBar,
    },
    {
      title: 'Climate, Sustainability & Environmental Policy',
      description: 'Climate finance structuring, carbon markets, ESG frameworks, energy transition advisory, and sustainability program design.',
      icon: IconLeaf,
    },
    {
      title: 'International Development & Public Policy',
      description: 'Policy formulation, institutional strengthening, public sector reforms, and program design with multilateral development partners.',
      icon: IconUsers,
    },
    {
      title: 'AML/CFT & Financial Integrity',
      description: 'National risk assessments, AML/CFT program design, compliance frameworks, FATF standards implementation, and financial intelligence support.',
      icon: IconLock,
    },
    {
      title: 'Anti-Corruption & Good Governance',
      description: 'Anti-corruption strategies, integrity risk mapping, public procurement reform, beneficial ownership transparency, and ethics training.',
      icon: IconGavel,
    },
    {
      title: 'Finance, Investment & Development Funding',
      description: 'Project finance advisory, blended finance structures, investment climate assessments, and capital mobilization strategies.',
      icon: IconCash,
    }
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero Handel',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. Handel's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with Handel.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
