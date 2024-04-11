'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib';
import { Button } from '@/components';
import { MoonStar, Sun } from '@/assets/icons';

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeSwitcher = ({ className, ...props }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn('', className)} {...props}>
      <Button onClick={handleClick} iconStyle={'onlyIcon'} variant={'theme'}>
        {theme === 'dark' ? (
          <MoonStar className='h-6 w-6' />
        ) : (
          <Sun className='h-6 w-6' />
        )}
      </Button>
    </div>
  );
};

export { ThemeSwitcher };
