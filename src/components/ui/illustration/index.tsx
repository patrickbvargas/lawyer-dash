import * as React from 'react';
import Image from 'next/image';

interface IllustrationProps extends React.ComponentProps<typeof Image> {}
export const Illustration = ({ src, alt }: IllustrationProps) => {
  return <Image src={src} alt={alt} width={500} height={500} />;
};
