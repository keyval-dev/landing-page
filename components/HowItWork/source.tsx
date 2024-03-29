import React, { useState } from 'react';
import './style.css';
const SourceCard = ({ isHovered, name = 'User service' }) => {
  return (
    <div
      className="source-card-container"
      style={{
        border: isHovered
          ? '1px solid var(--Dark-mode-Odigos-Torquiz, #96F2FF)'
          : '1px solid #96f3ff51',
        background: isHovered
          ? 'var(--Dark-mode-Dark-1, #0A1824)'
          : 'transparent',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 56 56"
        fill="none"
      >
        <path
          d="M50.647 15.7378C50.3159 15.1597 49.8313 14.6845 49.2468 14.3649L29.3025 3.44681C28.7694 3.15369 28.1709 3 27.5625 3C26.9541 3 26.3556 3.15369 25.8225 3.44681L5.885 14.3626C5.30051 14.6823 4.8159 15.1575 4.48484 15.7356C4.16926 16.2827 4.00213 16.9028 4 17.5345V39.2029C4.00147 39.8519 4.17717 40.4887 4.50875 41.0466C4.84033 41.6045 5.31562 42.0632 5.885 42.3748L25.8225 53.2883C26.3552 53.5826 26.9539 53.737 27.5625 53.737C28.1711 53.737 28.7698 53.5826 29.3025 53.2883L49.24 42.3748C49.8094 42.0632 50.2847 41.6045 50.6162 41.0466C50.9478 40.4887 51.1235 39.8519 51.125 39.2029V17.5345C51.1245 16.9042 50.9598 16.285 50.647 15.7378ZM25.75 49.1241L18.5 45.1547V33.8062C18.4993 33.4817 18.4114 33.1633 18.2456 32.8843C18.0798 32.6054 17.8422 32.376 17.5575 32.2202L7.625 26.7827V19.5327L25.75 29.4562V49.1241ZM27.5625 26.3024L9.58703 16.4606L17.3989 12.1853L26.688 17.2717C26.9547 17.4176 27.2539 17.4941 27.558 17.4941C27.862 17.4941 28.1612 17.4176 28.428 17.2717L37.717 12.1853L45.5289 16.4606L27.5625 26.3024ZM47.5 26.7782L37.5675 32.2157C37.2828 32.3715 37.0452 32.6008 36.8794 32.8798C36.7136 33.1588 36.6257 33.4771 36.625 33.8016V45.1502L29.375 49.1195V29.4426L47.5 19.5192V26.7782Z"
          fill="#8B92A5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {isHovered ? (
          <>
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              fill="#96F2FF"
              stroke="#96F2FF"
            />
            <path
              d="M18.3636 8L9.86364 16.5L6 12.6364"
              stroke="#132330"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#CCD0D2"
          />
        )}
      </svg>

      <div
        style={{
          color: 'var(--Dark-mode-White, #FFF)',
          textAlign: 'center',
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: 'Inter',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '110%',
          marginTop: 4,
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          borderRadius: 18,
          fontSize: 12,
        }}
      >
        Deployment
      </div>
    </div>
  );
};

export default SourceCard;
