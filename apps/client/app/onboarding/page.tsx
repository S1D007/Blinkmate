'use client';

import React, { useEffect, useState } from 'react';
import AnimatedBeamComponent from './_components/AnimatedBeamComponent';
import AnimatedNotificationComponent from './_components/AnimatedNotificationComponent';

const COMPONENTS = [<AnimatedNotificationComponent />, <AnimatedBeamComponent />];

function page() {
  const [currentComponent, setCurrentComponent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComponent(prev => (prev + 1) % COMPONENTS.length);
    }, 6000);
    return () => clearInterval(interval);
  });

  return <React.Fragment>{COMPONENTS[currentComponent]}</React.Fragment>;
}

export default page;
