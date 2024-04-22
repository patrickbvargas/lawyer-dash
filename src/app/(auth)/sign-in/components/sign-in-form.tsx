'use client';
import { signIn } from '@/lib/next-auth';
import { UserRound, Lock } from '@/lib/lucide';
import { Button, Input, Link } from '@/components';
import { signInSchema, SignInType } from '@/schemas/auth';
import { useForm, zodResolver } from '@/lib/react-hook-form';

interface SignInFormProps {
  urlCallback?: string;
}

const SignInForm = ({ urlCallback }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInType>({
    defaultValues: {
      oab: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const handleFormSubmit = async (data: SignInType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //TODO: remove
    await signIn('credentials', {
      oab: data.oab,
      password: data.password,
      redirect: true,
      callbackUrl: urlCallback || '/dashboard',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='flex flex-col gap-4'
    >
      <Input
        label='Número OAB'
        type='text'
        labelPlacement='outside'
        placeholder='Informe o número OAB'
        endContent={<UserRound className='size-5' />}
        errorMessage={errors.oab?.message}
        isInvalid={!!errors.oab}
        isDisabled={isSubmitting}
        required
        {...register('oab')}
      />
      <Input
        label='Senha'
        type='password'
        labelPlacement='outside'
        placeholder='Informe sua senha'
        endContent={<Lock className='size-5' />}
        errorMessage={errors.password?.message}
        isInvalid={!!errors.oab}
        isDisabled={isSubmitting}
        required
        {...register('password')}
      />
      <Link href='#' className='text-sm'>
        Esqueceu sua senha?
      </Link>
      <Button
        className='mt-4 w-full'
        type='submit'
        color='primary'
        isLoading={isSubmitting}
      >
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
};

export { SignInForm };
