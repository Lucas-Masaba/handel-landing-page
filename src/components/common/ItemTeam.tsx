import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Team } from '~/shared/types';

const ItemTeam = ({
  name,
  occupation,
  image,
  items,
  linkHref,
  containerClass,
  imageClass,
  panelClass,
  nameClass,
  occupationClass,
  itemsClass,
}: Team) => {
  return (
    <div className={twMerge('', containerClass)}>
      {linkHref ? (
        <Link
          href={linkHref}
          aria-label={`${name} details`}
          className="block self-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-500)] rounded-md"
        >
          <Image src={image.src} width={240} height={320} alt={image.alt} className={twMerge('', imageClass)} />
        </Link>
      ) : (
        <Image src={image.src} width={240} height={320} alt={image.alt} className={twMerge('', imageClass)} />
      )}
      <div className={twMerge('', panelClass)}>
        {linkHref ? (
          <Link href={linkHref} aria-label={`${name} details`} className="block">
            <h3 className={twMerge('', nameClass)}>{name}</h3>
            <p className={twMerge('text-justify', occupationClass)}>{occupation}</p>
          </Link>
        ) : (
          <>
            <h3 className={twMerge('', nameClass)}>{name}</h3>
            <p className={twMerge('text-justify', occupationClass)}>{occupation}</p>
          </>
        )}
        <ul className={twMerge('', itemsClass)}>
          {items &&
            items.map(({ title, href, icon: Icon, iconClass }, index2) =>
              Icon && href && (
                <li
                  key={`team-${index2}`}
                  className="flex items-center justify-center m-1 rounded text-primary-700 hover:text-gray-500"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={title as string}
                    className={twMerge(
                      "flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 dark:text-white dark:hover:bg-[var(--brand-primary-600)] dark:hover:text-[var(--brand-accent-500)] hover:bg-[var(--brand-primary-600)] hover:text-[var(--brand-accent-500)]",
                      iconClass,
                    )}
                  >
                    <Icon className='h-6 w-6 p-0.5' />
                  </a>
                </li>
              ),
            )}
        </ul>
      </div>
    </div>
  );
};

export default ItemTeam;
