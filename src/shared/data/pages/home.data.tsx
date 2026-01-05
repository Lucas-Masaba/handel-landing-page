import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCircle,
  IconClock,
  IconComponents,
  IconCirclesRelation,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconScale,
  IconBriefcase,
  IconTrendingUp,
  IconFileText,
  IconUsers,
  IconShield,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import tradeImg from 'public/images/display-images/trade.jpg';
import africaMap from 'public/images/display-images/africa-map.png';
import hammerImg from 'public/images/display-images/hammer.jpg';
import handshakeImg from 'public/images/display-images/handshake.png';
import workingImg from 'public/images/display-images/working.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: 'Handel\nAdvocates I Global Consulting',
  subtitle: 'Driving Regional and International Success Through Law and Policy',
  callToAction2: {
    text: 'Explore Our Services',
    href: '#practice-areas',
  },
  image: {
    src: heroImg,
    alt: 'Handel Advocates',
  },
};

// ABOUT SECTION - Exact content as provided
// ABOUT HANDEL SECTION - Exact content as provided
export const aboutHandel: ContentProps = {
  id: 'about-handel',
  hasBackground: true,
  // header: {
  //   title: 'Navigating Trade Across Uganda, the EAC, COMESA & Beyond',
  // },
  content: `In today's fast-evolving global and regional marketplace, businesses operating in Uganda and across Africa face a multifaceted legal landscape shaped by domestic legislation, regional economic communities, and global trade rules. As cross-border value chains deepen and regulatory frameworks become more intricate, companies, governments, and development institutions require strategic legal counsel that understands the unique interplay between international, regional, and national trade regimes.

Handel Advocates is a premier Ugandan law firm offering elite legal services across international trade, corporate and commercial law, investment, regulatory compliance, and cross-border advisory. We are uniquely positioned to support clients operating in Uganda, the East African Community (EAC), the Common Market for Eastern and Southern Africa (COMESA), and the broader African and global market.

Our work combines deep legal insight, policy fluency, and a commercial mindset that enables clients to thrive in dynamic, interconnected business environments.`,
  image: {
    src: africaMap,
    alt: 'About Handel',
  },
  isReversed: false,
};

// INTEGRATED MODEL SECTION - Exact content as provided
export const integratedModel: ContentProps = {
  id: 'integrated-model',
  hasBackground: false,
  header: {
    title: 'Handel - Where Law, Policy, and Strategy Converge',
  },
  content: `As global markets evolve and the regulatory, developmental, and sustainability challenges facing governments and businesses intensify, legal compliance alone is no longer sufficient. Organizations require holistic, multidisciplinary support that addresses legal, policy, economic, and strategic dimensions of their operations.

To meet this need, Handel Advocates works closely with its affiliated consulting arm, Handel Global Consulting (HGC), to deliver comprehensive, end-to-end advisory and implementation support across key areas affecting international trade, governance, climate transitions, investment, and financial integrity.

Together, the two entities offer a unified platform that combines:`,
  items: [
    {
      title: 'Legal excellence (Handel Advocates)',
    },
    {
      title: 'Policy, economic and technical advisory expertise (Handel Global Consulting).',
    },
  ],
  contentAfterItems: `This integrated model enables us to deliver solutions that are not only compliant with local, regional, and international legal frameworks but also strategically sound, operationally practical, and aligned with global best practices.`,
  image: {
    src: hammerImg,
    alt: 'Integrated Model',
  },
  isReversed: true,
};

// COMBINED ADVANTAGES SECTION - Exact content as provided
export const combinedAdvantages: ContentProps = {
  id: 'combined-advantages',
  hasBackground: true,
  content: `Handel Advocates and Global Consulting combines:`,
  items: [
    {
      title: 'Deep local roots in Uganda',
    },
    {
      title: 'Regional practice spanning the EAC, COMESA, and SADC, with pan-African reach through the AfCFTA',
    },
    {
      title: 'International-level expertise on trade, investment and cross-border commerce',
    },
    {
      title: 'A multidisciplinary team of lawyers, economists, and regulatory professionals',
    },
  ],
  contentAfterItems: `Our clients choose us for our strategic insight, rigorous legal analysis, and commitment to practical, results-oriented representation.`,
  image: {
    src: workingImg,
    alt: 'Combined Advantages',
  },
  isReversed: false,
};

