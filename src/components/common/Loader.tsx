'use client';

import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #fff 60%, #f44336 100%)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 0.96,
        animation: 'fadeInLoader 0.5s',
      }}
    >
      <div className="loader-logo-container mb-8">
        <Image
          src="/gallery/logo.png"
          alt="Vanaashrya Logo"
          width={180}
          height={46}
          className="animate-pulse"
          style={{ filter: 'brightness(0) saturate(100%)' }}
          priority
          sizes="180px"
        />
      </div>
      {/* Modern spinner */}
      <div className="loader-spinner" />
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loader-spinner {
          width: 48px;
          height: 48px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #f44336;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-top: 8px;
          box-shadow: 0 2px 16px 0 #f4433622;
        }
        @keyframes fadeInLoader {
          from { opacity: 0; }
          to { opacity: 0.96; }
        }
      `}</style>
    </div>
  );
};

export default Loader; 