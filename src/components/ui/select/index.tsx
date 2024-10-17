import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { formFieldVariants } from '@/styles';
import { cn, type VariantProps } from '@/utils';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from '@heroicons/react/20/solid';

export const Root = SelectPrimitive.Root;
export const Group = SelectPrimitive.Group;
export const Value = SelectPrimitive.Value;

interface TriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof formFieldVariants> {}
export const Trigger = ({
  variant,
  className,
  children,
  ...props
}: TriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(formFieldVariants({ variant }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-6 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

interface ScrollUpProps
  extends React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> {}
export const ScrollUp = ({ className, ...props }: ScrollUpProps) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      'flex cursor-default items-center justify-center py-1.5',
      className,
    )}
    {...props}
  >
    <ChevronUpIcon className="size-4" />
  </SelectPrimitive.ScrollUpButton>
);

interface ScrollDownProps
  extends React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> {}
export const ScrollDown = ({ className, ...props }: ScrollDownProps) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      'flex cursor-default items-center justify-center py-1.5',
      className,
    )}
    {...props}
  >
    <ChevronDownIcon className="size-4" />
  </SelectPrimitive.ScrollDownButton>
);

// TODO: remove ring style
interface ContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content> {}
export const Content = ({
  className,
  children,
  position = 'popper',
  ...props
}: ContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 max-h-60 min-w-[8rem] rounded-lg overflow-hidden',
        'bg-white ring-gray-200 ring-1',
        'dark:bg-neutral-800 dark:ring-neutral-700/50',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <ScrollUp />
      <SelectPrimitive.Viewport
        className={cn(
          'p-2',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <ScrollDown />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

interface LabelProps
  extends React.ComponentProps<typeof SelectPrimitive.Label> {}
export const Label = ({ className, ...props }: LabelProps) => (
  <SelectPrimitive.Label
    className={cn(
      'py-1.5 pl-8 pr-2 text-sm font-semibold',
      'text-gray-500',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  />
);

interface ItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {}
export const Item = ({ className, children, ...props }: ItemProps) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm outline-none ring-inset data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'bg-white text-gray-500 ring-gray-200 hover:ring-2 hover:ring-gray-200',
      'dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700/50 dark:hover:ring-0 dark:hover:bg-neutral-700',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

interface SeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {}
export const Separator = ({ className, ...props }: SeparatorProps) => (
  <SelectPrimitive.Separator
    className={cn(
      '-mx-1 my-1 h-px',
      'bg-gray-100',
      'dark:bg-neutral-700',
      className,
    )}
    {...props}
  />
);
