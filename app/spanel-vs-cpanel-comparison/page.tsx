import React from "react";
import {
  FaMicrochip,
  FaServer,
  FaShieldAlt,
  FaWordpress,
  FaDollarSign,
  FaLightbulb,
  FaQuestionCircle,
  FaDesktop,
  FaUserCog,
  FaHandsHelping,
} from "react-icons/fa";

export default function SPanelVsCPanelComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative rounded-lg overflow-hidden shadow-2xl mb-12 bg-gradient-to-br from-teal-500 to-blue-500">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/hero-b.jpeg')" }}
          ></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              SPanel vs cPanel
              </h1>
              <p className="mt-4 text-xl text-white drop-shadow-md">
              Features, Pricing & Comparison
              </p>
              <p className="mt-4 text-xl text-white drop-shadow-md">
              Compare SPanel and cPanel in terms of features, pricing, security, and ease of use. 
              </p>
              <p className="mt-4 text-xl text-white drop-shadow-md">
              Find the best hosting control panel for your needs.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <img
                src="/assets/spanel-vs-cpanel.jpg"
                alt="SPanel vs cPanel"
                className="w-48 md:w-64 rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-left">SPanel</th>
                  <th className="px-4 py-3 text-left">cPanel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Ease of Use</td>
                  <td className="px-4 py-2">5/5</td>
                  <td className="px-4 py-2">5/5</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Resource Consumption</td>
                  <td className="px-4 py-2">Lightweight</td>
                  <td className="px-4 py-2">Resource-Heavy</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Security System</td>
                  <td className="px-4 py-2">SShield</td>
                  <td className="px-4 py-2">Standard</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">WordPress Management</td>
                  <td className="px-4 py-2">SWordPress Manager</td>
                  <td className="px-4 py-2">Basic Installer</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Branding</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Multiple PHP Versions</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Automated Backups</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Apache Support</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">Nginx Support</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">No</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">OpenLiteSpeed Support</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">No</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">LiteSpeed Enterprise</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2">SpamAssassin</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="px-4 py-2">SSH Access Management</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparison Sections */}
        <section className="space-y-12 mb-12">
          {/* Resource Consumption */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaMicrochip className="text-teal-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">Resource Consumption</h3>
            </div>
            <p className="text-gray-700">
              cPanel has a very large number of features and options, which is perfect for advanced users. But most average hosting customers might not need all its advanced features.
            </p>
            <p className="mt-4 text-gray-700">
              On the other hand, SPanel is optimized for performance and efficiency. Its optimized structure guarantees that even low-resource VPS configurations (below 2 GB RAM and approximately 20 GB disk space) run smoothly.
            </p>
          </article>

          {/* Supported Services */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaServer className="text-blue-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">Supported Services</h3>
            </div>
            <p className="text-gray-700">
              cPanel plays exceptionally well with the Apache web server—a shared hosting standard. Its support for LiteSpeed also improves the performance of static content.
            </p>
            <p className="mt-4 text-gray-700">
              SPanel is even more versatile with support for Apache, LiteSpeed, Nginx, and OpenLiteSpeed, allowing you to choose your favorite server technology for your project.
            </p>
          </article>

          {/* Security */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-red-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">Security</h3>
            </div>
            <p className="text-gray-700">
              Both panels include basic security features such as firewalls and secure directories, but cPanel has a wide array of default security options.
            </p>
            <p className="mt-4 text-gray-700">
              SPanel goes one step further with SShield. This bespoke security tool uses machine learning and AI to block suspicious activity or potential DDoS attacks before they reach your server, and actively monitors your account to help patch vulnerabilities.
            </p>
          </article>

          {/* WordPress Management */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaWordpress className="text-indigo-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">WordPress Management</h3>
            </div>
            <p className="text-gray-700">
              While cPanel resorts to one-click installers to deploy popular CMS solutions, SPanel is truly WordPress-optimized.
            </p>
            <p className="mt-4 text-gray-700">
              Its integrated SWordPress Manager handles installations, automatic updates, and includes a Security Lock feature to protect your files until changes are needed.
            </p>
          </article>

          {/* Cost */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-green-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">Cost</h3>
            </div>
            <p className="text-gray-700">
              cPanel has consistently increased its licensing prices, with the latest adjustment taking effect on January 1, 2025. This is its sixth consecutive pricing change, impacting various hosting programs.
            </p>
            <p className="mt-4 text-gray-700">
              In contrast, SPanel offers clear, fixed pricing plans, making it a more predictable and budget-friendly option.
            </p>
          </article>

          {/* Final Thoughts */}
          <article className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-yellow-500 mr-3 text-2xl" />
              <h3 className="text-3xl font-bold text-gray-800">Final Thoughts</h3>
            </div>
            <p className="mt-4 text-gray-700">
              While cPanel remains a powerful, feature-rich hosting control panel, its recurring price increases may not suit every user. SPanel delivers ease of use, enhanced security, and cost-effectiveness in one compelling package.
            </p>
          </article>
        </section>

        {/* Pricing Comparison Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Pricing Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* cPanel Pricing */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <FaDesktop className="text-purple-500 mr-3 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-800">cPanel Pricing</h3>
              </div>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="px-4 py-2 border">Plan</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Accounts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Sole</td>
                    <td className="px-4 py-2 border">$26 /mo</td>
                    <td className="px-4 py-2 border">Only One</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Admin</td>
                    <td className="px-4 py-2 border">$32.99 /mo</td>
                    <td className="px-4 py-2 border">Up to 5 Accounts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Pro</td>
                    <td className="px-4 py-2 border">$46.99 /mo</td>
                    <td className="px-4 py-2 border">Up to 30 Accounts</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Premier</td>
                    <td className="px-4 py-2 border">$65.99 /mo</td>
                    <td className="px-4 py-2 border">Up to 100 Accounts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* SPanel Pricing */}
            <div>
              {/* Self Managed Pricing */}
              <div className="bg-white p-6 rounded-lg shadow-xl mb-6">
                <div className="flex items-center mb-4">
                  <FaUserCog className="text-pink-500 mr-3 text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-800">SPanel - Self Managed</h3>
                </div>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="px-4 py-2 border">Plan</th>
                      <th className="px-4 py-2 border">Price</th>
                      <th className="px-4 py-2 border">Accounts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-2 border">Entry</td>
                      <td className="px-4 py-2 border">$9.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 5 Accounts</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Pro</td>
                      <td className="px-4 py-2 border">$14.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 30 Accounts</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-2 border">Agency</td>
                      <td className="px-4 py-2 border">$19.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 100 Accounts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Managed Pricing */}
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center mb-4">
                  <FaHandsHelping className="text-green-500 mr-3 text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-800">SPanel - Managed</h3>
                </div>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="px-4 py-2 border">Plan</th>
                      <th className="px-4 py-2 border">Price</th>
                      <th className="px-4 py-2 border">Accounts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-2 border">Entry</td>
                      <td className="px-4 py-2 border">$19.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 5 Accounts</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Pro</td>
                      <td className="px-4 py-2 border">$24.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 30 Accounts</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-2 border">Agency</td>
                      <td className="px-4 py-2 border">$39.95 /mo</td>
                      <td className="px-4 py-2 border">Up to 100 Accounts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            <FaQuestionCircle className="inline-block mr-2 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                What is SPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                SPanel is a proprietary control panel developed by ScalaHosting, designed to offer a streamlined, user-friendly experience with powerful website management features.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                What is cPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                cPanel is a widely recognized control panel used by many hosting providers, offering a comprehensive suite of tools for efficient website and server management.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                What are the main differences between SPanel and cPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                Key differences include performance, pricing, and support. SPanel emphasizes lightweight performance and enhanced security, while cPanel provides a more extensive feature set that may require more resources.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                How do I choose the right control panel for my needs?
              </h3>
              <p className="mt-2 text-gray-700">
                Evaluate factors such as feature set, performance, pricing, and customer support. Consider your website’s specific requirements to determine which panel best aligns with your needs.
              </p>
            </div>
            {/* FAQ 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                Which should I choose: SPanel or cPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                The decision depends on your individual requirements. SPanel offers cost-effectiveness and efficiency, while cPanel delivers a more extensive feature set. Assess your priorities to make the best choice.
              </p>
            </div>
            {/* FAQ 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                How smooth is the migration process from cPanel to SPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                Migration is generally straightforward, with ScalaHosting providing robust tools and dedicated support to ensure a seamless transition between control panels.
              </p>
            </div>
            {/* FAQ 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                Are there any limitations with SPanel compared to cPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                While SPanel is optimized for speed and efficiency, some advanced features in cPanel may differ. It’s essential to review your hosting needs before making a decision.
              </p>
            </div>
            {/* FAQ 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                Is technical support available for SPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, ScalaHosting offers dedicated technical support for SPanel users, including help with installation, migration, and troubleshooting.
              </p>
            </div>
            {/* FAQ 9 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                Can I manage multiple websites using SPanel?
              </h3>
              <p className="mt-2 text-gray-700">
                Absolutely. SPanel is designed to efficiently handle multiple websites, providing flexible account management for both individual users and hosting providers.
              </p>
            </div>
            {/* FAQ 10 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-600" />
                How does SPanel handle updates and ongoing maintenance?
              </h3>
              <p className="mt-2 text-gray-700">
                SPanel is continually updated with new features and security enhancements. ScalaHosting ensures reliability through regular maintenance and proactive support.
              </p>
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="mb-4">
          <p className="text-center text-sm italic text-gray-600">
            Note: This information was last gathered on 15-03-2025. Pricing and features may change; please refer to the official websites of SPanel and cPanel for the latest details. Thank you.
          </p>
        </section>
      </main>
    </div>
  );
}