// INTERNATIONAL TRADE SECTION - Exact content as provided
export const internationalTradePractice: ContentProps = {
  id: 'international-trade',
  hasBackground: false,
  header: {
    title: 'International Trade & Regional Integration Practice',
  },
  content: `Handel Advocates' International Trade & Regional Integration Practice provides sophisticated, end-to-end advice to help clients maximize opportunities and mitigate risks in Uganda, across the East African Community (EAC), within COMESA, and under the African Continental Free Trade Area (AfCFTA), as well as before global bodies such as the WTO.

Backed by a team of experienced trade lawyers, policy experts, economists, and regulatory specialists, we support clients in navigating complex customs processes, regional market access rules, trade remedies, export controls, investment measures, and cross-border disputes. With deep local insight and regional reach, we deliver practical, commercially grounded solutions to the most challenging international trade matters.`,
  image: {
    src: tradeImg,
    alt: 'International Trade',
  },
  isReversed: true,
};

// WHY CLIENTS CHOOSE HANDEL - Exact content as provided
export const whyClientsChoose: ContentProps = {
  id: 'why-clients-choose',
  hasBackground: true,
  header: {
    title: 'Why Clients Choose Handel',
  },
  content: `Our multidisciplinary expertise and strategic positioning within the region enable us to offer:`,
  items: [
    {
      title: "Deep Understanding of Uganda's Trade & Investment Regulatory Framework",
      description: `Including the Uganda Revenue Authority (URA) customs procedures, standards regulations (UNBS), investment licensing, export promotion requirements, and sector-specific compliance.`,
    },
    {
      title: 'Regional Market Integration Expertise',
      description: `We advise extensively on the EAC Customs Union, COMESA Treaty, AfCFTA and related legal instruments, helping businesses leverage regional value chains and opportunities.`,
    },
    {
      title: 'Strong Government & Institutional Insight',
      description: `Several members of our team have previously served in or advised EAC Secretariat organs, COMESA institutions, Regional trade negotiation bodies, International Development Organizations, National governments and ministries, Regional economic community institutions, Private sector associations, Manufacturers, importers, and exporters, Multinational corporations operating in East and Southern Africa, NGOs and development institutions, Logistics, transport, and distribution companies, and Investors and financial institutions.

This experience gives us credibility and informed perspective when engaging policymakers on behalf of our clients.`,
    },
    {
      title: 'Cross-Border, Cross-Sector Capability',
      description: `From agriculture and manufacturing to logistics, telecoms, energy, and extractives, we support clients across all major industries impacted by trade rules.`,
    },
  ],
  image: {
    src: handshakeImg,
    alt: 'Why Clients Choose Handel',
  },
  isReversed: false,
};

