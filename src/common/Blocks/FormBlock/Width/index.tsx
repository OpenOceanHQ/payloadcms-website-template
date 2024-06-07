import * as React from 'react';

export const Width: React.FC<{
  className: string;
  width?: string;
  children: React.ReactNode;
}> = ({ className, width, children }) => {
  return (
    <div className={className} style={{ width: width ? `${width}%` : undefined }}>
      {children}
    </div>
  );
};
