'use client'
import React from 'react';
import { useEffect } from 'react';
const CookieSetter = () => {

  useEffect(() => {
    // This code will only run after the component has been rendered.
    const cookieValue = "theme=dark; expires=7"; // Set the cookie value and expiration
    document.cookie = cookieValue;
    alert(' set cookie successfully');
  }, []);

  return (
    <div className='text-center m-10'>
      <h4 className='text-5xl font-bold text-black mb-5'>Great! The cookie set successfully</h4>
      <a href='/pages/showCookies' className='bg-green-600 p-3 mt-10 rounded-lg text-black font-bold text-center
      '>Check cookies</a>
    </div>
  );
};

export default CookieSetter;