// PRACTICE AREAS - Exact content as provided, expandable
export const practiceAreas: FAQsProps = {
  id: 'practice-areas',
  hasBackground: false,
  header: {
    title: 'Practice Areas',
  },
  items: [
    {
      title: 'International Trade & Regional Integration',
      description: `Handel Advocates' International Trade & Regional Integration Practice provides sophisticated, end-to-end advice to help clients maximize opportunities and mitigate risks in Uganda, across the East African Community (EAC), within COMESA, and under the African Continental Free Trade Area (AfCFTA), as well as before global bodies such as the WTO.

Backed by a team of experienced trade lawyers, policy experts, economists, and regulatory specialists, we support clients in navigating complex customs processes, regional market access rules, trade remedies, export controls, investment measures, and cross-border disputes. With deep local insight and regional reach, we deliver practical, commercially grounded solutions to the most challenging international trade matters.
a. Trade Remedies & Trade Defense

As African markets expand and global competition intensifies, allegations of unfair trade practices such as dumping or prohibited subsidies have become more common. Handel Advocates assists governments, industries, and private sector players in navigating the full spectrum of trade remedy laws and investigations.

Our Capabilities Include:
    • Anti-dumping, countervailing duty, and safeguard investigations in Uganda, EAC, COMESA, and other African jurisdictions
    • Preparing petitions, responses, industry data, economic injury analyses, and verification support
    • Representing clients before trade authorities, including:
        - EAC Secretariat and the Committee on Trade Remedies
        - COMESA Competition Commission (CCC)
    • Litigation and advisory support related to regional and international appeal mechanisms
    • Strategic advice for exporters facing trade barriers abroad

Handel Advocates is one of the few Ugandan law firms offering full-service trade remedies representation across both domestic and regional forums.

b. Customs, Tariffs & Supply Chain Compliance

Complex customs procedures, changing tariff schedules, and evolving origin rules can affect both cost and competitiveness.

We Advise On:
    • Import/export regulations under the EAC Customs Management Act
    • Rules of origin under EAC, COMESA, AfCFTA, AGOA, and EU-EPA regimes
    • Customs valuation, classification, and tariff optimization
    • Duty drawback and exemption schemes
    • Free zones, bonded warehousing, and special economic zone compliance
    • URA customs audits, investigations, disputes, and enforcement actions
    • Cross-border supply chain structuring and risk mitigation

We help clients build compliant, efficient trade flows across the region and beyond.

c. Regional Trade Agreement (RTA) Advisory

Africa's trade landscape is shifting rapidly, with newer frameworks such as the AfCFTA creating unprecedented market opportunities.

Handel Advocates Provides Strategic Advisory On:
    • EAC Common Market & Customs Union rules
    • COMESA customs, competition, and trade facilitation frameworks
    • AfCFTA Protocols (Goods, Services, Dispute Settlement, Investment, Competition, Digital Trade)
    • Negotiation support for governments and private sector associations
    • Market access assessments and trade barrier analysis
    • Regional content requirements & value chain localization

We advise clients on how to position themselves for maximum advantage in Africa's fast-integrating markets.

d. WTO & International Trade Dispute Settlement

Handel Advocates offers sophisticated guidance to governments, private sector associations, and corporations in matters implicating WTO rules, including dispute settlement.

Our Work Includes:
    • Legal opinions on WTO consistency of national or regional measures
    • Preparing third-party or observer submissions in WTO panel proceedings
    • Advising African governments on safeguarding rights under WTO agreements
    • Supporting businesses seeking WTO-compliant strategies to challenge foreign market barriers
    • Coordinating with international counsel for formal WTO litigation

Our WTO practice brings global-level rigor aligned with regional realities.

e. Export Controls, Sanctions & Investment Screening

With increasing international scrutiny on cross-border transactions and emerging global security concerns, export controls and sanctions compliance are critical.

Our Services Cover:
    • Sanctions assessments under U.S., EU, UK, and UN regimes
    • Advisory on dual-use goods and technology controls
    • Compliance program design and training
    • Guidance on Uganda's Investment Code, foreign ownership restrictions, and sectoral approvals
    • Screening of strategic transactions for national security implications
    • Representation in investigations, audits, and administrative proceedings

f. Competition, Subsidies & State Aid under COMESA, EAC AfCFTA & National Law

Competition Commissions across the region play a significant role in merger control, restrictive practices, and subsidy oversight across African states.

We Provide:
    • Merger notifications under the regional and national competition laws
    • Advice on subsidies, state aid, and trade-distorting practices affecting cross-border commerce
    • Representation in investigations, hearings, and administrative actions
    • Advisory on government support programs and compliance obligations

g. Investment, Trade, and Cross-Border Commercial Disputes

Our dispute settlement team handles complex commercial, trade, and regulatory disputes across multiple forums, including:
    • National courts in Uganda and other African jurisdictions
    • EACJ (East African Court of Justice)
    • COMESA Court of Justice
    • AfCFTA Dispute Settlement Mechanism (when operational)
    • International arbitration centers (ICC, ICSID, UNCITRAL, KIAC, NCIA)
    • WTO-related advisory and coordination roles

We help governments and industries defend regulatory decisions, challenge trade barriers, and enforce treaty-based rights.

h. Sector-Specific International Trade Advisory

We assist clients in sectors uniquely affected by trade rules, including:
    • Agriculture & agribusiness exports (coffee, tea, dairy, fruits, floriculture)
    • Manufacturing (steel, plastics, textiles, electronics)
    • Oil, gas & energy
    • Mining & critical minerals
    • Transport & logistics
    • Digital services & e-commerce
    • Pharmaceuticals & medical products
    • Telecommunications & technology

Our cross-sector expertise helps clients integrate trade rules into broader corporate strategy.`,
    },
    {
      title: 'Business & Commercial Transactions',
      description: `Modern commerce requires legally sound, commercially viable structures. Handel Advocates offers comprehensive guidance on local, regional, and international business transactions.

Our Services Include:
    • Drafting, reviewing and negotiating commercial contracts
    • Joint ventures and strategic alliances
    • Distribution, agency, franchising & licensing arrangements
    • Supply and procurement contracts across regional value chains
    • Commercial risk assessment & mitigation strategies
    • Cross-border trade & service agreements within EAC, COMESA and AfCFTA
    • Contract enforcement and dispute resolution

Our commercial advisory blends legal precision with practical business understanding.`,
    },
    {
      title: 'Corporate Law & Governance',
      description: `We assist companies throughout their lifecycle from formation to growth, restructuring, and compliance.

Corporate Law Services:
    • Company formation and incorporation in Uganda and regional jurisdictions
    • Corporate restructuring, reorganizations and mergers & acquisitions
    • Shareholder agreements, corporate resolutions & governance frameworks
    • Board advisory, directors' duties, and risk oversight
    • Corporate secretarial services
    • Corporate compliance with Uganda Companies Act, EAC, COMESA and AfCFTA rules

We help organizations build strong governance foundations to support sustainable growth.`,
    },
    {
      title: 'Anti-Corruption & Compliance',
      description: `Uganda and regional markets increasingly enforce stringent anti-corruption laws, influenced by global standards such as the FCPA (USA), the UK Bribery Act, the OECD guidelines, and African Union conventions.

We Support Clients With:
    • Corruption risk assessments and compliance program design
    • Due diligence, integrity vetting and third-party audits
    • Investigation of bribery, procurement fraud, and misconduct
    • Representation in anti-corruption enforcement proceedings
    • Compliance with the Leadership Code Act, Inspectorate of Government Act & Public Procurement laws
    • Anti-corruption training for government contractors and multinational teams

We help clients proactively manage integrity risks in both public and private-sector engagements.`,
    },
    {
      title: 'Anti–Money Laundering (AML) & Countering the Financing of Terrorism (CFT)',
      description: `With Uganda's increased AML enforcement and FATF global standards, compliance is essential for banks, fintechs, real estate players, professional services, casinos, NGOs and cross-border businesses.

Our AML Services Include:
    • Compliance with Uganda's Anti-Money Laundering Act & FIA regulations
    • AML program development, internal controls & reporting systems
    • Customer Due Diligence (CDD) & Know Your Customer (KYC) frameworks
    • Cross-border financial compliance for regional transactions
    • Handling inspections, investigations & administrative sanctions
    • Advice for digital payment systems, remittances and fintech platforms

We help clients maintain regulatory integrity while enabling seamless financial operations.`,
    },
    {
      title: 'Digital Trade, Technology & E-Commerce',
      description: `As Uganda and the region accelerate digital transformation, regulatory clarity is critical.

We Provide Legal Support Across:
    • Digital trade and e-commerce regulation in Uganda, EAC, COMESA & AfCFTA
    • Data protection, cybersecurity & cross-border data flows
    • Fintech licensing and digital financial services compliance
    • Online consumer protection & digital tax obligations
    • Software licensing, cloud contracts & IT procurement
    • Digital platforms, online marketplaces & digital trade protocols

Our digital economy practice helps clients innovate confidently and sustainably.`,
    },
    {
      title: 'Real Estate, Land & Property Law',
      description: `Handel Advocates guides clients through one of the most sensitive legal areas in Uganda, land and real estate, where clarity and due diligence are non-negotiable.

Real Estate & Property Services:
    • Land acquisition, transfer, titling & due diligence
    • Commercial and residential real estate transactions
    • Lease agreements, tenancy issues & landlord-tenant representation
    • Real estate investment structuring for local and foreign investors
    • Mortgages, charges, and property financing arrangements
    • Dispute resolution over land titles, boundaries, fraud & compulsory acquisition

We deliver secure transactions backed by rigorous verification and protection of client interests.`,
    },
    {
      title: 'Immigration & Mobility Law',
      description: `As businesses expand across borders, the mobility of staff, investors, and expatriates becomes essential.

We Advise On:
    • Work permits, investor permits & residence visas
    • Immigration compliance for multinational employers
    • Short-term business visas & special passes
    • Regional travel facilitation under EAC frameworks
    • Appeals and representation before immigration authorities
    • Corporate mobility strategies for foreign investments and regional operations

Our team ensures smooth, compliant relocation and workforce planning.`,
    },
    {
      title: 'Foreign Direct Investment (FDI) & Market Entry',
      description: `Uganda and East Africa offer substantial investment opportunities in sectors such as energy, agriculture, construction, fintech, mining, telecoms and infrastructure.

Our FDI Services Include:
    • Investment structuring & establishment
    • Navigating Uganda Investment Authority (UIA) processes
    • Incentives, tax planning & special economic zone frameworks
    • Cross-border investment under EAC, COMESA & AfCFTA protocols
    • Sector-specific licensing (oil & gas, telecoms, banking, manufacturing, etc.)
    • Public-private partnerships (PPPs) and government contracting
    • Joint ventures with local partners & compliance with local content laws

We help investors enter African markets with clarity, protection, and strategic advantage.`,
    },
  ],
};

