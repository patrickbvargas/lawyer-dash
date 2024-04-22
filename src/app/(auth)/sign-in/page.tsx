import { SignInForm } from './components/sign-in-form';

interface SignInPageProps {
  searchParams: {
    callbackUrl?: string;
    error?: string;
  };
}

export default function SignInPage({ searchParams }: SignInPageProps) {
  return (
    <div className='m-auto w-full max-w-sm space-y-8 rounded-2xl bg-content1 p-8'>
      {searchParams.error && (
        // TODO: change for Alert
        <p className='rounded-lg bg-danger p-1 text-center text-danger-foreground'>
          Verifique suas credenciais
        </p>
      )}
      <h1 className='text-center text-xl font-bold'>Login</h1>
      <SignInForm urlCallback={searchParams?.callbackUrl} />
    </div>
  );
}
