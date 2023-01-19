import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedLink } from '@/utils/types';

type Props = {
  children: React.ReactNode;
  setSelectedLink: (value: SelectedLink) => void;
};

export const ActionButton = ({ children, setSelectedLink }: Props) => {
  return (
    <AnchorLink
      className="ease rounded-md bg-neutral-500 px-10 py-2 transition-all duration-200 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedLink(SelectedLink.ContactUs)}
      href={`${SelectedLink.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
