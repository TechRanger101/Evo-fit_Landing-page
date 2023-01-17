import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Logo } from '@static';
import { flexBetween } from '@/utils/styles';
import Links from './Links';
import { SelectedLink } from '@/utils/types';
import { useMQ } from '@/hooks/useMQ';

interface Props {
  selectedLink: SelectedLink;
  setSelectedLink: (value: SelectedLink) => void;
}

export const Nav = ({ selectedLink, setSelectedLink }: Props) => {
  const isDesktop = useMQ('(min-width: 1060px)');
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="EgoGym" />
            {isDesktop ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Links link="Home" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                  <Links link="Benefits" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                  <Links link="Our Classes" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                  <Links link="Contact Us" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <button>Become a Member</button>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-neutral-500 p-2" onClick={() => setToggle(!toggle)}>
                {!toggle ? <Bars3Icon className="h-6 w-6 text-white" /> : <XMarkIcon className="h-6 w-6 text-white" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
