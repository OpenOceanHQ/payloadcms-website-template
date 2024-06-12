import * as React from 'react';

export const RichText: React.FC<{
  html: TrustedHTML | string;
  className: string;
}> = ({ html, className }) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }}></div>;
};
