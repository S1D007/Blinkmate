'use client';

import React, { useEffect, useState } from 'react';
import AnimatedBeamComponent from './_components/AnimatedBeamComponent';
import AnimatedNotificationComponent from './_components/AnimatedNotificationComponent';
import { useRouter } from 'next/navigation';

const COMPONENTS = [<AnimatedNotificationComponent />, <AnimatedBeamComponent />];

function page() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentComponent(prev => prev + 1);
        if (currentComponent === COMPONENTS.length - 1) {
          router.push('auth');
        }
      },
      currentComponent === 0 ? 6000 : 3000,
    );
    return () => clearInterval(interval);
  });

  return <React.Fragment>{COMPONENTS[currentComponent]}</React.Fragment>;
}

export default page;
