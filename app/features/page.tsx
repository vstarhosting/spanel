"use client";

import React from 'react';
import {
  FiMail,
  FiGlobe,
  FiDatabase,
  FiFolder,
  FiShield,
  FiZap,
  FiBarChart2,
  FiUsers,
  FiMessageSquare,
  FiHeadphones,
  FiEdit3,
  FiCode,
  FiClock,
  FiUpload,
  FiTrendingUp,
  FiUserCheck,
  FiAlertTriangle,
  FiTerminal,
  FiLayers,
  FiShoppingCart,
  FiActivity,
  FiRefreshCw,
  FiCopy,
  FiServer,
  FiUserPlus,
  FiLock,
} from 'react-icons/fi';
import { SiPhp, SiNodedotjs } from 'react-icons/si';

const Features = () => {
  // Group 1: Features for Everyone
  const featuresForEveryone = [
    {
      title: "Manage Emails",
      description:
        "Manage all your email boxes, forwarders, auto-responders and email filters for all your domain names from a single graphic interface. Switch your emails to Gmail with a single click. Check your email via webmail from any device with internet access.",
      Icon: FiMail,
    },
    {
      title: "Manage Domains",
      description:
        "Add, remove or change domain names and subdomains. Set or change the document root for each with a single click.",
      Icon: FiGlobe,
    },
    {
      title: "Manage Databases",
      description:
        "Manage your MySQL databases and users from an intuitive and easy-to-use interface.",
      Icon: FiDatabase,
    },
    {
      title: "Manage Files",
      description:
        "Access your files via FTP or the file manager in SPanel to create, edit, upload, and archive files effortlessly.",
      Icon: FiFolder,
    },
    {
      title: "Secure WordPress",
      description:
        "Install, update & secure unlimited WordPress websites using the SWordPress Manager. The Security LOCK feature keeps your WP sites ultra-secure.",
      Icon: FiShield,
    },
    {
      title: "1-Click Installer",
      description:
        "Install WordPress, Joomla, Magento, Prestashop and 400+ web applications with a single click via the integrated Softaculous auto installer.",
      Icon: FiZap,
    },
    {
      title: "Backups",
      description:
        "Generate on-demand backups and store them locally or on a remote FTP server. View, download, or restore files and databases easily.",
      Icon: FiBarChart2,
    },
    {
      title: "Web Statistics",
      description:
        "View live web statistics for each of your websites with the integrated GoAccess web stats.",
      Icon: FiActivity,
    },
    {
      title: "Manage Users",
      description:
        "Grant access to additional users in the SPanel interface. Specify which features the user may access.",
      Icon: FiUsers,
    },
    {
      title: "Your Voice Matters!",
      description:
        "New features in SPanel are developed based on user demand. Contribute by suggesting or voting at https://features.spanel.io.",
      Icon: FiMessageSquare,
    },
    {
      title: "Fully Managed Services",
      description:
        "If you lack a full server admin team, use our 24/7/365 fully managed service for your server and hosted accounts. Get professional assistance for all your server-related questions.",
      Icon: FiHeadphones,
    },
  ];

  // Group 2: Features for Developers & Web Studios
  const featuresForDevelopers = [
    {
      title: "Branding",
      description:
        "Upload your logo and add your brand to remove SPanel branding and make the control panel look like your own.",
      Icon: FiEdit3,
    },
    {
      title: "Manage API Access",
      description:
        "Integrate 3rd party applications with SPanel. Generate tokens and set access levels to restrict API functionality.",
      Icon: FiCode,
    },
    {
      title: "PHP Management",
      description:
        "Select the PHP version for each website and change default PHP settings with the Custom PHP.ini Editor.",
      Icon: SiPhp,
    },
    {
      title: "Manage MySQL Databases",
      description:
        "Clone, rename, repair, or drop databases instantly. Manage databases via PhpMyAdmin or enable remote access with a click.",
      Icon: FiDatabase,
    },
    {
      title: "Manage DNS Records",
      description:
        "Add, remove, or edit DNS records using the DNS Editor in SPanel.",
      Icon: FiGlobe,
    },
    {
      title: "Let’s Encrypt Integration",
      description:
        "Each domain and subdomain automatically gets a free SSL certificate from Let’s Encrypt with automatic renewal. Wildcard certificates are supported.",
      Icon: FiShield,
    },
    {
      title: "Apache/PHP Logs",
      description:
        "Download or view Apache and PHP logs for your websites.",
      Icon: FiFolder,
    },
    {
      title: "HTTP/2 & HTTP/3 Support",
      description:
        "Both HTTP/2 and HTTP/3 are supported to ensure faster website loading.",
      Icon: FiTrendingUp,
    },
    {
      title: "Staging, Cloning and More",
      description:
        "Utilize staging, cloning, and both automatic and on-demand backups via the Softaculous integration.",
      Icon: FiCopy,
    },
    {
      title: "Cron Jobs",
      description:
        "Manage scheduled tasks from an easy-to-use graphic interface or via SSH.",
      Icon: FiClock,
    },
    {
      title: "FTP Management",
      description:
        "Create, remove, or change passwords for FTP users and restrict directory access as needed.",
      Icon: FiUpload,
    },
    {
      title: "Usage Report",
      description:
        "View resource usage details—CPU, disk space, inodes, and counts of domains, databases, emails, and FTP accounts.",
      Icon: FiTrendingUp,
    },
    {
      title: "NodeJS Support",
      description:
        "Deploy, undeploy, start, stop, or restart NodeJS applications with one click.",
      Icon: SiNodedotjs,
    },
    {
      title: "Web Statistics",
      description:
        "Access live web statistics for each website via integrated GoAccess stats.",
      Icon: FiBarChart2,
    },
    {
      title: "Your Voice Matters!",
      description:
        "Suggest new features or vote for existing ones at https://features.spanel.io.",
      Icon: FiMessageSquare,
    },
    {
      title: "Fully Managed Services",
      description:
        "Enjoy 24/7/365 fully managed services for your server and hosted accounts, included in the Fully Managed license addon.",
      Icon: FiHeadphones,
    },
  ];

  // Group 3: Features for Admins & Web Hosters
  const featuresForAdmins = [
    {
      title: "Server Management",
      description:
        "Monitor your server’s health and get notified when more CPU or memory is needed. View configurations, system load, memory, disk usage, and restart services or the entire server as necessary.",
      Icon: FiServer,
    },
    {
      title: "Manage Admin Users",
      description:
        "Add additional administrators to the SPanel Admin Interface and set their access levels, restricting them to only the desired features.",
      Icon: FiUserCheck,
    },
    {
      title: "Packages",
      description:
        "Create packages with pre-defined resource limits such as disk space, inodes, domains, emails, and databases.",
      Icon: FiLayers,
    },
    {
      title: "Manage Accounts",
      description:
        "Create, terminate, upgrade, downgrade, suspend, or manage individual accounts from the SPanel Admin Interface.",
      Icon: FiUserPlus,
    },
    {
      title: "Passwords & 2FA Authentication",
      description:
        "Change account passwords or enable/disable two-factor authentication (2FA) for enhanced security.",
      Icon: FiLock,
    },
    {
      title: "SPF / DKIM / DMARC",
      description:
        "Automatically add SPF, DKIM & DMARC records for 100% email inbox delivery. Manage these records via the DNS Editor.",
      Icon: FiMail,
    },
    {
      title: "Configure SpamAssassin",
      description:
        "Enable and configure SpamAssassin to filter out junk emails effectively.",
      Icon: FiAlertTriangle,
    },
    {
      title: "SSH Access",
      description:
        "Enable or disable SSH access for an account with a single click.",
      Icon: FiTerminal,
    },
    {
      title: "Resource Usage",
      description:
        "Review average resource usage (CPU, RAM) for each account for today or past dates.",
      Icon: FiActivity,
    },
    {
      title: "Manage LiteSpeed",
      description:
        "Replace Apache with LiteSpeed Enterprise – the fastest web server and a 100% Apache drop-in replacement.",
      Icon: FiZap,
    },
    {
      title: "Manage OpenLiteSpeed",
      description:
        "Switch from Apache to OpenLiteSpeed with one click and manage it from a graphical interface.",
      Icon: FiZap,
    },
    {
      title: "Manage Nginx",
      description:
        "Install and configure Nginx as a reverse Apache proxy with one click. Enable/disable micro-cache, set cache expiration, or clear the cache.",
      Icon: FiGlobe,
    },
    {
      title: "Automatic Updates",
      description:
        "SPanel checks for updates every 30 minutes and updates automatically.",
      Icon: FiRefreshCw,
    },
    {
      title: "WHMCS Integration",
      description:
        "Automate account management with the WHMCS server module for SPanel.",
      Icon: FiShoppingCart,
    },
    {
      title: "Fully Managed Services",
      description:
        "Take advantage of 24/7/365 fully managed services for your server and hosted accounts, included in the Fully Managed license addon.",
      Icon: FiHeadphones,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features for Everyone */}
        <section className="mb-16">
          <h2 className="relative text-4xl font-extrabold text-center text-gray-900 mb-10">
            Features for Everyone
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full bg-indigo-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresForEveryone.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-indigo-500 text-white rounded-full">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 break-words">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://imp.scalahosting.com/spanel"
              target="_blank"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Ad Section 1 */}
        <section className="mb-16 flex justify-center">
          <div className="text-center">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1742659/18136"
              target="_top"
              id="1742659"
            >
              <img
                src="//a.impactradius-go.com/display-ad/18136-1742671"
                alt=""
                className="w-full max-w-[250px] h-auto"
              />
            </a>
            <img
              height="0"
              width="0"
              src="https://imp.pxf.io/i/5858687/1742671/18136"
              style={{ position: "absolute", visibility: "hidden" }}
              alt=""
            />
          </div>
        </section>

        {/* Features for Developers & Web Studios */}
        <section className="mb-16">
          <h2 className="relative text-4xl font-extrabold text-center text-gray-900 mb-10">
            Features for Developers & Web Studios
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full bg-emerald-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresForDevelopers.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-emerald-500 text-white rounded-full">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 break-words">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://imp.scalahosting.com/spanel"
              target="_blank"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Ad Section 2 */}
        <section className="mb-16 flex justify-center">
          <div className="text-center">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1742654/18136"
              target="_top"
              id="1742654"
            >
              <img
                src="//a.impactradius-go.com/display-ad/18136-1742671"
                alt=""
                className="w-full max-w-[250px] h-auto"
              />
            </a>
            <img
              height="0"
              width="0"
              src="https://imp.pxf.io/i/5858687/1742671/18136"
              style={{ position: "absolute", visibility: "hidden" }}
              alt=""
            />
          </div>
        </section>

        {/* Features for Admins & Web Hosters */}
        <section className="mb-16">
          <h2 className="relative text-4xl font-extrabold text-center text-gray-900 mb-10">
            Features for Admins & Web Hosters
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full bg-rose-500"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresForAdmins.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 bg-rose-500 text-white rounded-full">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-base text-gray-600 break-words">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://imp.scalahosting.com/spanel"
              target="_blank"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Ad Section 3 */}
        <section className="mb-16 flex justify-center">
          <div className="text-center">
            <a
              rel="sponsored"
              href="https://imp.scalahosting.com/c/5858687/1742651/18136"
              target="_top"
              id="1742651"
            >
              <img
                src="//a.impactradius-go.com/display-ad/18136-1742651"
                alt=""
                className="w-full max-w-[250px] h-auto"
              />
            </a>
            <img
              height="0"
              width="0"
              src="https://imp.pxf.io/i/5858687/1742651/18136"
              style={{ position: "absolute", visibility: "hidden" }}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
