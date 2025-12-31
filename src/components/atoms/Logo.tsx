import Image from 'next/image';
import handelLogoSolo from '~/assets/images/horizontal.svg';
import handelLogoSoloDark from '~/assets/images/horizontal-dark.svg';

const Logo = () => (
  <div className="inline-flex items-center self-center gap-2 ml-1">
    {/* Light logo visible in light mode */}
    <Image src={handelLogoSolo} alt="Handel logo" width={130} height={130} className="inline-block object-contain dark:hidden w-[75px] h-auto md:w-[130px] md:h-auto" />
    {/* Dark logo visible in dark mode */}
    <Image src={handelLogoSoloDark} alt="Handel logo dark" width={130} height={130} className="hidden object-contain dark:inline-block w-[75px] h-auto md:w-[130px] md:h-auto" />
  </div>
);

export default Logo;
