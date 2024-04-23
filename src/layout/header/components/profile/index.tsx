'use client';
import { signOut } from '@/lib/next-auth';
import { LAWYER_ROLE } from '@/constants';
import { useSession } from '@/lib/next-auth';
import { User, Dropdown } from '@/components';
import { LogOut, Wallet, KeyRound } from '@/lib/lucide';

const Profile = () => {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <Dropdown.Root backdrop='blur'>
      <Dropdown.Trigger>
        <User
          name={session.user.fullName}
          description={session.user.oabNumber}
          isFocusable
          avatarProps={{
            radius: 'md',
            showFallback: true,
          }}
        />
      </Dropdown.Trigger>
      <Dropdown.Menu variant='flat' aria-label='Profile Actions'>
        <Dropdown.Section showDivider>
          <Dropdown.Item
            key='role'
            startContent={<KeyRound className='size-4' />}
          >
            <span className='font-semibold'>Perfil</span>:{' '}
            {LAWYER_ROLE[session.user.role].alias}
          </Dropdown.Item>
          <Dropdown.Item
            key='remuneration'
            startContent={<Wallet className='size-4' />}
          >
            <span className='font-semibold'>Remuneração</span>:{' '}
            {session.user.remunerationPercent}
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section>
          <Dropdown.Item
            key='logout'
            color='danger'
            onPress={() => signOut()}
            startContent={<LogOut className='size-4' />}
          >
            Sair
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown.Root>
  );
};

export { Profile };
