import {
  HeroProps,
  ContentProps,
  FAQsProps,
} from '../../types';
import {
  IconGavel,
  IconContract,
  IconBuildingCommunity,
  IconShieldCheck,
  IconMoneybag,
  IconNetwork,
  IconHome,
  IconPlane,
  IconTrendingUp,
  IconLeaf,
  IconUsers,
  IconShieldHeart,
  IconCreditCard,
} from '@tabler/icons-react';
import heroImg from '~/assets/images/hero.jpg';

// HERO - Exact content as provided
export const heroHome: HeroProps = {
  title: 'Handel\nAdvocates I Global Consulting',
  subtitle: 'Driving Regional and International Success Through Law and Policy',
  callToAction2: {
    text: 'Explore Our Services',
    href: '#international-trade',
  },
  image: {
    src: heroImg,
    alt: 'Handel Advocates',
  },
};

// ABOUT SECTION - Exact content as provided
export const aboutHandel: ContentProps = {
  id: 'about-handel',
  header: {
    title: 'Navigating Trade Across Uganda, the EAC, COMESA & Beyond',
  },
  content: `In today's fast-evolving global and regional marketplace, businesses operating in Uganda and across Africa face a multifaceted legal landscape shaped by domestic legislation, regional economic communities, and global trade rules. As cross-border value chains deepen and regulatory frameworks become more intricate, companies, governments, and development institutions require strategic legal counsel that understands the unique interplay between international, regional, and national trade regimes.

Handel Advocates is a premier Ugandan law firm offering elite legal services across international trade, corporate and commercial law, investment, regulatory compliance, and cross-border advisory. We are uniquely positioned to support clients operating in Uganda, the East African Community (EAC), the Common Market for Eastern and Southern Africa (COMESA), and the broader African and global market.

Our work combines deep legal insight, policy fluency, and a commercial mindset that enables clients to thrive in dynamic, interconnected business environments.`,
};

// INTEGRATED MODEL SECTION - Exact content as provided
export const integratedModel: ContentProps = {
  id: 'integrated-model',
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
};

// COMBINED ADVANTAGES SECTION - Exact content as provided
export const combinedAdvantages: ContentProps = {
  id: 'combined-advantages',
  content: `Handel Advocates and Global Consulting combines:`,
  items: [
    {
      title: 'Deep local roots in Uganda',
    },
    {
      title: 'Regional presence across EAC, SADC and COMESA',
    },
    {
      title: 'International-level expertise on trade, investment and cross-border commerce',
    },
    {
      title: 'A multidisciplinary team of lawyers, economists, and regulatory professionals',
    },
  ],
  contentAfterItems: `Our clients choose us for our strategic insight, rigorous legal analysis, and commitment to practical, results-oriented representation.`,
};

// INTERNATIONAL TRADE SECTION - Exact content as provided
export const internationalTradePractice: ContentProps = {
  id: 'international-trade',
  header: {
    title: 'International Trade & Regional Integration Practice',
  },
  content: `Handel Advocates' International Trade & Regional Integration Practice provides sophisticated, end-to-end advice to help clients maximize opportunities and mitigate risks in Uganda, across the East African Community (EAC), within COMESA, and under the African Continental Free Trade Area (AfCFTA), as well as before global bodies such as the WTO.

Backed by a team of experienced trade lawyers, policy experts, economists, and regulatory specialists, we support clients in navigating complex customs processes, regional market access rules, trade remedies, export controls, investment measures, and cross-border disputes. With deep local insight and regional reach, we deliver practical, commercially grounded solutions to the most challenging international trade matters.`,
};

// WHY CLIENTS CHOOSE HANDEL - Exact content as provided
export const whyClientsChoose: ContentProps = {
  id: 'why-clients-choose',
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
      icon: IconGavel,
      description: `a. Trade Remedies & Trade Defense

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
      icon: IconContract,
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
      icon: IconBuildingCommunity,
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
      icon: IconShieldCheck,
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
      icon: IconMoneybag,
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
      icon: IconNetwork,
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
      icon: IconHome,
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
      icon: IconPlane,
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
      icon: IconTrendingUp,
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
      icon: IconTrendingUp,
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
      icon: IconLeaf,
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
      icon: IconUsers,
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
      icon: IconShieldHeart,
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
      icon: IconShieldCheck,
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
      icon: IconCreditCard,
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
};
