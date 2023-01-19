import React from 'react';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { SelectedLink } from '@/utils/types';
import { motion } from 'framer-motion';
import { Heading } from '@/shared/Heading';
import { BenefitType } from '@/utils/types';
import { Benefit } from './Benefit';
const benefits: Array<BenefitType> = [
  {
    id: '0',
    icon: <HomeModernIcon className="aspect-square w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi ad, aperiam accusantium, exercitationem aspernatur',
  },
  {
    id: '1',
    icon: <UserGroupIcon className="aspect-square w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi ad, aperiam accusantium, exercitationem aspernatur',
  },
  {
    id: '2',
    icon: <AcademicCapIcon className="aspect-square w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi ad, aperiam accusantium, exercitationem aspernatur',
  },
];

type Props = {
  setSelectedLink: (value: SelectedLink) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Benefits = ({ setSelectedLink }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div onViewportEnter={() => setSelectedLink(SelectedLink.Benefits)}>
        <div className="md:my-5 md:w-3/5">
          <Heading>MORE THAN JUST A GYM.</Heading>
          <p className="my-5 text-base">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. We provide true care into each and every member.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedLink={setSelectedLink}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
