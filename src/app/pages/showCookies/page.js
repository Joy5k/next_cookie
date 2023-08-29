'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { NextResponse } from "next/server";

const page = () => {

    const [theme, setTheme] = useState("...");
    useEffect(() => {
      const cookies = document.cookie.split(";");
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
          <p className='mt-6'>The redirect button is optional.Also the redirect api has created</p>
    </div>
        </div>
    );
};

export default page;