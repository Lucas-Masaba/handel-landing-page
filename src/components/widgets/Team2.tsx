import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {teams.map(({ name, occupation, image, items }, index) => (
          <div key={`item-team-two-${index}`} className="p-2">
            <ItemTeam
              name={name}
              occupation={occupation}
              image={image}
              items={items}
              containerClass="card flex flex-col justify-center w-full px-8 my-12 text-center"
              imageClass="self-center flex-shrink-0 w-36 h-36 -mt-20 bg-center bg-cover rounded-full dark:bg-[var(--brand-primary-700)] ring-4 ring-[var(--brand-primary-50)] object-cover"
              panelClass="flex-1 mt-6"
              nameClass="text-base font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)]"
              occupationClass="text-sm text-body-color"
              itemsClass="flex justify-center relative px-3 pt-5 mx-5 overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Team;
