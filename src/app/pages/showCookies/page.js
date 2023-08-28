'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { NextResponse } from "next/server";

const page = () => {
    
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      // This code will only run after the component has been rendered.
      const cookies = document.cookie.split(";");
      console.log(cookies);
        const themeCookie = cookies.find((cookie) => cookie.startsWith("theme="));
        const theme=themeCookie.split('theme=')
      setTheme(theme);
    }, []);
    return (
        <div className=' m-5 text-center'>
            <h4 className='text-3xl font-bold text-center mb-5'>Here is you cookies:- <span className='text-green-600 underline'>
            {theme}
            </span>
            </h4>
            <a className='bg-green-500 p-3 text-xl font-bold rounded-lg mt-10' href="/">Go to Home</a>
            <div className='m-10'>
    
      <a href='/pages/redirect' className='bg-green-500 p-3 text-xl font-bold rounded-lg mt-20'>
        Redirect
      </a>
    </div>
        </div>
    );
};

export default page;