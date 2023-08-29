'use client'

import React from 'react';
import { useEffect } from 'react';
import page from './pages/Navbar/Navbar'
const MyComponent = () => {

  
  useEffect(() => {
    fetch('http://localhost:3000/api/setHeaders', {
      headers: {
        Authorization: '123-XYZ-JOY'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data,'get the data from main  page');
      })
  },[])

  return (
    <div className=' text-center'>
      <page></page>
      <h1 className='text-6xl font-bold m-5'>Cookie Setting Example</h1>
      <a href='/pages/createCookies' className='btn bg-green-700 p-4 rounded-lg'>Set Cookie</a>
    </div>
  );
};

export default MyComponent;
