import * as React from 'react';

export const Width: React.FC<{
  className: string;
  width?: string;
  children: React.ReactNode;
}> = ({ className, width, children }) => {
  let widthToApply;
  if (width) {
    widthToApply = parseInt(width) - 2;
  }
  return (
    <div
      className={className}
      style={{ width: widthToApply ? `${widthToApply.toString()}%` : undefined }}
    >
      {children}
    </div>
  );
};
