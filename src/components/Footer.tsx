import React from 'react';

export const Footer = () => (
  <footer className="flex justify-center items-center w-full h-20 md:h-16 mt-12">
    <p className="text-lg">opengravitas © {new Date().getFullYear().toString()}</p>
  </footer>
);
