import * as React from 'react';
import { cn } from '@/lib';

interface CardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardListProps extends React.HTMLAttributes<HTMLUListElement> {}
interface CardRootProps extends React.HTMLAttributes<HTMLLIElement> {}
interface CardDividerProps extends React.HTMLAttributes<HTMLHRElement> {}
interface CardHeaderProps extends CardWrapperProps {
  title: string;
}
interface CardFieldProps extends React.HTMLAttributes<HTMLDListElement> {
  label: string;
  value: string | number;
  isHighlighted?: boolean;
}

const List = ({ className, ...props }: CardListProps) => {
  return (
    <ul
      className={cn(
        'grid h-fit max-h-full w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...props}
    />
  );
};

const Root = ({ className, ...props }: CardRootProps) => {
  return (
    <li
      className={cn(
        'flex h-full cursor-pointer flex-col gap-2 space-y-1 rounded-lg border-l-4 border-transparent py-3 pl-3 pr-4 transition duration-300',
        'bg-white shadow-sm hover:border-accent/50',
        'dark:bg-zinc-800/60 dark:shadow-none dark:hover:border-accent',
        className
      )}
      {...props}
    />
  );
};

const Header = ({ title, className, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      <h3
        className={cn(
          'truncate text-base font-semibold',
          'text-zinc-600/80',
          'dark:text-zinc-200'
        )}
      >
        {title}
      </h3>
    </div>
  );
};

const Content = ({ className, ...props }: CardWrapperProps) => {
  return (
    <div
      className={cn(
        'grid h-full grid-cols-1 gap-3.5 sm:grid-cols-2',
        className
      )}
      {...props}
    />
  );
};

const Footer = ({ className, ...props }: CardWrapperProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-3.5 sm:grid-cols-2',
        className
      )}
      {...props}
    />
  );
};

const Divider = ({ className, ...props }: CardDividerProps) => {
  return (
    <hr
      className={cn(
        'rounded-full border-t-2',
        'border-zinc-200/60',
        'dark:border-zinc-700/50',
        className
      )}
      {...props}
    />
  );
};

const Field = ({
  label,
  value,
  isHighlighted,
  className,
  ...props
}: CardFieldProps) => {
  return (
    <dl
      className={cn(
        'flex flex-col gap-1',
        'text-zinc-600',
        'dark:text-zinc-300/80',
        className
      )}
      {...props}
    >
      <dt className='truncate text-sm uppercase tracking-wide'>{label}</dt>
      <dd className={cn('truncate text-sm', isHighlighted && 'font-semibold')}>
        {value}
      </dd>
    </dl>
  );
};

export { List, Root, Header, Content, Footer, Divider, Field };
