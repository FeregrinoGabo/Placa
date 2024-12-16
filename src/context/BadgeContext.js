import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const BadgeContext = createContext();

// Proveedor del contexto
export function BadgeProvider({ children }) {
  const [profileBadgeCount, setProfileBadgeCount] = useState(0);
  const [showProfileBadge, setShowProfileBadge] = useState(false);

  // Función para incrementar el badge
  const incrementarBadge = () => {
    setProfileBadgeCount(prevCount => prevCount + 1);
    setShowProfileBadge(true);
  };

  // Función para disminuir el badge
  const disminuirBadge = () => {
    setProfileBadgeCount(prevCount => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      if (newCount === 0) {
        setShowProfileBadge(false); 
      }
      return newCount;
    });
  };

  return (
    <BadgeContext.Provider
      value={{
        profileBadgeCount,
        showProfileBadge,
        incrementarBadge,
        disminuirBadge,
      }}
    >
      {children}
    </BadgeContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useBadge() {
  return useContext(BadgeContext);
}
