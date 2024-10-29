import { Link } from '@/components';
import { IconBlocks } from '@/assets/icons';

// TODO: replace logo image
export const Logo = () => {
  return (
    <Link href="/" className="hidden sm:block p-2">
      <IconBlocks className="size-8 text-accent" />
    </Link>
  );
};
