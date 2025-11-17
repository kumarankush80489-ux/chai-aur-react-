import React from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to our website! By accessing or using this site, you agree to comply with and be
        bound by the following terms and conditions. Please read them carefully before using our
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <p className="mb-4">
        You agree to use this website only for lawful purposes and in a manner that does not
        infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any
        third party.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, images, and text on this website are the property of their respective
        owners and are protected by copyright and intellectual property laws. You may not reproduce,
        distribute, or modify any part without prior permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Links to Other Websites</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites such as Discord or social media
        platforms. We are not responsible for the content, privacy policies, or practices of these
        third-party sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any direct or indirect damages arising from the use or inability to
        use our website or any linked services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to These Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Changes will be posted on this page,
        and continued use of the site means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us through our{" "}
        <Link to="/contact" className="text-blue-600 underline">
          Contact Page
        </Link>
        .
      </p>

      <p className="text-center text-gray-600 mt-8">Last updated: November 2025</p>
    </div>
  );
}
