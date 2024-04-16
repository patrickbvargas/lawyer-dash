import * as NextUI from '@nextui-org/chip';
import { cn } from '@/lib';

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
