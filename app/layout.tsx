import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
  title: 'Spanel: The Best cPanel Alternative for Web Hosting',
  description: 'Spanel is a powerful, user-friendly cPanel alternative, offering efficient web hosting management with advanced features and seamless control.',
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
        <meta name="keywords" content="Spanel, cPanel alternative, free web hosting control panel, hosting management, web hosting, server control panel" />
        <meta name="author" content="Spanel.in" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spanel.in/" />
        <meta property="og:title" content="Spanel: The Best cPanel Alternative for Web Hosting" />
        <meta property="og:description" content="Spanel is a powerful, user-friendly cPanel alternative, offering efficient web hosting management with advanced features and seamless control." />
        <meta property="og:image" content="/spanel-logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://spanel.in/" />
        <meta name="twitter:title" content="Spanel: The Best cPanel Alternative for Web Hosting" />
        <meta name="twitter:description" content="Spanel is a powerful, user-friendly cPanel alternative, offering efficient web hosting management with advanced features and seamless control." />
        <meta name="twitter:image" content="/spanel-logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://spanel.in/" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Spanel",
              "image": "https://spanel.in/spanel-logo.png",
              "url": "https://spanel.in",
              "description": "Spanel is a modern web hosting control panel, serving as a powerful alternative to cPanel with advanced features and flexibility.",
              "operatingSystem": "Linux",
              "applicationCategory": "WebApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Spanel",
                  "url": "https://spanel.in"
                }
              },
              "softwareVersion": "1.0",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "120"
              },
              "author": {
                "@type": "Organization",
                "name": "Spanel",
                "url": "https://spanel.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Spanel",
                "url": "https://spanel.in"
              }
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
