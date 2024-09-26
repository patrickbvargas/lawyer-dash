import * as React from 'react';
import { randomUUID } from 'crypto';

interface SuspenseProps extends React.SuspenseProps {}
export const Suspense = ({ ...props }: SuspenseProps) => {
  return (
    <React.Suspense
      key={randomUUID()} // needed to update RSC Payload (Router Cache)
      {...props}
    />
  );
};
