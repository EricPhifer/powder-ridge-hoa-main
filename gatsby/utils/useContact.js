import { useState } from 'react';

export default function useContact({ values }) {
  // 1. Create state to hold message
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  async function submitContact(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // setMessage('Enjoy your pizza!');
    // Gather data to send
    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
      mapleSyrup: values.mapleSyrup,
    };
    // Send data to serverless function when they check out
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/contactMember`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'applications/json',
        },
        body: JSON.stringify(body),
      }
    );
    const checkText = JSON.parse(await res.text());
    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(checkText.errMessage);
    } else {
      // it worked!
      setLoading(false);
      setErrMessage('Success! Your message has been sent.');
    }
  }
  return {
    error,
    loading,
    errMessage,
    submitContact,
  };
}
