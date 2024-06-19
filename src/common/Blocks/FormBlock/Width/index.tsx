import * as React from 'react';

export const Width: React.FC<{
  className: string;
  width?: string;
  children: React.ReactNode;
}> = ({ className, width, children }) => {
  // width will be 100% by default
  return (
    <div className={className + ' max-sm:!w-full'} style={{ width: width ? `${width}%` : '100%' }}>
      {children}
    </div>
  );
};
