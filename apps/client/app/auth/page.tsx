'use client';
import { Button, Divider, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineKey } from 'react-icons/md';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import HyperText from '@/components/texts/HyperText';
import BlurIn from '@/components/texts/BlueInText';

export default function page() {
  const [isPassword, setisPassword] = useState(true);
  return (
    <main className="h-screen w-full flex overflow-y-auto">
      <section className="w-full max-w-[25rem] m-auto flex flex-col gap-5 items-center justify-center ">
        <HyperText className="text-4xl" duration={1000} text="Blink Mate" />
        <BlurIn word="Let's Verify Your Identity" className="text-xl text-gray-200 font-medium -mt-5" />
        <Input startContent={<HiOutlineMail size={20} opacity={0.6} />} label="Email" placeholder="Enter Your Email" />
        <Input
          startContent={<MdOutlineKey size={20} opacity={0.6} />}
          endContent={
            <div className="cursor-pointer" onClick={() => setisPassword(!isPassword)}>
              {isPassword ? <LuEyeOff /> : <LuEye />}
            </div>
          }
          type={isPassword ? 'password' : 'text'}
          label="Password"
          placeholder="Enter Your Password"
        />
        <Button className="w-full font-semibold" color="primary">
          Continue
        </Button>
        <div className="flex items-center justify-center w-full gap-5 px-16">
          <Divider />
          <h1 className="font-extrabold text-small">OR</h1>
          <Divider />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="bordered" size="md">
            <IoLogoApple size={20} />
            <h1>Continue with Apple</h1>
          </Button>
          <Button variant="bordered" size="md">
            <FcGoogle size={20} />
            <h1>Continue with Google</h1>
          </Button>
        </div>
      </section>
    </main>
  );
}
