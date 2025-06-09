import { useRouter } from 'expo-router';
import React from 'react';

import type { RegisterFormProps } from '@/components/register-form';
import { RegisterForm } from '@/components/register-form';
import { useAuth } from '@/lib';

export default function Register() {
  const router = useRouter();
  const register = useAuth.use.register();

  const onSubmit: RegisterFormProps['onSubmit'] = async (data) => {
    console.log(data);
    await register({
      email: data.email,
      name: data.name,
      password: data.password,
    });
    router.push('/');
  };

  return (
    <>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
}
