import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'Handel',
  callToAction: {
    text: 'Handel Global Consulting — Learn more',
    href: '/services',
  },
  callToAction2: {
    text: 'Handel Advocates — Contact legal team',
    href: '/contact',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'About',
      href: '/#about-handel',
    },
    {
      label: 'Services',
      icon: IconChevronDown,
      links: [
        // {
        //   label: 'International Trade',
        //   href: '/#international-trade',
        // },
        {
          label: 'Practice Areas',
          href: '/#practice-areas',
        },
        {
          label: 'Consulting',
          href: '/#global-consulting',
        },
      ],
    },
    // {
    //   label: 'Pro Bono',
    //   href: '/#pro-bono',
    // },
    {
      label: 'Team',
      href: '/#team-on-about',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    // {
    //   label: 'Publications',
    //   href: '/publications',
    // },
  ],
  actions: [
    {
      text: 'Contact',
      href: '/#contact',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Handel',
  // links: [
  //   {
  //     label: 'Terms & Conditions',
  //     href: '/terms',
  //   },
  //   {
  //     label: 'Privacy Policy',
  //     href: '/privacy',
  //   },
  // ],
  columns: [
    {
      title: 'Services',
      links: [
        {
          label: 'International Trade Law',
          href: '/#practice-areas',
        },
        {
          label: 'Regional Trade (EAC/COMESA)',
          href: '/#practice-areas',
        },
        {
          label: 'Corporate Law',
          href: '/#practice-areas',
        },
        {
          label: 'Investment Advisory',
          href: '/#practice-areas',
        },
        {
          label: 'Global Consulting',
          href: '/#global-consulting',
        },
      ],
    },
    {
      title: 'Firm',
      links: [
        {
          label: 'About Us',
          href: '/#about-handel',
        },
        {
          label: 'Our Team',
          href: '/#team-on-about',
        },
        {
          label: 'Projects & Case Studies',
          href: '/projects',
        },
        {
          label: 'Contact Us',
          href: '/#contact',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://x.com/handeladvocates' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/Handel' },
  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        All rights reserved
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  // links: [
  //   {
  //     label: 'Terms & Conditions',
  //     href: '/terms',
  //   },
  //   {
  //     label: 'Privacy Policy',
  //     href: '/privacy',
  //   },
  // ],
  columns: [
    {
      title: 'Address',
      texts: ['Handel House', 'Plot 576', 'Benadina Close', 'Behind the American Embassy', 'Nsambya', 'P.O.Box 4225, Kampala'],
    },
    {
      title: 'Phone',
      texts: ['Office: +256763480363'],
    },
    {
      title: 'Email',
      texts: ['Office: partners@handeladvocates.com', 'Site: https://handeladvocates.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://x.com/handeladvocates' },
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/handel-advocates-global-consulting' },
    // { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    // { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/Handel' },
  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        All rights reserved
      </span>
    </div>
  ),
};
