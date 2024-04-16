import * as React from 'react';
import { cn } from '@/lib';
import { Plus } from '@/assets/icons';
import { Button, ThemeSwitcher } from '@/components';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between px-8 pb-4 pt-8',
        className
      )}
      {...props}
    >
      <h1 className={cn('text-2xl uppercase tracking-wider')}>
        TÍTULO [AJUSTAR]
      </h1>
      <div className='flex items-center gap-2'>
        <ThemeSwitcher />
        <Button color='primary' startContent={<Plus />}>
          Criar
        </Button>
      </div>
    </header>
  );
};

export { Header };
