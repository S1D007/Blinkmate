import { Button, Input } from '@nextui-org/react';
import React from 'react';

export default function AuthPage() {
  return (
    <section className="bg-red-500">
      <img src="/vercel.svg" alt="img" />
      <Input startContent={<p>hii</p>} />
      <Input />
      <Button>Login</Button>
    </section>
  );
}
