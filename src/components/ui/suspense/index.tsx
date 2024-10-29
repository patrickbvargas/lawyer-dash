import * as React from 'react';
import { randomUUID } from 'crypto';

export const Suspense = ({ ...props }: React.SuspenseProps) => {
  return (
    <React.Suspense
      key={randomUUID()} // needed to update RSC Payload (Router Cache)
      {...props}
    />
  );
};
