import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Logo } from '@static';
import { flexBetween } from '@/styles';
export const Nav = () => {
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
};
