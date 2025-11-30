'use client';

import { IconMenu, IconX } from '@tabler/icons-react';
import { ToggleMenuProps } from '~/shared/types';

const ToggleMenu = ({ handleToggleMenuOnClick, isToggleMenuOpen }: ToggleMenuProps) => (
  <button
    type="button"
    className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-[var(--brand-primary-50)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-primary-50)] dark:text-gray-400 dark:hover:bg-[var(--brand-primary-700)] dark:focus:ring-[var(--brand-primary-800)]"
    aria-label="Toggle Menu"
    onClick={handleToggleMenuOnClick}
  >
    {isToggleMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
  </button>
);

export default ToggleMenu;
