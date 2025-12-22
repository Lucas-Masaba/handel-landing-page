import Image from 'next/image';
import handelLogoSolo from '~/assets/images/horizontal.svg';
import handelLogoSoloDark from '~/assets/images/horizontal-dark.svg';

const Logo = () => (
  <div className="inline-flex items-center self-center gap-3 ml-2">
    {/* Light logo visible in light mode */}
    <Image src={handelLogoSolo} alt="Handel logo" width={200} height={200} className="inline-block object-contain dark:hidden" />
    {/* Dark logo visible in dark mode */}
    <Image src={handelLogoSoloDark} alt="Handel logo dark" width={200} height={200} className="hidden object-contain dark:inline-block" />
  </div>
);

export default Logo;
