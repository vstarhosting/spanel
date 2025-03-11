import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
  title: 'Spanel - Modern Web Hosting Control Panel',
  description: 'The ultimate alternative to cPanel for web hosting management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
