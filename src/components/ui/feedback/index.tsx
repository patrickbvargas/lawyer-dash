import * as React from 'react';
import { cn } from '@/utils';
import { Illustration as IllustrationPrimitive } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div className="flex flex-col items-center gap-2 mt-10" {...props} />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h2
    className={cn(
      'text-base text-center font-medium max-w-[40ch]',
      'text-gray-600',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  >
    {title}
  </h2>
);

interface IllustrationProps
  extends React.ComponentProps<typeof IllustrationPrimitive> {}
export const Illustration = ({ src, alt }: IllustrationProps) => (
  <div className="flex justify-center">
    <IllustrationPrimitive src={src} alt={alt} />
  </div>
);

interface ControlsProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Controls = ({ className, ...props }: ControlsProps) => (
  <div className={cn('flex justify-center', className)} {...props} />
);
