'use client';
import * as React from 'react';
import { ROUTES } from '@/constants';
import { toast } from '@/hooks/use-toast';
import { IconPlus } from '@/assets/icons';
import { Button, DropdownMenu } from '@/components';

const menuItems = [
  { icon: ROUTES.lawyer.Icon, label: 'Advogado' },
  { icon: ROUTES.client.Icon, label: 'Cliente' },
  { icon: ROUTES.contract.Icon, label: 'Contrato' },
  { icon: ROUTES.fee.Icon, label: 'Honorário' },
  { icon: ROUTES.remuneration.Icon, label: 'Remuneração' },
];

export const EntityCreationMenu = ({
  ...props
}: React.ComponentProps<typeof DropdownMenu.Root>) => {
  // TODO: implement creation
  const handleCreation = (entityName: string) => {
    toast({
      title: 'Em Desenvolvimento',
      description: `A criação de ${entityName.toLowerCase()} será disponibilizada em breve.`,
    });
  };

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">
          <IconPlus className="size-4" />
          Novo
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="end" className="space-y-2">
        {menuItems.map((item, index) => (
          <DropdownMenu.Item
            key={index}
            onClick={() => handleCreation(item.label)}
          >
            <item.icon />
            <span>{item.label}</span>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
