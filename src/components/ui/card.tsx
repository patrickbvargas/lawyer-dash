import * as React from 'react';
import * as NextUI from '@nextui-org/card';
import { cn } from '@/lib';
import { Trash, FilePen } from '@/assets/icons';
import { Divider, Chip, Button, Tooltip } from '@/components';

interface CardProps extends NextUI.CardProps {
  id: string;
  title: string;
}
interface CardFieldProps extends React.HTMLAttributes<HTMLDListElement> {
  label: string;
  value: string | number;
  isHighlighted?: boolean;
}

const Root = ({ id, title, children, ...props }: CardProps) => {
  return (
    <NextUI.Card isHoverable className='group/card h-max' {...props}>
      <NextUI.CardHeader className='flex items-center justify-between'>
        <p className='truncate font-semibold'>{title}</p>
        <Actions />
      </NextUI.CardHeader>
      <Divider />
      {children}
    </NextUI.Card>
  );
};

const Body = ({ className, ...props }: NextUI.CardProps) => {
  return (
    <NextUI.CardBody
      className={cn('grid grid-cols-2 items-center gap-unit-sm', className)}
      {...props}
    />
  );
};

const Footer = ({ className, ...props }: NextUI.CardFooterProps) => {
  return (
    <React.Fragment>
      <Divider />
      <NextUI.CardFooter
        className={cn('grid grid-cols-2 items-center gap-unit-sm', className)}
        {...props}
      />
    </React.Fragment>
  );
};

const Actions = () => {
  return (
    <div className='flex gap-2 opacity-0 transition duration-1000 group-hover/card:opacity-100'>
      <Tooltip content='Excluir' color='danger'>
        <Button isIconOnly size='sm' variant='flat' color='danger'>
          <Trash className='h-4 w-4' />
        </Button>
      </Tooltip>
      <Tooltip content='Editar'>
        <Button isIconOnly size='sm' variant='flat'>
          <FilePen className='h-4 w-4' />
        </Button>
      </Tooltip>
    </div>
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
    <dl className={cn('flex flex-col gap-1 text-start', className)} {...props}>
      <dt className='truncate text-xs font-semibold uppercase tracking-wide text-foreground-500'>
        {label}
      </dt>
      <dd
        className={cn(
          'truncate text-sm text-foreground-500',
          isHighlighted && 'font-semibold'
        )}
      >
        {value}
      </dd>
    </dl>
  );
};

export { Root, Body, Footer, Field, Chip };
