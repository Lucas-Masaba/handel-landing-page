import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import CTA from './CTA';

const ItemGrid = ({
  id,
  items,
  columns,
  defaultColumns,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGridType) => {
  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid gap-4 md:gap-6 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto'
                : (columns || defaultColumns) === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2 mx-auto'
                : (columns || defaultColumns) === 2
                ? 'sm:grid-cols-2 mx-auto'
                : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, icon: Icon, callToAction }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
                <div className="flex items-start pt-0.5 flex-shrink-0">
                  {Icon ? (
                    <Icon className={twMerge('w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3', iconClass)} />
                  ) : DefaultIcon ? (
                    <DefaultIcon className={twMerge('w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3', iconClass)} />
                  ) : null}
                </div>
                <div>
                  {title && <h3 className={twMerge('text-base font-normal', titleClass)}>{title}</h3>}
                  {description && (
                    <p
                      className={twMerge(`text-sm text-black dark:text-white ${title ? 'mt-2' : ''} text-justify`, descriptionClass)}
                    >
                      {description}
                    </p>
                  )}
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      linkClass={twMerge(
                        `${
                          title || description ? 'mt-3' : ''
                        } text-primary font-bold text-blue-600 hover:underline dark:text-gray-200 cursor-pointer`,
                        actionClass,
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemGrid;
