"use client";
import React, { useEffect } from "react";
import "./globals.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { initGA, logPageView } from "../utils/analytics";
import Head from "next/head";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G199H66HW9"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || []; 
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date()); 
            gtag('config', 'G-G199H66HW9');
          `}
        </script>
      </Head>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
