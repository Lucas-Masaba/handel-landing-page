import Image from 'next/image';
import handelLogo from '~/assets/images/handel-logo.svg';

const Logo = () => (
  <div className="inline-flex items-center gap-3 self-center ml-2 whitespace-nowrap">
    <Image src={handelLogo} alt="Handel logo" width={36} height={36} className="inline-block" />
    <span className="text-2xl font-bold text-[var(--brand-primary-600)] dark:text-white md:text-xl">Handel</span>
  </div>
);

export default Logo;
