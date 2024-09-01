'use client';

import React, { useEffect } from 'react';
import FlickeringGridBackground from '@/components/backgrounds/FlickeringGridBackground';
import { useRouter } from 'next/navigation';
import HyperText from '@/components/texts/HyperText';
import { Button } from '@nextui-org/react';

function Page() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/onboarding');
    }, 5000);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <FlickeringGridBackground
        className="z-0 absolute inset-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">
        {/* <h1 className="text-white text-6xl capitalize font-bold">Blink Mate</h1> */}
        <HyperText text="Blink Mate" className="text-4xl font-bold text-black dark:text-white" />
        <h1 className="text-gray-400 text-xl capitalize font-normal">
          Your Personal Wellness Companion for Screen Time
        </h1>
      </div>
    </div>
  );
}

export default Page;
