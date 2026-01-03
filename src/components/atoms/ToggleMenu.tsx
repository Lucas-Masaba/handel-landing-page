'use client';

import { IconMenu, IconX } from '@tabler/icons-react';
import { ToggleMenuProps } from '~/shared/types';

const ToggleMenu = ({ handleToggleMenuOnClick, isToggleMenuOpen }: ToggleMenuProps) => (
  <button
    type="button"
    className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition focus:outline-none focus:ring-4 focus:ring-[var(--brand-primary-50)] dark:text-gray-400 dark:focus:ring-[var(--brand-primary-800)]"
    aria-label="Toggle Menu"
    onClick={handleToggleMenuOnClick}
  >
    <div className="relative h-6 w-6">
      <IconMenu
        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
          isToggleMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`}
      />
      <IconX
        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
          isToggleMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
      />
    </div>
  </button>
);

export default ToggleMenu;
