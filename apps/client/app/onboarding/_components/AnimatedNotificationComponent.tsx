// import RippleEffectBackground from '@/components/backgrounds/RippleEffectBackground';
// import React from 'react';

// function page() {
//   return (
//     <div className="relative w-full h-screen">
//       <RippleEffectBackground />
//       <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">

//       </div>
//     </div>
//   );
// }

// export default page;

'use client';

import { AnimatedList } from '@/components/misc/AnimatedList';
import { cn } from '@/lib/utils';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: 'Time to Stretch',
    description: 'Stay limber with a quick stretch!',
    time: '15m ago',
    icon: '🧘‍♂️',
    color: '#00C9A7',
  },
  {
    name: 'Blink Reminder',
    description: 'Give your eyes a rest and blink!',
    time: '10m ago',
    icon: '👁️',
    color: '#FFB800',
  },
  {
    name: 'Hydration Break',
    description: 'Stay hydrated, take a sip of water.',
    time: '5m ago',
    icon: '💧',
    color: '#1E86FF',
  },
  {
    name: 'Posture Check',
    description: 'Sit up straight and protect your back.',
    time: '2m ago',
    icon: '🪑',
    color: '#FF3D71',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}>
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}>
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedNotificationComponent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-screen w-dvw flex-col p-6 overflow-hidden rounded-lg bg-background md:shadow-xl',
        className,
      )}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
