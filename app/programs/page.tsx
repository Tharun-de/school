import { siteContent } from '@/data/content';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: `Programs - ${siteContent.site.name}`,
  description: siteContent.programs.subtitle,
};

export default function Programs() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.programs.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {siteContent.programs.subtitle}
          </p>
        </div>

        {/* Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-900 text-white rounded-xl p-6 sticky top-24">
              <nav className="space-y-6">
                <a href="#kindergarten" className="block text-lg hover:text-accent transition-colors">Kindergarten</a>
                <a href="#cbse" className="block text-lg hover:text-accent transition-colors">CBSE Curriculum</a>
                <a href="#igcse" className="block text-lg hover:text-accent transition-colors">IGCSE Curriculum</a>
                <a href="#faqs" className="block text-lg hover:text-accent transition-colors">FAQs</a>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteContent.programs.programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group border"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 relative overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Grades {program.grades}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {program.name}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-foreground/70">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Anchor Sections */}
            <div id="kindergarten" className="mt-20">
              <h2 className="text-3xl font-bold mb-4">Kindergarten</h2>
              <p className="text-foreground/70">Our early years program focuses on foundational literacy, numeracy, and social skills through play‑based learning.</p>
            </div>
            <div id="cbse" className="mt-16">
              <h2 className="text-3xl font-bold mb-4">CBSE Curriculum</h2>
              <p className="text-foreground/70">A structured, comprehensive pathway aligned with CBSE standards, emphasizing core academics and holistic development.</p>
            </div>
            <div id="igcse" className="mt-16">
              <h2 className="text-3xl font-bold mb-4">IGCSE Curriculum</h2>
              <p className="text-foreground/70">Internationally recognized program with strong emphasis on inquiry, critical thinking, and subject depth.</p>
            </div>
            <div id="faqs" className="mt-16">
              <h2 className="text-3xl font-bold mb-4">FAQs</h2>
              <p className="text-foreground/70">Have questions about programs, eligibility, or admissions? Contact our team and we’ll guide you.</p>
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Find the Perfect Program for Your Child
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our admissions team is ready to help you choose the best educational path
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}