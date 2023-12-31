'use client';
import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Timeline } from '../ProgressBar/Timeline';

const ProgressBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 3rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Performance = () => {
  const [isLoad, setIsLoad] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setIsLoad(true);
  }, []);

  return isLoad ? (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top text-center mx-auto"
            >
              <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
                {'Extreme Performance'}
              </h2>
              <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[80%]">
                Odigos provides unprecedented up to{' '}
                <a
                  style={{ textDecoration: 'underline', fontSize: 18 }}
                  href="/blog/ebpf-instrumentation-faster-than-manual"
                >
                  <b> 50x faster performance </b>
                </a>
                - virtually eliminating latency
              </p>
            </motion.div>
          </>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top "
          >
            <ProgressBarsWrapper style={{ gap: isLoad ? 16 : 16 }}>
              <ProgressBar
                status={'No Instrumentation'}
                value={'183.09ms'}
                percent="30%"
                type="basic"
              />
              <ProgressBar status={'Odigos'} value={'190.62ms'} percent="31%" />
              <ProgressBar
                status={"Traditional APM's"}
                value={'8,798.20ms'}
                percent="95%"
                type="traditional"
              />
              <Timeline
                status={''}
                value={'183.09ms'}
                percent="100%"
                type="basic"
              />
            </ProgressBarsWrapper>
            {/* <p className="pl-12 pt-4 text-sm text-gray-400 opacity-60">
              *Performance measured in milliseconds
            </p> */}
          </motion.div>
        </div>
      </section>
    </>
  ) : null;
};

export default Performance;
