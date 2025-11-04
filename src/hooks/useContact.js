import { useState } from 'react';

export function useContact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      return await response.json();
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return { status, error, sendEmail };
}
