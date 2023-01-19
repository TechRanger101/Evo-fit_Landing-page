import React from 'react';
import { SelectedLink } from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedLink: (value: SelectedLink) => void;
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div variants={childVariants} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{icon}</div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3 text-base">{description}</p>
      <AnchorLink
        className="ease text-sm font-bold text-primary-500 underline transition-all duration-200 hover:text-neutral-500"
        href={`#${SelectedLink.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};
