import { cn } from '@/utils';
import { NextUI } from '@/lib/next-ui';

const Chip = ({ className, ...props }: NextUI.ChipProps) => {
  return (
    <NextUI.Chip
      size='sm'
      color='primary'
      radius='sm'
      variant='flat'
      className={cn('place-self-end uppercase', className)}
      {...props}
    />
  );
};

export { Chip };