// HANDEL GLOBAL CONSULTING - Exact content as provided, expandable
export const globalConsultingAreas: FAQsProps = {
  id: 'global-consulting',
  hasBackground: true,
  header: {
    title: 'Handel Global Consulting – Areas of Expertise',
  },
  items: [
    {
      title: 'Trade Policy, Regional Integration & Economic Competitiveness',
      description: `HGC provides high-level, data-driven advisory services to governments, regional organizations, development partners, private sector associations, and multinational corporations.

Consulting Services Include:
    • Trade policy analysis and reform recommendations
    • Support to EAC, COMESA, SADC, AfCFTA and WTO negotiations
    • Impact assessments for trade agreements and tariff reforms
    • Market access studies and sector competitiveness analysis
    • Trade facilitation and customs modernization projects
    • Global value chain mapping and export development strategies

By combining HGC's policy expertise with Handel Advocates' legal capabilities, clients receive holistic guidance that blends economic strategy with regulatory precision.`,
    },
    {
      title: 'Climate, Sustainability & Environmental Policy Advisory',
      description: `Climate governance is becoming a central pillar of national development strategies and international cooperation. HGC supports both public and private clients in navigating emerging climate obligations and opportunities.

We Advise On:
    • Climate policy development, national climate strategies & implementation
    • Climate finance access (Green Climate Fund, Adaptation Fund, bilateral donors)
    • Carbon markets, offsets & pricing
    • Environmental and social governance (ESG) compliance frameworks
    • Energy transition strategies & green industrialization
    • Climate-related trade measures affecting exports and industrial competitiveness

HGC's climate team works closely with Handel Advocates on the legal compliance aspects of environmental regulation and climate-related trade.`,
    },
    {
      title: 'International Development & Public Policy Advisory',
      description: `Governments, NGOs, development agencies, and regional organizations rely on HGC for advisory work grounded in deep contextual understanding and global best practice.

Our Expertise Covers:
    • Policy formulation & regulatory reform
    • Institutional strengthening and capacity development
    • Public sector modernization and performance management
    • Economic policy, public finance, and budget analysis
    • Program design, implementation support & monitoring and evaluation (M&E)
    • Governance and accountability systems

We regularly partner on projects commissioned by development partners, foundations, and multilateral institutions.`,
    },
    {
      title: 'Anti-Money Laundering (AML), Counter-Terrorist Financing (CFT) & Financial Integrity Consulting',
      description: `Beyond legal compliance, institutions often require technical support, systems design, and operational implementation to meet AML/CFT standards effectively.

HGC Provides:
    • AML/CFT risk assessments for banks, fintechs, NGOs & high-risk sectors
    • Development of AML/CFT policies, internal controls & risk management frameworks
    • Design and enhancement of KYC, CDD, EDD and transaction monitoring systems
    • Support for regulatory reporting, compliance audits & remediation plans
    • Capacity building, training & simulations for frontline staff
    • FATF compliance advisory for governments and regulators

Together with Handel Advocates, who handle legal interpretation, investigations, and enforcement matters, we offer full-spectrum AML/CFT solutions.`,
    },
    {
      title: 'Anti-Corruption, Integrity & Good Governance Consulting',
      description: `Corruption undermines economic growth, investor confidence, and institutional legitimacy. HGC supports reforms and internal systems that enhance transparency and accountability.

Consulting Services Include:
    • National and institutional anti-corruption strategy development
    • Integrity risk mapping & corruption vulnerability assessments
    • Public procurement audits & reform initiatives
    • Compliance systems for corporations, NGOs, and government entities
    • Ethics training & governance strengthening
    • Support to anti-corruption agencies and oversight bodies

Handel Advocates complements this work with legal enforcement, investigation support, and compliance opinions, creating a dual-strength model for clients.`,
    },
    {
      title: 'Finance, Investment & Development Funding Advisory',
      description: `HGC supports governments, private-sector entities, DFIs, and investors in navigating challenges in finance and development funding.

We Offer:
    • Project finance advisory
    • Structuring for blended finance, PPPs, and infrastructure investments
    • Investment climate and regulatory assessments
    • Capital mobilization strategies for development projects
    • Impact investment and ESG-linked finance guidance
    • Support with donor-funded program implementation

In collaboration with Handel Advocates, we ensure that investment processes follow all legal, regulatory, and compliance obligations.`,
    },
  ],
};

