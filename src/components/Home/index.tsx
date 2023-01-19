import React from 'react';
import { SelectedLink } from '@/utils/types';
import { useMQ } from '@/hooks/useMQ';
import { ActionButton } from '@/shared/ActionButton';
import { HomepageText, HomepageGraphic, SponsorRedbull, SponsorForbes, SponsorFortune } from '@static';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
  setSelectedLink: (value: SelectedLink) => void;
};

export const Home = ({ setSelectedLink }: Props) => {
  const isDesktop = useMQ('(min-width:1060px)');
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedLink(SelectedLink.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
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
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:-lef-20 before:absolute before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomepageText} alt="EvoGym" />
              </div>
            </div>
            <p className="mt-8 text-base">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you
              Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
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
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedLink={setSelectedLink}>Join Now</ActionButton>
            <AnchorLink
              className="ease text-sm font-bold text-primary-500 underline transition-all duration-200 hover:text-neutral-500"
              onClick={() => setSelectedLink(SelectedLink.ContactUs)}
              href={`#${SelectedLink.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={HomepageGraphic}
            alt="Very healthy looking woman staring at her right, she's wearing gym clothes."
          />
        </div>
      </motion.div>
      {isDesktop && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedbull} alt="RedBull" />
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
