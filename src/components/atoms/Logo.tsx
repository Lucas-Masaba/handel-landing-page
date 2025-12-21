import Image from 'next/image';
import handelLogo from '~/assets/images/handel-logo.svg';

const Logo = () => (
  <div className="inline-flex items-center gap-3 self-center ml-2 whitespace-nowrap">
    <Image src={handelLogo} alt="Handel logo" width={48} height={48} className="inline-block" />
    <span className="text-lg font-semibold uppercase tracking-tight text-[var(--brand-primary-600)] dark:text-white md:text-base">Handel</span>
  </div>
);

export default Logo;
