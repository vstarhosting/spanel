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
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The ultimate alternative to cPanel for web hosting management. Manage your hosting with ease and flexibility." />
        <meta name="keywords" content="Spanel, cPanel alternative, free web hosting control panel, hosting management, web hosting, server control panel" />
        <meta name="author" content="Spanel.in" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spanel.in/" />
        <meta property="og:title" content="Spanel - Modern Web Hosting Control Panel" />
        <meta property="og:description" content="Spanel is the ultimate alternative to cPanel, offering powerful features for web hosting management." />
        <meta property="og:image" content="/spanel-logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://spanel.in/" />
        <meta name="twitter:title" content="Spanel - Modern Web Hosting Control Panel" />
        <meta name="twitter:description" content="The best alternative to cPanel for efficient web hosting management." />
        <meta name="twitter:image" content="/spanel-logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://spanel.in/" />
        
        <title>Spanel - Modern Web Hosting Control Panel</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
