import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Logo } from '@static';
import { flexBetween } from '@/utils/styles';
import Links from './Links';
import { SelectedLink } from '@/utils/types';
import { useMQ } from '@/hooks/useMQ';
import { ActionButton } from '@/shared/ActionButton';
interface Props {
  selectedLink: SelectedLink;
  setSelectedLink: (value: SelectedLink) => void;
  isTopOfPage: boolean;
}

export const Nav = ({ selectedLink, setSelectedLink, isTopOfPage }: Props) => {
  const isDesktop = useMQ('(min-width: 1060px)');
  const [toggle, setToggle] = useState(false);
  const navBarBg = !isTopOfPage && 'bg-primary-100 drop-shadow';
  return (
    <nav>
      <div className={`${navBarBg} ${flexBetween} ease fixed top-0 z-30 w-full py-6 transition-all duration-200`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 font-bold`}>
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
                  <ActionButton setSelectedLink={setSelectedLink}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-neutral-500 p-2" onClick={() => setToggle(!toggle)}>
                <Bars3Icon className="aspect-square w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isDesktop && toggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setToggle(!toggle)}>
              <XMarkIcon className="aspect-square w-6 text-gray-400 " />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Links link="Home" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
            <Links link="Benefits" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
            <Links link="Our Classes" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
            <Links link="Contact Us" selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          </div>
        </div>
      )}
    </nav>
  );
};
