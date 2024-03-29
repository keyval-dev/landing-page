'use client';
import React from 'react';
import featuresData from './featuresData';
import SingleFeature from './SingleFeature';
import SectionHeader from '../Common/SectionHeader';

const Feature = () => {
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: '',
              subtitle: 'Odigos Open Source',
              description: `Odigos uses OpenTelemetry and eBPF to build agnostic observability pipelines for all applications`,
            }}
          />
          <div
            style={{ padding: '0 30px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20"
          >
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
