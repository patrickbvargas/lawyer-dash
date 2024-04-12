import { cn } from '@/lib';

interface DataListProps extends React.HTMLAttributes<HTMLUListElement> {}
interface DataItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const Root = ({ children, className, ...props }: DataListProps) => {
  return (
    <>
      <ul
        className={cn(
          'grid h-fit max-h-full w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    </>
  );
};

const Item = ({ className, ...props }: DataItemProps) => {
  return <li className={cn('', className)} {...props} />;
};

export { Root, Item };
