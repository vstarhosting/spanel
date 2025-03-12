"use client";

import React from 'react';
import {
  FiUser,
  FiShield,
  FiTag,
  FiTerminal,
  FiServer,
  FiCode,
  FiLayers,
  FiLock,
  FiUserPlus,
  FiRefreshCw,
  FiThumbsUp,
  FiTool,
  FiHeadphones,
  FiUserCheck,
  FiMessageCircle,
  FiDatabase,
  FiCloud,
  FiEdit3,
} from 'react-icons/fi';
import { SiPhp, SiNodedotjs } from 'react-icons/si';

const HomePage = () => {
  // Features array with related icons for each feature
  const features = [
    { title: "Admin, User & Email interface", Icon: FiUser },
    { title: "Shield Cyber-security system", Icon: FiShield },
    { title: "Custom branding", Icon: FiTag },
    { title: "Easy SwordPress Management", Icon: FiEdit3 },
    { title: "Powerful HTTP API & CLI", Icon: FiTerminal },
    { title: "Runs on both VPS & Physical servers", Icon: FiServer },
    { title: "Ideal for Developers & Hosting Companies", Icon: FiCode },
    { title: "Apache, Nginx, Open-LiteSpeed", Icon: FiLayers },
    { title: "Multiple PHP versions", Icon: SiPhp },
    { title: "Let’s Encrypt SSL Integration", Icon: FiLock },
    { title: "NodeJS Support", Icon: SiNodedotjs },
    { title: "Manage sub-admins & sub-users", Icon: FiUserPlus },
    { title: "Automated Migrations from cPanel", Icon: FiRefreshCw },
    { title: "Hassle-Free Management", Icon: FiThumbsUp },
    { title: "Free Installation & Initial Server Setup", Icon: FiTool },
    { title: "24/7/365 Technical Support", Icon: FiHeadphones },
    { title: "Optional Fully Managed Service", Icon: FiUserCheck },
    { title: "Optional End User Live Chat Support", Icon: FiMessageCircle },
    { title: "Automatic Software Updates", Icon: FiCloud },
    { title: "Manage Local & Remote Backups", Icon: FiDatabase },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50">
      {/* Hero Section with Modern Design */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 py-20 relative overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
           backgroundImage: 'url(/hero-b.jpeg)', // Replace with your SVG or remove for a solid gradient
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Hero Text & Call to Action */}
          <div className="text-left">
            <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              <span className="text-blue-700">SPanel</span> - Your Affordable Alternative to cPanel for Web Hosting Control
            </h1>
            <p className="text-xl text-gray-700 mb-8">
            Explore Spanel.in for Spanel.io, the efficient, cost-effective alternative to cPanel. Discover easy server management, seamless website control, and powerful features without the high costs. Perfect for web hosting providers and developers!
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center">
  <a
    href="https://imp.scalahosting.com/spanel"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition-colors duration-300 w-full sm:w-auto text-center"
  >
    Get Started Free
  </a>
  <a
    href="https://imp.scalahosting.com/spanel"
    target="_blank"
    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 rounded-lg border border-blue-500 hover:border-transparent transition-colors duration-300 w-full sm:w-auto text-center"
  >
    Learn More
  </a>
</div>

          </div>

          {/* Right Column - Hero Image/Ad */}
          <div className="flex justify-center">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1742657/18136"
              target="_top"
              id="1742657"
            >
              <img
                src="/assets/Convert-AWS-Hetzner-Google-Cloud-into-a-fully-managed-hosting-service-with-SPanel-250x250.png"
                alt="ScalaHosting Ad"
                width="300"
                height="300"
                className="rounded-xl shadow-lg"
              />
            </a>
           
          </div>
        </div>
      </section>

    {/* Buttons Section - Responsive & Mobile Friendly */}
<section className="py-12 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
      Explore SPanel Further
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://imp.scalahosting.com/spanel"
        target="_blank"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-md shadow-sm transition-colors duration-300 w-full sm:w-auto"
      >
        Get Started
      </a>
      <a
        href="https://imp.scalahosting.com/spanel"
        target="_blank"
        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-md shadow-sm transition-colors duration-300 w-full sm:w-auto"
      >
        Learn More
      </a>
      <a
        href="https://imp.scalahosting.com/spanel"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-md shadow-sm transition-colors duration-300 w-full sm:w-auto"
      >
        Free Trial
      </a>
      <a
        href="https://imp.scalahosting.com/spanel"
        target="_blank"
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-2 px-4 md:py-2.5 md:px-5 rounded-md shadow-sm transition-colors duration-300 w-full sm:w-auto"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>


      {/* Ad Section 2: Banner Ad - More Integrated */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="rounded-md overflow-hidden shadow-md">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1742659/18136"
              target="_top"
              id="1742659"
            >
              <img
                src="/assets/Convert-AWS-Hetzner-Google-Cloud-into-a-fully-managed-hosting-service-with-SPanel-468x60.png"
                alt="Banner Ad"
                width="468"
                height="60"
                className="block"
              />
            </a>

          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Powerful Features for Complete Hosting Control
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-blue-500 text-white rounded-full">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad Section 3: Wide Banner Ad - Integrated */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="rounded-md overflow-hidden shadow-md">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1736987/18136"
              target="_top"
              id="1736987"
            >
              <img
                src="/assets/SPanel_banner_1248_235.png"
                alt="Wide Banner Ad"
                width="1248"
                height="235"
                className="block"
              />
            </a>

          </div>
        </div>
      </section>

      {/* Ad Section 4: Full-Width Huge Ad - Slightly Less Prominent */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1736996/18136"
              target="_top"
              id="1736996"
            >
              <img
                src="/assets/SPanel_user_interface.png"
                alt="Huge Ad"
                width="1920"
                height="2467"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </a>
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
