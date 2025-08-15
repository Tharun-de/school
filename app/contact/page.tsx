"use client";

import { useState } from 'react';
import { siteContent } from '@/data/content';
import { Metadata } from 'next';
import ResponsiveEmbed from '@/components/ResponsiveEmbed';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.contact.title}
          </h1>
          <p className="text-xl text-gray-600">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form or Google Form */}
          <div className="bg-white rounded-xl shadow-lg p-0 overflow-hidden">
            {siteContent.contact.googleFormEmbedUrl ? (
              <div className="w-full relative">
                <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b px-6 py-4 z-10">
                  <h2 className="text-xl font-semibold text-gray-900">Enquiry Form</h2>
                  <p className="text-sm text-gray-600">Please complete the form below. Our team will reach out within 1–2 business days.</p>
                </div>
                <ResponsiveEmbed
                  src={siteContent.contact.googleFormEmbedUrl}
                  baseWidth={640}
                  baseHeight={2000}
                  className="px-4 pt-4"
                  title="Contact Form"
                />
              </div>
            ) : (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            {/* General Contact */}
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">{siteContent.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{siteContent.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">{siteContent.contact.info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Department Contacts</h3>
              
              <div className="space-y-6">
                {siteContent.contact.departments.map((dept, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                    <p className="text-sm text-gray-600">{dept.email}</p>
                    <p className="text-sm text-gray-600">{dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Preview */}
            {siteContent.location?.mapEmbed && (
              <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Find Us on the Map</h3>
                  <p className="text-sm text-gray-600 mt-1">Our campus is easy to reach and has visitor parking on site.</p>
                </div>
                <div className="relative w-full h-64">
                  <iframe
                    src={siteContent.location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <a
                    href={siteContent.location.mapEmbed}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}