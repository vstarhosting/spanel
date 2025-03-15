import React from "react";

const tableData = [
  {
    name: "CloudPanel",
    link: "https://www.cloudpanel.io/",
    webInterface: "Modern UI",
    osSupport: "Ubuntu, Debian",
    webServer: "Nginx",
    database: "MySQL, MariaDB",
    emailServer: "No",
    freeLicense: "Yes",
  },
  {
    name: "VestaCP",
    link: "https://vestacp.com/",
    webInterface: "Simple UI",
    osSupport: "RHEL, CentOS, Ubuntu, Debian",
    webServer: "Apache, Nginx",
    database: "MySQL, PostgreSql",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "ISPConfig",
    link: "https://www.ispconfig.org/",
    webInterface: "Feature-Rich",
    osSupport: "Ubuntu, Debian, CentOS",
    webServer: "Apache, Nginx",
    database: "MySQL, MariaDB",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "HestiaCP",
    link: "https://hestiacp.com/",
    webInterface: "User-Friendly",
    osSupport: "Ubuntu, Debian",
    webServer: "Apache, Nginx",
    database: "MySQL, MariaDB, PostgreSQL",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "FastPanel",
    link: "https://fastpanel.direct/",
    webInterface: "Modern UI",
    osSupport: "Ubuntu, Debian, CentOS, AlmaLinux, Rocky",
    webServer: "Apache, Nginx",
    database: "MySQL, PostgreSQL",
    emailServer: "Yes",
    freeLicense: "Free (activation required)",
  },
  {
    name: "Froxlor",
    link: "http://froxlor.org",
    webInterface: "Modern UI & UX Design",
    osSupport: "Debian , Ubuntu",
    webServer: "Apache, Nginx",
    database: "MySQL, MariaDB",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "KeyHelp",
    link: "https://www.keyhelp.de/en/",
    webInterface: "Easy-to-use",
    osSupport: "Ubuntu, Debian",
    webServer: "Apache",
    database: "MySQL",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "aaPanel",
    link: "https://www.aapanel.com/",
    webInterface: "Modern UI",
    osSupport: "Ubuntu, CentOS, Debian, CloudLinux, AlmaLinux, Rocky",
    webServer: "Apache, Nginx",
    database: "MySQL",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "CyberPanel",
    link: "https://cyberpanel.net/",
    webInterface: "Fast & Lightweight",
    osSupport: "Ubuntu, AlmaLinux, AlmaLinux, CloudLinux ",
    webServer: "OpenLiteSpeed, LiteSpeed",
    database: "MySQL",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
  {
    name: "CentOS Web Panel",
    link: "https://control-webpanel.com/",
    webInterface: "Feature-Rich",
    osSupport: "CentOS, RHEL, CloudLinux",
    webServer: "Apache, Nginx",
    database: "MariaDB, PostgreSQL, MongoDB",
    emailServer: "Yes",
    freeLicense: "Yes",
  },
];

export default function CPanelAlternativesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative rounded-lg overflow-hidden shadow-2xl mb-12 bg-gradient-to-br from-purple-600 to-pink-500">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/hero-b.jpeg')" }}
          ></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              10 Free cPanel Alternatives for Web Hosting Control Panels
              </h1>
              <p className="mt-4 text-xl text-white drop-shadow-md">
                Discover the best cPanel Alternatives for Web Hosting Control Panels.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <img
                src="/free-cpanel-alternatives.webp"
                alt="Free cPanel Alternatives"
                className="w-48 md:w-64 rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </section>

        {/* Title and Description */}
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Compare &amp; Explore</h2>
          <p className="mt-2 text-lg text-gray-600">
            A quick comparison table followed by detailed info for each control panel.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Control Panel</th>
                <th className="px-4 py-3 text-left">Web Interface</th>
                <th className="px-4 py-3 text-left">OS Support</th>
                <th className="px-4 py-3 text-left">Web Server</th>
                <th className="px-4 py-3 text-left">Database</th>
                <th className="px-4 py-3 text-left">Email Server</th>
                <th className="px-4 py-3 text-left">Free License</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((panel, index) => (
                <tr
                  key={index}
                  className={`transition duration-300 hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td className="px-4 py-2">
                    <a
                      href={panel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {panel.name}
                    </a>
                  </td>
                  <td className="px-4 py-2">{panel.webInterface}</td>
                  <td className="px-4 py-2">{panel.osSupport}</td>
                  <td className="px-4 py-2">{panel.webServer}</td>
                  <td className="px-4 py-2">{panel.database}</td>
                  <td className="px-4 py-2">{panel.emailServer}</td>
                  <td className="px-4 py-2">{panel.freeLicense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detailed Information Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tableData.map((panel, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{panel.name}</h3>
              <p className="text-gray-700 mb-4">
                {panel.name} offers a <strong>{panel.webInterface.toLowerCase()}</strong> interface and supports{" "}
                <strong>{panel.osSupport}</strong> with options like <strong>{panel.webServer}</strong>. It uses{" "}
                <strong>{panel.database}</strong> for database management and provides{" "}
                {panel.emailServer === "Yes" ? (
                  <strong>with Email Hosting</strong>
                ) : (
                  <strong>without Email Hosting</strong>
                )}. License: <strong>Free</strong>.
              </p>
              <a
                href={panel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow-md transition"
              >
                Visit Website
              </a>
            </article>
          ))}
        </section>

        {/* Notes Section */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">Notes</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              For beginners, HestiaCP, FastPanel, and CloudPanel offer user-friendly interfaces.
            </li>
            <li>
              Advanced users might prefer ISPConfig for its extensive feature set.
            </li>
            <li>
              If email hosting is a priority, choose options like VestaCP and HestiaCP.
            </li>
            <li>
              CyberPanel is optimal for performance-focused hosting with LiteSpeed.
            </li>
            <li>
              CentOS Web Panel is ideal for servers running CentOS-based distributions.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}