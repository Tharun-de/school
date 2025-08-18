import { siteContent } from '@/data/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Location - ${siteContent.site.name}`,
  description: `Visit our campus at ${siteContent.location.address.street}, ${siteContent.location.address.city}`,
};

export default function Location() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.location.title}
          </h1>
          <p className="text-xl text-gray-600">
            {siteContent.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      {siteContent.location.address.street}<br />
                      {siteContent.location.address.city}, {siteContent.location.address.state} {siteContent.location.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">{siteContent.location.address.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{siteContent.location.address.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Campus Hours</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Office Hours</p>
                  <p className="text-gray-600">{siteContent.location.hours.office}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Campus Access</p>
                  <p className="text-gray-600">{siteContent.location.hours.campus}</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Directions:</strong> {siteContent.location.directions}
                </p>
              </div>
            </div>
          </div>

          {/* Maps carousel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900">Our Branches</h2>
                <p className="text-gray-600 mt-2">Scroll to view maps</p>
              </div>
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 p-4">
                  {siteContent.location.branches?.map((b, i) => (
                    <div key={i} className="min-w-[320px] md:min-w-[480px] lg:min-w-[560px] snap-center">
                      <div className="p-3">
                        <h3 className="text-lg font-semibold text-gray-900">{b.name}</h3>
                        <p className="text-sm text-gray-600">{b.address}</p>
                      </div>
                      <iframe
                        src={b.mapEmbed}
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map - ${b.name}`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}