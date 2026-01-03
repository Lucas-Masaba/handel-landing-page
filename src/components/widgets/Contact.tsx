'use client';

import { useEffect, useRef, useState } from 'react';
import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isFormVisible, setIsFormVisible] = useState(false);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;

    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(index));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(item);
      return observer;
    });

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    return () => {
      observers.forEach((observer, index) => {
        if (observer && itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]!);
        }
      });
      if (formRef.current) {
        formObserver.unobserve(formRef.current);
      }
    };
  }, [items]);

  return (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" containerClass="text-left ml-0" subtitleClass="ml-0 text-left" />}
    <div className="flex items-stretch justify-center">
      <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-base text-gray-600 dark:text-slate-400 text-justify">{content}</p>}
          <ul className="mb-6 md:mb-0">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li 
                  key={`item-contact-${index}`} 
                  ref={el => { if (el) itemRefs.current[index] = el; }}
                  className={`flex transition-all duration-700 ease-out ${
                    visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[var(--brand-accent-500)] text-[var(--brand-primary-600)] mt-1">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                    <h3 className="mb-2 text-base font-medium leading-6 text-[var(--brand-primary-600)] dark:text-white text-justify">{title}</h3>
                    {typeof description === 'string' ? (
                      <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400 text-justify">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, index) => (
                        <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400 text-justify">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div 
          ref={formRef}
          className={`transition-all duration-700 ease-out delay-200 ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" />
        </div>
      </div>
    </div>
  </WidgetWrapper>
  );
};

export default Contact;
