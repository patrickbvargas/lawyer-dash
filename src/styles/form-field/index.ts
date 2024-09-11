import { cva } from '@/utils';

export const formFieldVariants = cva(
  'transition duration-300 flex h-10 w-full items-center justify-between rounded px-3.5 py-2 ring-1 text-sm font-normal focus:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: [
          'bg-white text-gray-500 ring-gray-200 placeholder:text-gray-400 hover:ring-2 hover:ring-gray-200 focus:ring-gray-300',
          'dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700/50 dark:placeholder:text-neutral-500 dark:hover:ring-0 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
