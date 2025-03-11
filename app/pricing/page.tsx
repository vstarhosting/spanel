"use client";

import React, { useState } from "react";
import {
  FiLock,
  FiShield,
  FiZap,
  FiHeadphones,
  FiCheck,
} from "react-icons/fi";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("full");

  const fullPlans = [
    {
      name: "Entry",
      accounts: "Up to 5 Accounts",
      description: "Host unlimited domains in 5 accounts.",
      price: "$19.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 Full Server Management from A to Z",
        "Free Websites Migration",
        "Free Installation & Server Configuration",
        "Free Premium Softaculous 1-click Installer",
      ],
    },
    {
      name: "Pro",
      accounts: "Up to 30 Accounts",
      description: "Host unlimited domains in 30 accounts.",
      price: "$24.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 Full Server Management from A to Z",
        "Free Websites Migration",
        "Free Installation & Server Configuration",
        "Free Premium Softaculous 1-click Installer",
      ],
    },
    {
      name: "Agency",
      accounts: "Up to 100 Accounts",
      description: "Host unlimited domains in 100 accounts.",
      price: "$39.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 Full Server Management from A to Z",
        "Free Websites Migration",
        "Free Installation & Server Configuration",
        "Free Premium Softaculous 1-click Installer",
      ],
    },
  ];

  const selfPlans = [
    {
      name: "Entry",
      accounts: "Up to 5 Accounts",
      description: "Host unlimited domains in 5 accounts.",
      price: "$9.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 SPanel Support",
        "FREE Installation",
      ],
    },
    {
      name: "Pro",
      accounts: "Up to 30 Accounts",
      description: "Host unlimited domains in 30 accounts.",
      price: "$14.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 SPanel Support",
        "FREE Installation",
      ],
    },
    {
      name: "Agency",
      accounts: "Up to 100 Accounts",
      description: "Host unlimited domains in 100 accounts.",
      price: "$19.95",
      period: "/mo",
      features: [
        "All SPanel features",
        "24/7 SPanel Support",
        "FREE Installation",
      ],
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-300 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple, Flexible Pricing with Free Setup
        </h1>
        <p className="text-xl text-gray-800 mb-6">
          Free installation &amp; initial setup • SShield Real-time Protection • Blazing Performance • 24/7/365 Fully Managed
        </p>
        <a
          href="https://imp.scalahosting.com/spanel"
          target="_blank"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
        >
          See Plans &amp; Pricing
        </a>
        <p className="mt-4 text-gray-600">30-day money-back guarantee</p>
      </section>

      {/* Benefits Row */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <FiLock className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 text-sm font-medium">Free Installation &amp; Setup</p>
            </div>
            <div>
              <FiShield className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 text-sm font-medium">Real-time Protection</p>
            </div>
            <div>
              <FiZap className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 text-sm font-medium">Blazing Performance</p>
            </div>
            <div>
              <FiHeadphones className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 text-sm font-medium">24/7 Fully Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Get SPanel with the world’s best cloud hosting providers.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "AWS",
              "DigitalOcean",
              "Google Cloud",
              "Alibaba Cloud",
              "Contabo",
              "Microsoft Azure",
              "Hetzner",
              "OVH",
              "Vultr",
              "Linode",
            ].map((provider, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-gray-800 text-sm"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Toggle Switch */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Switch */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setSelectedPlan("full")}
              className={`px-6 py-3 border-b-2 font-bold ${
                selectedPlan === "full"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              FULL SERVER MANAGEMENT INCLUDED
            </button>
            <button
              onClick={() => setSelectedPlan("self")}
              className={`px-6 py-3 border-b-2 font-bold ml-4 ${
                selectedPlan === "self"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              SELF-MANAGED
            </button>
          </div>

          {selectedPlan === "full" ? (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                FULL SERVER MANAGEMENT INCLUDED
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {fullPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow p-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {plan.accounts}
                      <br />
                      {plan.description}
                    </p>
                    <div className="text-3xl font-extrabold text-gray-900 mb-4">
                      {plan.price} <span className="text-lg font-normal">{plan.period}</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <FiCheck className="text-green-500 mr-2" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://imp.scalahosting.com/spanel"
                      target="_blank"
                      className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                SELF-MANAGED
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selfPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow p-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {plan.accounts}
                      <br />
                      {plan.description}
                    </p>
                    <div className="text-3xl font-extrabold text-gray-900 mb-4">
                      {plan.price} <span className="text-lg font-normal">{plan.period}</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <FiCheck className="text-green-500 mr-2" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://imp.scalahosting.com/spanel"
                      target="_blank"
                      className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
