import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';
import { toSlug } from '~/utils/utils';

const Team = ({ header, teams, id, hasBackground = false }: TeamProps) => (
  <section 
    className="relative not-prose scroll-mt-[72px] overflow-hidden"
    id={id ? id : ''}
    style={{
      backgroundImage: 'url(/images/background-images/building.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      mixBlendMode: 'multiply',
    }}
  >
    {/* Gradient overlay mask to keep background color visible */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-50/70 to-slate-100/70 dark:from-slate-900/80 dark:to-slate-800/80"></div>
    
    <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl md:px-6 md:py-16 lg:py-20 text-default">
      {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" subtitleClass="text-justify text-left ml-0" containerClass="text-left ml-0" />}
      <div className="flex items-stretch justify-start">
        <div className="grid w-full grid-cols-1 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {teams.map(({ name, occupation, image, items }, index) => (
            <div key={`item-team-two-${index}`} className="flex">
              <ItemTeam
                name={name}
                occupation={occupation}
                image={image}
                items={items}
                linkHref={`/team/${toSlug(name)}`}
                containerClass="card flex flex-col justify-center w-full text-left cursor-pointer overflow-hidden"
                imageClass="w-60 h-80 object-cover object-top"
                panelClass="flex-1 flex flex-col px-3 py-3"
                nameClass="text-base font-semibold text-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)] mt-0.5 text-left"
                occupationClass="text-sm text-body-color min-h-[1.5rem] flex items-start justify-start text-left mt-0.5 text-[var(--brand-accent-500)]"
                itemsClass="flex justify-start relative px-0 pt-2 mx-0 overflow-hidden mt-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Team;
