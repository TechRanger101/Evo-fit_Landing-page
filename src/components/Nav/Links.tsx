import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedLink } from '@/utils/types';

interface Props {
  link: string;
  selectedLink: SelectedLink;
  setSelectedLink: (value: SelectedLink) => void;
}

export default function Links({ link, selectedLink, setSelectedLink }: Props) {
  const formattedLink = link.toLowerCase().replace(/ /g, '') as SelectedLink;
  return (
    <AnchorLink
      className={`${
        selectedLink === formattedLink && 'text-primary-500'
      } transition duration-500 hover:text-primary-300`}
      href={`#${formattedLink}`}
      onClick={() => setSelectedLink(formattedLink)}
    >
      {link}
    </AnchorLink>
  );
}
