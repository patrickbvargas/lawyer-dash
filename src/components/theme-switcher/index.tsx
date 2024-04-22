'use client';
import { React } from '@/lib/react';
import { Button } from '@/components';
import { useTheme } from '@/lib/next-theme';
import { MoonStar, Sun } from '@/lib/lucide';

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {}

const ThemeSwitcher = ({ ...props }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div {...props}>
      <Button isIconOnly variant='light' onPress={handleClick}>
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