// PRO BONO SECTION - Exact content as provided
export const proBono: ContentProps = {
  id: 'pro-bono',
  hasBackground: false,
  header: {
    title: 'Pro Bono & Community Engagement',
  },
  content: `At Handel Advocates, our commitment to excellence extends beyond client representation to meaningful service within the communities we operate. Our lawyers and key experts deliberately set aside time each year to undertake structured pro bono initiatives aimed at empowering women-led micro businesses and supporting vulnerable individuals and households.`,
  items: [
    {
      title: 'Capacity Building Beyond the Classroom',
      description: 'Our pro bono work is centered on practical capacity building for micro and small enterprises, particularly those owned or managed by women. Through tailored clinics, mentorship sessions, and hands-on advisory engagements, we provide support in areas such as basic business structuring and governance, financial literacy, record keeping, and compliance, market access, contracting, and risk awareness, regulatory guidance relevant to informal and emerging enterprises. These engagements are designed to equip beneficiaries with skills and confidence that translate into sustainable livelihoods.',
    },
    {
      title: 'Holistic Community Support',
      description: 'Recognizing that economic vulnerability often extends beyond the enterprise, our initiatives go further than professional training. Where need is identified, Handel Advocates complements capacity building with direct financial and in-kind support, including targeted financial assistance to stabilize micro businesses, provision of essential groceries and household support, and assistance that reaches families and dependents, not only business owners. This integrated approach ensures that short-term pressures do not undermine long-term empowerment.',
    },
    {
      title: 'A Deliberate Commitment',
      description: 'Our pro bono and community engagement work is not incidental. It reflects a deliberate institutional commitment to responsible practice, inclusive growth, and shared prosperity. By combining professional expertise with compassion and practical support, Handel Advocates seeks to contribute to stronger, more resilient communities while upholding the highest standards of professionalism and integrity.',
    },
  ],
  slideshow: [
    { src: '/images/community/cake-cutting.jpeg', alt: 'Cake cutting ceremony' },
    { src: '/images/community/crafted-hand-bags.jpeg', alt: 'Crafted hand bags' },
    { src: '/images/community/group-2.jpeg', alt: 'Community group photo' },
    { src: '/images/community/group.jpeg', alt: 'Group gathering' },
    { src: '/images/community/kalule-speaking.jpeg', alt: 'Kalule speaking' },
    { src: '/images/community/mable-speaking.jpeg', alt: 'Mable speaking' },
    { src: '/images/community/product-display.jpeg', alt: 'Product display' },
    { src: '/images/community/sit-down-discussion.jpeg', alt: 'Sit down discussion' },
    { src: '/images/community/sit-down-with-products.jpeg', alt: 'Sit down with products' },
    { src: '/images/community/speakers.jpeg', alt: 'Speakers' },
  ],
  isReversed: false,
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Handel</span>
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'An Integrated Model',
    subtitle:
      'Handel Advocates | Global Consulting bridges law, policy, and strategy to deliver holistic solutions for clients operating across Uganda, the EAC, SADC, COMESA, and international markets.',
    tagline: 'Why Handel',
  },
  content:
    'We combine elite legal expertise with strategic advisory, offering a seamless experience that addresses both legal obligations and strategic opportunities.',
  items: [
    {
      title: 'Integrated Legal & Consulting Services',
      description:
        'Our team delivers both legal representation and strategic policy advisory, ensuring clients get comprehensive support across the full spectrum of their needs.',
      icon: IconFileText,
    },
    {
      title: 'Regional & International Reach',
      description:
          'Deep understanding of Uganda, EAC, SADC, COMESA, and AfCFTA frameworks, plus global trade rules and international best practices.',
      icon: IconMapPin,
    },
    {
      title: 'Multidisciplinary Expertise',
      description:
        'Lawyers, economists, trade policy experts, and regulatory professionals working together to deliver comprehensive solutions.',
      icon: IconUsers,
    },
    {
      title: 'Client-Centric Approach',
      description:
        "We tailor our services to each client's unique needs, whether multinational corporation, government, SME, or development partner.",
      icon: IconCircle,
    }
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Why Clients Choose Handel',
  items: [
    {
      title: 'Deep Local & Regional Expertise',
      description: "Grounded understanding of Uganda's legal and regulatory environment, combined with extensive regional experience across EAC, SADC, and COMESA.",
      icon: IconMapPin,
    },
    {
      title: 'International Standards',
      description: 'Our team brings global best practices, WTO-aligned strategy, and international compliance expertise to every engagement.',
      icon: IconScale,
    },
    {
      title: 'Strategic Business Focus',
      description: 'We understand that legal and policy advice must serve broader business objectives—driving growth, reducing risk, and creating competitive advantage.',
      icon: IconTrendingUp,
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully representing multinationals, SMEs, governments, and development partners across complex legal and policy challenges.',
      icon: IconUsers,
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Our Process',
    subtitle: 'A proven, structured approach that combines strategic thinking with tactical execution to deliver exceptional outcomes.',
  },
  items: [
    {
      title: 'Initial Consultation',
      description:
        'We begin with a comprehensive discussion to understand your challenges, objectives, and unique circumstances.',
      icon: IconArrowDown,
    },
    {
      title: 'Deep Discovery & Analysis',
      description:
        'Our team conducts thorough research and due diligence, gathering all necessary information and documentation.',
      icon: IconArrowDown,
    },
    {
      title: 'Strategy Development',
      description:
        'We craft a tailored strategy that addresses your specific needs, leveraging our dual expertise in consulting and advocacy.',
      icon: IconArrowDown,
    },
    {
      title: 'Completion & Support',
      description: 'After successful completion, we provide ongoing support and remain available for future needs.'
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our clients say about us',
    subtitle:
      'Hear from clients who have achieved measurable results through our consulting and advocacy services',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'CFO',
      testimonial: `Handel's advocacy services saved our company over $2M in the first year. Their expertise in navigating complex trade regulations is unmatched.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'VP Of Operations',
      testimonial: `The consulting team at Handel transformed our international expansion strategy. We're now operating in 12 new markets with full compliance.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Director Of Government Affairs',
      testimonial: `Their advocacy work was instrumental in shaping favorable policy changes. Handel understands both the political landscape and business needs.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'CEO',
      testimonial: `Working with Handel's consultants gave us the strategic clarity we needed. Their insights on regulatory compliance were game-changing.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'YN',
      testimonial: `Handel's dual expertise in consulting and legal advocacy provided us with a comprehensive solution that addressed all our challenges effectively.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Marketing Manager',
      testimonial: `Lisa's innovative marketing strategies significantly boosted our brand visibility and customer engagement.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'The Team',
    subtitle:
      'A distinguished team of consultants and advocates with decades of combined experience in finance, law, and strategic advisory.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Mable Kisaka',
      occupation: 'Lead Advocate',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
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
      name: 'Toby Foster',
      occupation: 'Senior Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
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
      name: 'Clark Bourne',
      occupation: 'Financial Advisory Director',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
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
      name: 'Bella Chase',
      occupation: 'Senior Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
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

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'We typically respond to all inquiries within 24 hours during business days.',
    tagline: 'Contact',
  },
  content:
    'Ready to transform your business or address your legal needs? Our team is here to help.',
  items: [
    {
      title: 'Our Address',
      description: ['Handel House', 'Plot 576', 'Benadina Close', 'Behind the American Embassy', 'Nsambya'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +256763480363', 'Mail: partners@handeladvocates.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  items: [
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
