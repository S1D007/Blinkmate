'use client';
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineKey } from 'react-icons/md';
import { LuEye, LuEyeOff } from 'react-icons/lu';

export default function AuthPage() {
  const [isPassword, setisPassword] = useState(true);
  return (
    <main className="h-screen w-full flex p-5 overflow-y-auto">
      <section className="w-full max-w-[25rem] m-auto flex flex-col gap-5 items-center justify-center ">
        <p className="text-center w-full font-bold text-4xl md:text-[5vw] mb-10">BLINK MATE</p>
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
        <Button className="w-full" color="primary">
          Continue
        </Button>
        <div className="flex items-center justify-center w-full gap-5 px-10">
          <hr className="w-full" />
          or
          <hr className="w-full" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="bordered" size="md">
            <IoLogoApple size={20} />
          </Button>
          <Button variant="bordered" size="md">
            <FcGoogle size={20} />
          </Button>
        </div>
      </section>
    </main>
  );
}
