import React, { useState } from 'react';

const ContactContext = React.createContext();

export function OrderProvider({ children }) {
  const [contact, setContact] = useState([]);
  return (
    <ContactContext.Provider value={[contact, setContact]}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;
