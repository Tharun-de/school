import { siteContent } from '@/data/content';
import Link from 'next/link';

export default function Footer() {
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

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Find Us</h4>
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