"use client";

import { siteContent } from '@/data/content';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Footer() {
  const branches = useMemo(() => siteContent.location?.branches || [], []);
  const hasBranches = branches && branches.length > 0;
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!hasBranches || branches.length <= 1) return;
    const id = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % branches.length);
    }, 7000);
    return () => clearInterval(id);
  }, [hasBranches, branches.length]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {siteContent.site.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {siteContent.site.description}
            </p>
            <div className="text-gray-300">
              <p>{siteContent.contact.info.phone}</p>
              <p>{siteContent.contact.info.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="text-gray-300 space-y-2">
              <p>{siteContent.contact.info.address}</p>
              <p>Phone: {siteContent.contact.info.phone}</p>
              <p>Email: {siteContent.contact.info.email}</p>
            </div>
          </div>

          {/* Social & Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4 mb-6">
              {siteContent.footer?.social?.instagram && (
                <a
                  href={siteContent.footer.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                  </svg>
                </a>
              )}
              {siteContent.footer?.social?.x && (
                <a
                  href={siteContent.footer.social.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M4 3h4l4.5 6L18 3h2l-6.5 8.5L21 21h-4l-5-6.7L6 21H4l7-9.1L4 3z"/>
                  </svg>
                </a>
              )}
            </div>
            <h4 className="text-lg font-semibold mb-4">Find Us</h4>
            {hasBranches ? (
              <div>
                <div className="overflow-hidden rounded-md shadow-md border border-gray-800">
                  <iframe
                    key={activeIdx}
                    src={branches[activeIdx].mapEmbed}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Location Map (Footer) - ${branches[activeIdx].name}`}
                    className="w-full"
                  ></iframe>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-400 text-sm">{branches[activeIdx].name}</p>
                  <div className="flex gap-1">
                    {branches.map((_, i) => (
                      <span
                        key={i}
                        className={`inline-block h-1.5 w-4 rounded-full ${i === activeIdx ? 'bg-blue-400' : 'bg-gray-700'}`}
                        aria-hidden="true"
                      />)
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="overflow-hidden rounded-md shadow-md border border-gray-800">
                  <iframe
                    src={siteContent.location.mapEmbed}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map (Footer)"
                    className="w-full"
                  ></iframe>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  {siteContent.location.address.street}, {siteContent.location.address.city}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}