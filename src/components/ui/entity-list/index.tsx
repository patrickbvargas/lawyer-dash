import * as React from 'react';

interface EntityListProps extends React.HTMLAttributes<HTMLDivElement> {}
export const EntityList = ({ ...props }: EntityListProps) => (
  <div
    className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    {...props}
  />
);
