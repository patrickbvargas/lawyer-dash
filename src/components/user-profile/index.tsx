'use client';
import * as React from 'react';
import { useToast } from '@/hooks';
import { ENUM } from '@/constants';
import { formatter } from '@/utils';
import { IconLogOut } from '@/assets/icons';
import { DropdownMenu, Avatar, Badge } from '@/components';

// TODO: replace user profile data
const user = {
  id: 'clulzffpg000308l7g33qbrs7',
  fullName: 'Patrick Vargas',
  imageSource: 'https://github.com/patrickbvargas.png',
  role: ENUM.LawyerRole.ADMIN,
};

export const UserProfile = ({
  ...props
}: React.ComponentProps<typeof DropdownMenu.Root>) => {
  const { toast } = useToast();

  // TODO: implement logout
  const handleLogout = () => {
    toast({
      title: 'Em Desenvolvimento',
      description: 'A função de logout será disponibilizada em breve.',
    });
  };

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root>
          <Avatar.Image src={user.imageSource} alt={user.fullName} />
          <Avatar.Fallback>
            {user.fullName.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="right" align="end">
        <DropdownMenu.Label>{user.fullName}</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Badge variant="outline">{formatter.role(user.role)}</Badge>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={handleLogout}>
          <IconLogOut />
          Sair
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
