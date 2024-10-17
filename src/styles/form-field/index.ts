import { cva } from '@/utils';

export const formFieldVariants = cva(
  'transition duration-300 flex h-10 w-full items-center justify-between rounded-lg px-3.5 py-2 text-sm font-normal border disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: [
          'bg-white text-gray-500 border-gray-200 dark:bg-gray-100',
          'dark:bg-neutral-800 dark:text-neutral-300 dark:border-none dark:hover:bg-neutral-700',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
