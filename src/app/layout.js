"use client";
import Providers from '@/redux/app/provider';
import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import Preloader from './components/utils/Preloader';
import "./globals.css";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "Win",
  description: "Win Social Media App",
};

export default function RootLayout({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // work on preloader
    setTimeout(() => window.addEventListener("load", setLoader(false)), 1000);
  }, [loader]);

  return (
    <html lang="en">
      <body className={roboto.className}>
        {loader ? <Preloader /> : <Providers>{children}</Providers>}
      </body>
    </html>
  );
}


