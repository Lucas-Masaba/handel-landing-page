import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';
import { toSlug } from '~/utils/utils';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" subtitleClass="text-justify text-left ml-0" containerClass="text-left ml-0" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {teams.map(({ name, occupation, image, items }, index) => (
          <div key={`item-team-two-${index}`} className="p-2 flex">
            <ItemTeam
              name={name}
              occupation={occupation}
              image={image}
              items={items}
              linkHref={`/team/${toSlug(name)}`}
              containerClass="card flex flex-col justify-center w-full px-8 my-12 text-center cursor-pointer"
              imageClass="self-center flex-shrink-0 w-36 h-36 -mt-12 object-cover object-top rounded-full dark:bg-[var(--brand-primary-700)] ring-1 ring-[var(--brand-primary-500)]"
              panelClass="flex-1 mt-6 flex flex-col"
              nameClass="text-base font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)]"
              occupationClass="text-sm text-body-color min-h-[3rem] flex items-center justify-center"
              itemsClass="flex justify-center relative px-3 pt-5 mx-5 overflow-hidden mt-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Team;
