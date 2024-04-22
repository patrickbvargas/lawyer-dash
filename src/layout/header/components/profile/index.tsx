'use client';
import { LogOut } from '@/lib/lucide';
import { User, Dropdown } from '@/components';
import { signOut } from '@/lib/next-auth';
import { useSession } from '@/lib/next-auth/client';

const Profile = () => {
  const { data: session } = useSession();
  console.log('Session: ', session);
  if (!session) return null;

  return (
    <Dropdown.Root backdrop='blur'>
      <Dropdown.Trigger>
        <User
          name={session.user.fullName}
          description={session.user.oabNumber}
          isFocusable
          avatarProps={{
            radius: 'lg',
            showFallback: true,
          }}
        />
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label='Profile Actions'>
        <Dropdown.Item
          key='logout'
          color='danger'
          onPress={() => signOut()}
          startContent={<LogOut className='size-5' />}
        >
          Sair
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Root>
  );
};

export { Profile };
