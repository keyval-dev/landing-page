import React from 'react';
import { Feature } from '@/types/feature';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './style.css';
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg  xl:p-12.5 transition-all hover:shadow-solid-4 z-0 gradient-background"
        style={{
          padding: 2,
          borderRadius: 24,
        }}
      >
        <div className="single-feature-wrapper">
          <div
            // className="single-feature-icon gradient-background"
            style={{ width: 40, height: 40, borderRadius: 12 }}
          >
            <Image
              src={icon}
              alt="icon"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white ">
            {title}
          </h3>
          <p className="dark:text-white">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
