"use client"
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className={`relative`}>
      <main>
        <div className="">{children}</div>
      </main>
    </main>
  );
};

export default Layout