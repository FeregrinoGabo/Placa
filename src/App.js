import React from 'react';
import Navigation from './navigation/Navigation';
import { BadgeProvider } from './context/BadgeContext';

export default function App() {
  return(
    <BadgeProvider>
      <Navigation />
    </BadgeProvider>
  );
}
