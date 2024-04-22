import { twMerge } from '@/lib/tw-merge';
import { clsx, ClassValue } from '@/lib/clsx';

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export { cn };
