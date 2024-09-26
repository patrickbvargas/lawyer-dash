import * as React from 'react';

interface WrapperListProps extends React.HTMLAttributes<HTMLDivElement> {}
export const WrapperList = ({ ...props }: WrapperListProps) => (
  <div
    className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    {...props}
  />
);
