import React from 'react';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { SelectedLink } from '@/utils/types';
import { motion } from 'framer-motion';
import { Heading } from '@/shared/Heading';
import { BenefitType } from '@/utils/types';
import { Benefit } from './Benefit';
import { ActionButton } from '@/shared/ActionButton';
import { BenefitsGraphics } from '@static';
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
    <section id="benefits" className="mx-auto min-h-[100vh] w-5/6 py-20 ">
      <motion.div onViewportEnter={() => setSelectedLink(SelectedLink.Benefits)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Heading>MORE THAN JUST A GYM.</Heading>
          <p className="my-5 max-w-[65ch] text-base">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. We provide true care into each and every member.
          </p>
        </motion.div>
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

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={BenefitsGraphics}
            alt="Very fit blonde woman tying her hair, she's wearing gym clothes."
            className="mx-auto"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Heading>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
                  </Heading>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 max-w-[75ch] text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor aspernatur magni voluptate iste
                animi magnam laborum aperiam possimus optio vel, doloremque odit. Sequi in soluta sed odit quae autem.{' '}
              </p>
              <p className="mb-5 max-w-[75ch] text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolor aspernatur magni voluptate iste
                animi magnam laborum aperiam possimus optio vel, doloremque odit. Sequi in soluta sed odit quae autem.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedLink={setSelectedLink}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
