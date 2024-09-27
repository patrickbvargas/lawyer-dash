import * as React from 'react';

interface ListWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
export const ListWrapper = ({ ...props }: ListWrapperProps) => (
  <div
    className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    {...props}
  />
);
