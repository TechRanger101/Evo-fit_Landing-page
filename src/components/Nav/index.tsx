import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Logo } from '@static';
import { flexBetween } from '@/utils/styles';
import Links from './Links';
import { SelectedLink } from '@/utils/types';

interface Props {
  selectedLink: SelectedLink;
  setSelectedLink: (value: SelectedLink) => void;
}

export const Nav = ({ selectedLink, setSelectedLink }: Props) => {
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="EgoGym" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Links link="Home" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                <Links link="Benefits" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                <Links link="Our Classes" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                <Links link="Contact Us" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
              </div>
              <div className={`${flexBetween} gap-8`}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
