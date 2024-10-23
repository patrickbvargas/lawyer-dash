import { Link } from '@/components';
import { CubeTransparentIcon } from '@heroicons/react/20/solid';

// TODO: replace logo image
export const Logo = () => {
  return (
    <Link href="/" className="hidden sm:block p-2">
      <CubeTransparentIcon className="size-8 text-accent" />
    </Link>
  );
};
