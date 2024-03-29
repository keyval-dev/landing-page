import React from 'react';
import Image from 'next/image';

const SingleBrand = ({ brand }: { brand: any }) => {
  const [isHovered, setIsHovered] = React.useState(true);
  const { image_url, type, display_name, imageLight, id } = brand;

  return (
    <div
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          // backgroundColor: '#292e45',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
      >
        <Image
          loading="lazy"
          width={50}
          height={50}
          src={image_url}
          // style={{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(90%)' }}
          alt="Brand"
        />
      </div>
      <div
        style={{
          color: '#909dac',
          width: 120,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontWeight: 600,
        }}
      >
        {display_name}
      </div>
    </div>
  );
};

export default SingleBrand;
