'use client';
import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

export const PreviewPageButton: React.FC = () => {
  if (typeof window === 'undefined') return null;

  return (
    <a target="_blank" href={`https://${window.location.host}`}>
      <span className="inline-flex items-center gap-1 underline">
        View Page
        <GoLinkExternal className="w-3 h-3" />
      </span>
    </a>
  );
};
