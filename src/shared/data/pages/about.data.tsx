import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import containerImage from 'public/images/containers.jpg';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconBriefcase,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconTrendingUp,
  IconUsers,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Handel Advocates I Global Consulting',
  subtitle:
    'Integrated legal and strategic advisory services driving regional and international success across Uganda, the EAC, SADC, COMESA, and beyond.',
  tagline: 'About Handel',
  callToAction: {
    text: 'Explore Our Services',
    href: '/services',
  },
  callToAction2: {
    text: 'Contact Us',
    href: '/contact',
  },
  image: {
    src: containerImage,
    alt: 'Handel Team',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    { 
      title: 50,
      description: 'Clients',
    },
    {
      title: 5,
      description: 'Countries',
    },
    {
      title: 10,
      description: 'Years of Experience',
    },
    {
      title: 98,
      description: 'Client Satisfaction',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'An Integrated Model',
    subtitle:
      'Handel Advocates I Global Consulting brings together elite legal practice with strategic policy advisory to serve clients across Uganda, the EAC, SADC, COMESA, and international markets.',
    tagline: 'Our Approach',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Why Handel?',
    subtitle: undefined,
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Deep Local & Regional Expertise',
      description: 'Grounded understanding of Uganda, combined with extensive regional experience across EAC, SADC, and COMESA.',
      icon: IconMapPin,
    },
    {
      title: 'International Standards & Best Practices',
      description: 'We bring global expertise, WTO-aligned strategy, and international compliance standards to every engagement.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Strategic Business Orientation',
      description: 'Legal and policy advice anchored in commercial realities—driving growth, reducing risk, and creating competitive advantage.',
      icon: IconTrendingUp,
    },
    {
      title: 'Multidisciplinary Capabilities',
      description: 'A team of lawyers, economists, trade policy experts, and regulatory professionals working in seamless collaboration.',
      icon: IconUsers,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'History of Handel',
    subtitle:
      'Duis sit amet magna et sapien cursus fermentum. Curabitur ac mauris non magna condimentum scelerisque. Aliquam nunc ipsum, semper ac scelerisque sit amet, pulvinar vitae libero.',
    tagline: 'Company History',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        'Donec pharetra, justo a rutrum venenatis, augue erat porta leo, non eleifend dui lectus ut turpis. Fusce tincidunt mattis magna eu commodo. Proin non facilisis enim, ut luctus dolor.',
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'Nunc scelerisque dui non nulla faucibus, sed elementum urna congue. Donec varius nisi sit amet massa malesuada euismod. Donec auctor interdum leo eget ultricies.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'Vestibulum euismod dolor vel magna consectetur, vitae ornare metus finibus. Nam nec magna lacinia, cursus purus ut, pellentesque ex. Aliquam nec porta sapien, nec iaculis odio. Donec sed lacus arcu.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        'Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.',
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        'Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our culture',
    subtitle:
      'Nullam maximus ante eros, ac eleifend mi condimentum ut. Donec volutpat felis ac purus pretium, vitae mollis quam scelerisque.',
    tagline: 'culture',
  },
  items: [
    {
      title: 'Customer engagement',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Creativity and design excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconPalette,
    },
    {
      title: 'Continuous learning',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconBook,
    },
    {
      title: 'Collaboration and cross-functionality',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconPuzzle2,
    },
    {
      title: 'Entrepreneurial spirit',
      description: 'Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus.',
      icon: IconFlame,
    },
    {
      title: 'Employee well-being and balance',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconScale,
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Why Clients Choose Handel',
    subtitle:
      'Integrated legal and strategic advisory that combines deep local expertise, regional reach across EAC, SADC, and COMESA, and international standards.',
    tagline: 'Our Advantage',
  },
  columns: 1,
  items: [
    {
      title: 'Deep Local Expertise',
      description:
        'Comprehensive understanding of Uganda\'s legal and regulatory environment, from trade and customs to investment licensing and sector-specific requirements.',
      icon: IconMapPin,
    },
    {
      title: 'Regional Reach',
      description:
        'Extensive experience with EAC Common Market, SADC, COMESA, and AfCFTA frameworks, enabling seamless regional market access and cross-border operations.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Integrated Legal & Strategic Advisory',
      description:
        'Unique combination of elite legal representation and strategic policy consulting, providing comprehensive solutions under one roof.',
      icon: IconScale,
    },
    {
      title: 'Government & Institutional Relationships',
      description:
        'Deep experience advising governments, regional institutions, development partners, and private sector organizations across policy and regulatory matters.',
      icon: IconUser,
    },
    {
      title: 'Multisector Experience',
      description:
        'Proven track record across agriculture, manufacturing, digital trade, energy, extractives, financial services, and infrastructure sectors.',
      icon: IconBriefcase,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    // title: 'The Team',
    // subtitle:
    //   'Our multidisciplinary team of legal, trade, and policy experts is dedicated to delivering integrated solutions that drive client success across Uganda and the region.',
    tagline: 'team',
  },
  teams: [
    {
      name: 'Mable Kisaka',
      occupation: 'Managing Partner & Team Leader',
      image: {
        src: '/images/team/mable.png',
        alt: 'Mable Kisaka',
      },
      bio: [
        'Mable Kisaka is the Managing Partner and Team Leader, providing strategic leadership across international trade, investment, corporate, and policy advisory work. She is a seasoned trade and legal expert with over a decade of experience advising governments, regional institutions, development partners, and private-sector actors on frameworks that promote sustainable, inclusive, and competitive economic growth across Africa.',
        'She holds a Master of Laws (LL.M) in International Business and Economic Law from Georgetown University Law Center and a Bachelor of Laws (LLB) from Makerere University. An Advocate of the Ugandan Bar, Mable is dual-trained in international trade and investment law, arbitration, and corporate governance, with a strong focus on regional and global trade regimes.',
        'Mable serves as Chairperson of the East Africa Law Society International Trade and Regional Integration Committee, where she leads regional thought leadership on trade, investment, digital economy regulation, competition law, and dispute resolution. She oversees the development of policy briefs and position papers, convenes high-level stakeholder dialogues, and supports EAC Partner States in aligning national trade laws with regional and international commitments.',
        'She was appointed as a Trade Expert on major national and regional policy assignments, including the review and update of Uganda’s National Trade Policy, Trade Policy Implementation and Development Plan, and National Export Development Strategy (NEDS) under TradeMark Africa. In addition, she was appointed as a consultant to develop policy and regulatory recommendations to improve the cross-border digital trade regulatory framework within the East African Community, under GIZ.',
        'Mable has also led and contributed to regional advisory work for COMESA, including a landmark study across all 21 Member States on intellectual property rights infringement and illicit trade, which informed regional enforcement and reform initiatives. Her broader advisory experience includes assignments with the World Bank on business readiness, investment climate reform, gender and trade, and access to justice.',
        'As Managing Partner, she leads multidisciplinary teams delivering corporate, commercial, trade, and investment advisory services, advising multinationals and SMEs on market entry, regulatory compliance, cross-border transactions, and investment structuring. She is a Certified Trainer with the International Trade Centre (ITC) and Afreximbank, having trained over 100 firms on AfCFTA opportunities and export competitiveness.',
        'Mable is also experienced in commercial litigation, arbitration, mediation, and negotiation, and is a Chartered and Certified Mediator. She is widely recognized for integrating law, policy, sustainability, and economic strategy, with a strong commitment to empowering SMEs, strengthening institutions, advancing ESG-aligned trade models, and building trade frameworks that deliver meaningful development impact across Africa.',
        'Beyond her professional work, she is a mentor, speaker, and advocate for women’s leadership in trade and law, and remains actively engaged in regional and global policy conversations shaping Africa’s economic future.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Dr. Chantelle G. Moyo',
      occupation: 'Climate Governance Legal Specialist | Environmental, Energy & Natural Resources Law',
      image: {
        src: '/images/team/chantelle-moyo.png',
        alt: 'Dr. Chantelle G. Moyo',
      },
      bio: [
        'Dr. Chantelle G. Moyo is a Climate Governance Legal Specialist, environmental lawyer, and seasoned researcher with over a decade of experience spanning environmental governance, natural resource governance, mining law, climate change law, energy governance, and sustainable development in Africa and the Global South.',
        'She holds a PhD in Law and Development (Climate Change and Energy) from North-West University, an LL.M in Environmental Law from the University of KwaZulu-Natal, and a Bachelor of Laws (LLB) from the same institution. She has also completed advanced training in Climate Change and Renewable Energy Finance at the Frankfurt School of Finance & Management, and specialized programs in climate governance and negotiations through the African Group of Negotiators Expert Support.',
        'Dr. Moyo’s practice focuses on climate governance, energy transition, extractives regulation, environmental law, and sustainable finance, advising governments, development partners, civil society organizations, and private actors on legal and policy frameworks that support low-carbon development, energy security, and responsible natural resource management.',
        'She brings deep expertise in national, regional (African), and international climate policy and negotiation processes, including climate finance, renewable energy regulation, carbon markets, ecosystem services, and environmental accountability mechanisms.',
        'Dr. Moyo has provided independent advisory services to leading international and regional institutions, including the International Development Law Organization, the Natural Resource Governance Institute, Oxfam Africa, USAID, the Ford Foundation, and the SAGE Foundation. Her advisory work has covered climate change law, energy governance, mining regulation, ESG frameworks, and environmental justice across multiple African jurisdictions.',
        'She has also served as Programme Manager at the Konrad Adenauer Stiftung, where she led regional programmes on Energy Security, Climate Change, and Economic Governance in Sub-Saharan Africa, managing multi-country initiatives and stakeholder engagement across government, private sector, and civil society.',
        'A prolific scholar, Dr. Moyo has over 15 peer-reviewed publications, including journal articles, book chapters, and an edited volume with regional and international publishers. Her recent work includes a chapter contribution in the Handbook of Energy Law in the Low Carbon Transition and a policy-focused article published by the United Nations Environment Programme on inclusive and transparent environmental governance.',
        'Her research combines legal analysis, empirical policy research, and interdisciplinary methods to inform reforms in extractives governance, climate adaptation and mitigation, and sustainable energy transitions.',
        'Within the firm’s Climate, Sustainability & Environmental Policy Advisory practice, Dr. Moyo supports work on climate governance frameworks, ESG compliance, access to climate finance, carbon markets, environmental regulation, and climate-related trade measures, working closely with legal, policy, and economic teams to deliver integrated solutions.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Kasula Racheal',
      occupation: 'Advocate | Anti-Corruption & Anti-Money Laundering (AML) Specialist',
      image: {
        src: '/images/team/kasula-rachael.png',
        alt: 'Kasula Racheal',
      },
      bio: [
        'Racheal is an Advocate and Anti-Corruption and Anti-Money Laundering (AML) Specialist with over ten years of experience in governance, financial crime investigations, compliance advisory, and institutional reform within Uganda’s public sector and regulatory environment. ',
        'She holds a Master of Laws (LL.M) from the University of East London, a Postgraduate Diploma in Legal Practice from the Law Development Centre, and a Bachelor of Laws (LLB) from the Uganda Christian University. She is also a Certified Anti-Money Laundering Specialist (CAMS) and a Certified Fraud Examiner. She holds an Executive Diploma in Anti-Corruption and Diplomacy from the United Nations Institute for Training and Research.',
        'Racheal’s practice focuses on anti-corruption enforcement, AML/CFT compliance, financial crime investigations, and integrity systems, advising institutions on corruption risk management, asset tracing, lifestyle audits, financial profiling, and regulatory compliance aligned with international standards.',
        'She is an Investigator at the Inspectorate of Government of Uganda, where she has led and contributed to systemic investigations into corruption, maladministration, abuse of office, and breaches of the rule of law across Ministries, Departments, and Agencies. Her work informed policy reforms, administrative justice interventions, and legislative amendments.',
        'Racheal played a key role in drafting Lifestyle Audit Guidelines as a national compliance tool for assessing unexplained wealth, contributed technical input to amendments of the Leadership Code Act, and conducted nationwide compliance spot checks and benchmarking with regulatory bodies, including the Uganda Revenue Authority. She has also engaged in cross-border financial crime matters involving Mutual Legal Assistance and cooperation with international partners.',
        'In addition to investigative and advisory work, Racheal designs and delivers capacity-building programs for organizations and compliance teams on AML controls, asset declarations, corruption prevention, and governance frameworks. She brings strong analytical capability, leveraging data-driven financial analysis to support evidence-based decision-making, institutional accountability, and ethical governance.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Dr. Richard Sebaggala',
      occupation: 'Economist Specialist | Trade & Development Economics',
      image: {
        src: '/images/team/richard.jpg',
        alt: 'Dr. Richard Sebaggala',
      },
      bio: [
        'Dr. Richard Sebaggala is a Trade Economist with over fifteen years of experience in international trade, investment, and development policy research across Africa. His work focuses on translating complex economic data into actionable policy and regulatory insights that support export competitiveness, regional integration, and inclusive growth.',
        'He holds a PhD in Applied Economics from the University of Agder, an MSc in Quantitative Economics from Makerere University, and a BA in Economics. He is also a senior lecturer in economics and a long-standing research fellow, contributing to policy research, capacity building, and academic leadership in Uganda.',
        'He has led and contributed to several flagship trade and industrial policy assignments, including major studies for the Uganda Free Zones Authority under the African Continental Free Trade Area (AfCFTA), covering market entry strategies for Ugandan exporters and assessments of opportunities and constraints within Special Economic Zones.',
        "Dr. Sebaggala has served as an Economist and policy advisor on nationally significant assignments commissioned by TradeMark Africa for Uganda's Ministry of Trade, Industry, and Cooperatives, including the National Export Development Strategy (2025/26–2030/31) and the National Trade Policy Development and Implementation Plan. In these roles, he led analytical work on sector competitiveness, trade diagnostics, and investment facilitation reforms to advance Uganda's export-led growth agenda.",
        'He has advised governments and private-sector stakeholders on trade compliance, export diversification, customs cooperation, and rules-of-origin implementation within the East African Community (EAC) and COMESA frameworks.',
        'Dr. Sebaggala brings strong quantitative expertise, including Computable General Equilibrium (CGE) modelling, panel data econometrics, and advanced trade policy analysis, with specialized training from regional and international institutions. In recent years, he has integrated artificial intelligence and machine learning techniques into trade and macroeconomic analysis to enhance evidence-based decision-making for governments, regional bodies, and development partners.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Amos Nakeba',
      occupation: 'Specialist - Financial Integrity, Risk & Governance Advisory',
      image: {
        src: '/images/team/amos.png',
        alt: 'Amos Nakeba',
      },
      bio: [
        'Amos specializes in Financial Integrity, Risk & Governance Advisory, leading high-level advisory work across banking and financial services, enterprise risk management, internal audit, anti-money laundering (AML), corporate governance, ESG, and strategic management.',
        'He holds a Master of Science in Finance and Accounting and a Bachelor of Commerce from Makerere University. He is a Chartered Accountant (ACCA – UK), Certified Public Accountant (ICPAU), and a Certified Systems Security Professional (CSSP), with extensive executive training in enterprise risk management, governance, compliance, ESG, AML, strategic leadership, and process-based auditing from institutions in the US, UK, Europe, and Africa.',
        'He brings over 20 years of senior leadership experience in the financial services and energy sectors, having previously served as Head of Internal Audit / Chief Internal Auditor at Cairo Bank Uganda Limited, a subsidiary of Banque du Caire. In this role, he led institution-wide audit, risk, and compliance functions within a regulated banking environment under the supervision of the Bank of Uganda.',
        'Amos has held several senior executive roles in reputable regional and international institutions, including Deputy General Manager – Internal Audit at Bank of Africa, Senior Manager Audit and Inspection, Head of Compliance at Eskom PTY (South Africa’s national power utility), and Chief Finance Officer at UGAFODE, a regulated financial institution.',
        'He currently serves on the Audit and Risk Committee of the Institute of Internal Auditors Uganda, an affiliate of the Institute of Internal Auditors, contributing to thought leadership and oversight on audit quality, risk governance, and professional standards.',
        'In his advisory role, Amos supports clients with financial integrity frameworks, AML/CFT compliance, enterprise risk design, internal audit transformation, governance strengthening, ESG integration, business restructuring, and strategic decision-making.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Nalwadda Allen Namukisa',
      occupation: 'Associate | Advocate',
      image: {
        src: '/images/team/allen-nalwadda.png',
        alt: 'Nalwadda Allen Namukisa',
      },
      bio: [
        'Nalwadda Allen Namukisa is an Advocate and Associate at the firm. She holds a Bachelor of Laws (LLB) from Makerere University and a Postgraduate Diploma in Legal Practice from the Law Development Centre.',
        'Allen is a dedicated and versatile lawyer with a growing practice across several core firm practice areas, including Corporate and Commercial Law, Company Law, Business and Investment Advisory, Land Transactions, Family Law, and International Trade and Investment Law. Her work supports both domestic and cross-border legal matters, with a strong emphasis on commercially practical and compliance-focused solutions.',
        'She provides comprehensive legal support through legal research, drafting and review of commercial agreements, preparation of pleadings and submissions, and regulatory advisory. Allen regularly assists corporate clients with business registration, corporate governance advisory, compliance with statutory requirements, and transactional documentation, contributing to efficient market entry and operational compliance.',
        'Allen has a strong interest in international trade and cross-border transactions, reinforced by her attainment of a Certificate in Intra-African Trade (How to Trade under the AfCFTA) in May 2025. Her practice integrates trade-related regulatory considerations into corporate structuring and commercial advisory work.',
        'Beyond traditional legal practice, Allen has contributed to policy and development-oriented research aligned with the firm\'s trade and regional integration focus. She served as a research assistant on a project commissioned by TradeMark Africa in collaboration with the Ministry of Trade, Industry and Cooperatives, supporting the review and update of Uganda\'s National Trade Policy (2025) and the accompanying policy review report through targeted legal and policy research.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Adrian Kalule',
      occupation: 'Associate | Advocate',
      image: {
        src: '/images/team/adrian-kalule.png',
        alt: 'Adrian Kalule',
      },
      bio: [
        'Adrian Kalule is an Associate with a growing practice in dispute resolution, litigation, and arbitration, complemented by corporate and regulatory advisory work. He holds a Postgraduate Diploma in Legal Practice from the Law Development Centre and a Bachelor of Laws (LLB) from Makerere University.',
        'Adrian advises clients on resolving commercial, regulatory, and policy-related disputes through litigation, arbitration, and mediation. His work includes drafting pleadings and submissions, supporting domestic and international arbitration proceedings, participating in negotiations and mediations, and conducting dispute-focused legal research. He also has practical experience supporting arbitral tribunals and serving as a rapporteur in professional dispute resolution settings.',
        'In corporate, regulatory, and transactional advisory, Adrian advises on contract drafting, review, and negotiation; regulatory compliance; transaction support; and general corporate advisory, including banking and finance-related legal research. His practice integrates risk mitigation and dispute prevention strategies, enabling clients to structure transactions and compliance frameworks that reduce exposure to litigation and regulatory enforcement.',
        'Through his role at Handel, Adrian contributes to policy-oriented legal research and advisory, particularly at the intersection of digital regulation and governance, data protection and technology law, and inclusive development and regulatory reform. He has supported stakeholder consultations, regulatory assessments, and the preparation of analytical reports for development-focused projects.',
        'Before joining Handel, Adrian gained hands-on experience in an Alternative Dispute Resolution-focused institution, where he supported arbitration, commercial mediation and negotiation proceedings through to settlement. He has also worked in public interest law, legislative review, and human rights monitoring, strengthening his litigation research and advocacy skills.',
        'Adrian has published on law, governance, and public policy issues and is a member of the East African Law Society Technology & Media Committee and the Young ICCA Community.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Tumwebaze Charity',
      occupation: 'Office Administrator',
      image: {
        src: '/images/team/charity.png',
        alt: 'Tumwebaze Charity',
      },
      bio: [
        'Tumwebaze Charity is the Office Administrator, providing essential administrative and operational support that ensures the firm\'s day-to-day functions run efficiently and professionally.',
        'She holds a Certificate from Kampala International University and has prior experience as an Administrative Assistant and Data Clerk, supporting office operations, records management, and data handling. Her training includes computer skills, typing and printing, communication, leadership, and client handling, equipping her to manage both administrative tasks and front-office responsibilities effectively.',
        'In her role, Charity supports the firm through office coordination, document management, data entry, scheduling, and client interface support, contributing to smooth internal workflows and timely service delivery. She plays a key role in maintaining organized records, supporting staff productivity, and ensuring a welcoming and efficient office environment.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
        {
      name: 'Nahabwe Elijah',
      occupation: 'Legal Clerk & Assistant',
      image: {
        src: '/images/team/elijah.png',
        alt: 'Nahabwe Elijah',
      },
      bio: [
        'Nahabwe Elijah is a Legal Clerk and Assistant with training in practical legal processes and court support. He holds a Diploma in Law from the Law Development Centre, where he also served as a coordinator.',
        'He has hands-on experience from the Wakiso Chief Magistrates Court and from his work as a Legal Clerk at a law firm, where he supported advocates in day-to-day legal and administrative functions. His responsibilities included organizing and maintaining case files, drafting weekly office schedules, following up court matters, effecting service of court documents, and preparing affidavits of service.',
        'Nahabwe brings a strong sense of confidentiality, teamwork, and professionalism to his work and is eager to learn and grow within legal practice.',
      ],
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Our success stories',
    tagline: 'Customer comments',
  },
  testimonials: [
    {
      name: 'Jane Smith',
      job: 'UX Designer',
      testimonial: `Your templates have been a game-changer for my projects. They're not just beautifully designed; they're also incredibly easy to customize. Thanks to your templates, I've been able to save time and deliver stunning websites to my clients.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Frontend Developer',
      testimonial: `I can't say enough good things about your Next.js and Tailwind CSS templates. As a frontend developer, I appreciate the clean and well-organized code. These templates have significantly sped up my development process, and the results are always impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Marketing Manager',
      testimonial: `This templates have made our marketing campaigns stand out. The responsiveness and performance of the websites we've built with them have boosted our conversion rates. Thank you for helping us shine in the digital world!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
    {
      name: 'Michael Clark',
      job: 'Startup Founder',
      testimonial: `I stumbled upon your templates while looking for a way to launch my startup quickly. Your templates not only saved me valuable time but also gave my business a professional and modern online presence. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Michael Clark',
      },
      href: '/',
    },
    {
      name: 'Linda Johnson',
      job: 'Freelance Web Designer',
      testimonial: `I've been using your templates for my freelance projects, and my clients are always thrilled with the results. The templates are not only visually appealing but also user-friendly, making my job much easier.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Linda Johnson',
      },
      href: '/',
    },
    {
      name: 'David Rogers',
      job: 'E-commerce Entrepreneur',
      testimonial: `The speed and SEO-friendliness of the websites I've built with these templates have led to increased traffic and sales. I couldn't be happier!`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'David Rogers',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contact us',
    tagline: 'Contact info',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: handel@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Introduce your name',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Introduce your email address',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    // checkboxes: [
    //   {
    //     label: 'Have you read our privacy policy?',
    //     value: '',
    //   },
    // ],
    btn: {
      title: 'Contact us',
      type: 'submit',
    },
  },
};

// Pro Bono & Community Engagement data on About page *******************
export const proBonoAbout = {
  id: 'probono-on-about',
  hasBackground: true,
  header: {
    title: 'Pro Bono & Community Engagement',
    subtitle:
      'Access to justice and meaningful community engagement sit at the heart of our mission. We believe that legal expertise and policy knowledge should serve not only commercial clients but also those who need it most.',
    tagline: 'Giving Back',
  },
  content:
    'Handel is committed to promoting access to justice, supporting vulnerable communities, and contributing to legal and policy reforms that advance the public good. We dedicate significant resources to pro bono legal services and community-driven initiatives.',
  images: [
    {
      src: '/images/community/cake-cutting.jpeg',
      alt: 'Community legal workshop',
      // caption: 'Legal literacy workshops for small business owners',
    },
    {
      src: '/images/community/crafted-hand-bags.jpeg',
      alt: 'Youth empowerment program',
      // caption: 'Youth empowerment and rights education',
    },
    {
      src: '/images/community/group-2.jpeg',
      alt: 'Women farmers training',
      // caption: 'Supporting women farmers with trade compliance training',
    },
    {
      src: '/images/community/group.jpeg',
      alt: 'Community legal clinic',
      // caption: 'Free legal clinics in rural communities',
    },
    {
      src: '/images/community/kalule-speaking.jpeg',
      alt: 'Legal aid partnership',
      // caption: 'Partnerships with NGOs for access to justice',
    },
    {
      src: '/images/community/mable-speaking.jpeg',
      alt: 'Policy reform advocacy',
      // caption: 'Advocating for inclusive trade and investment policies',
    },
  ],
};

// Pro Bono Focus Areas data on About page *******************
export const proBonoFocusAbout = {
  id: 'probono-focus-on-about',
  hasBackground: false,
  header: {
    title: 'Our Pro Bono Commitment',
    subtitle:
      'We dedicate substantial resources to advancing access to justice, supporting vulnerable communities, and promoting legal and policy reforms in the public interest.',
  },
  columns: 3 as const,
  items: [
    {
      title: 'Access to Justice for Marginalized Communities',
      description:
        'Representing individuals and communities facing barriers to legal representation, including women, youth, persons with disabilities, and rural populations on issues such as land rights, labor rights, and discrimination.',
      icon: IconUsers,
    },
    {
      title: 'Legal Literacy & Capacity Building',
      description:
        'Conducting workshops, trainings, and outreach programs to educate communities, SMEs, and civil society organizations about their legal rights, trade compliance requirements, and dispute resolution mechanisms.',
      icon: IconBook,
    },
    {
      title: 'Policy Reform & Legislative Advocacy',
      description:
        'Contributing to national and regional policy processes by providing technical input on trade, investment, anti-corruption, and governance reforms. Participating in public consultations and stakeholder engagement forums.',
      icon: IconScale,
    },
    {
      title: 'Support for SMEs & Informal Traders',
      description:
        'Advising small and medium enterprises and informal cross-border traders on customs procedures, regional trade frameworks, business registration, and regulatory compliance at no cost or reduced fees.',
      icon: IconBriefcase,
    },
    {
      title: 'Women Empowerment & Gender Equality',
      description:
        'Supporting women-led businesses, women farmers, and women\'s rights organizations on legal issues related to trade, land ownership, inheritance, and access to finance.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Environmental & Climate Justice',
      description:
        'Providing legal support to communities affected by environmental degradation and climate change, including representation in environmental disputes and advocacy for stronger environmental protections.',
      icon: IconHomeEco,
    },
  ],
};
