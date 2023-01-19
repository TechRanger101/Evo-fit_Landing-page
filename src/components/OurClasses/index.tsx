import React from 'react';
import { SelectedLink, ClassType } from '@/utils/types';
import { Sample1, Sample2, Sample3, Sample4, Sample5, Sample6 } from '@static';
import { motion } from 'framer-motion';
import { Heading } from '@/shared/Heading';
import { Class } from './Class';

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Sample1,
  },
  {
    name: 'Yoga Classes',
    image: Sample2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Sample3,
  },
  {
    name: 'Adventure Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Sample4,
  },
  {
    name: 'Fitness Classes',
    image: Sample5,
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Sample6,
  },
];
type Props = {
  setSelectedLink: (value: SelectedLink) => void;
};

export const OurClasses = ({ setSelectedLink }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedLink(SelectedLink.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Heading>OUR CLASSES</Heading>
            <p className="max-w-[65ch] py-5 text-base">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit
              euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis
              odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
