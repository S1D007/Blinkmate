import React from 'react';
import FlickeringGridBackground from '@/components/backgrounds/FlickeringGridBackground';

function Page() {
  return (
    <div className="relative w-full h-screen">
      <FlickeringGridBackground
        className="z-0 absolute inset-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={400}
        width={600}
      />

      <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">
        <h1 className="text-white text-6xl capitalize font-bold">Blink Mate</h1>
        <h1 className="text-gray-400 text-xl capitalize font-normal">
          Your Personal Wellness Companion for Screen Time
        </h1>
      </div>
    </div>
  );
}

export default Page;
