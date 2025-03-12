"use client"; // Ensure this is a Client Component

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-6">
        Have questions or need assistance? We’d love to hear from you.  
      </p>
      <p className="text-lg text-gray-600 mb-6">
      Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
     
      <div className="max-w-2xl mx-auto">
        <iframe
          data-tally-src="https://tally.so/embed/npv4g8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="320"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Us"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      <p className="text-gray-500 mt-6">
        📧 For urgent inquiries, you can also reach us at  
        <strong> support@spanel.in</strong>.
      </p>
    </div>
  );
}
