'use client'

import React from 'react';
import Cookies from 'js-cookie';
import CookieSetter from './pages/createCookies/page';
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const handleSetCookie = () => {
    Cookies.set('myCookie', 'cookieValue', { expires: 7 });
    
  };
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // This code will only run after the component has been rendered.
    const cookies = document.cookie.split(";");
    console.log(cookies);
    const themeCookie = cookies.find((cookie) => cookie.startsWith("theme="));
    setTheme(themeCookie);
    console.log(themeCookie);
  }, []);

  return (
    <div className=' text-center'>
      <h1 className='text-6xl font-bold m-5'>Cookie Setting Example</h1>
      <a href='/pages/createCookies' className='btn bg-green-700 p-4 rounded-lg'>Set Cookie</a>
      {/* <CookieSetter /> */}
    </div>
  );
};

export default MyComponent;
