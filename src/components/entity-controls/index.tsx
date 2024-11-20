'use client';
import * as React from 'react';
import { cn } from '@/utils';
import { toast } from '@/hooks/use-toast';
import { Button, Tooltip } from '@/components';
import { IconPencilLine, IconTrash } from '@/assets/icons';

export const EntityControls = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  // TODO: implement control
  const handleAction = (actionName: string) => {
    toast({
      title: 'Em Desenvolvimento',
      description: `A ação de ${actionName} será disponibilizada em breve.`,
    });
  };
  return (
    <div className={cn('flex gap-2', className)} {...props}>
      <ControlButton
        icon={<IconPencilLine className="size-4" />}
        tooltipText="Editar"
        variant="secondary"
        onClick={() => handleAction('editar')}
      />
      <ControlButton
        icon={<IconTrash className="size-4" />}
        tooltipText="Remover"
        variant="destructive"
        onClick={() => handleAction('remover')}
      />
    </div>
  );
};

interface ControlButtonProps extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode;
  tooltipText: string;
}
const ControlButton = ({
  icon,
  tooltipText,
  className,
  ...props
}: ControlButtonProps) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button className={cn('size-8', className)} {...props}>
          {icon}
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="bottom" align="end">
        <Tooltip.Description>{tooltipText}</Tooltip.Description>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);
