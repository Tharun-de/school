import { siteContent } from '@/data/content';
import { Metadata } from 'next';
import Image from 'next/image';
import ProgramCard, { Program } from '@/components/ProgramCard';

export const metadata: Metadata = {
  title: `Programs - ${siteContent.site.name}`,
  description: siteContent.programs.subtitle,
};

export default function Programs() {
  return (
    <div className="py-20 relative">
      {/* Background color */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: '#f7f8f7' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-transparent" aria-hidden="true" />
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
          {/* Sidebar index */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24 z-20 border border-[#eeb3a9] shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-[#eeb3a9]">Programs</h3>
              <nav className="space-y-3">
                {siteContent.programs.programs.map((program, index) => (
                  <a
                    key={index}
                    href={`#program-${index}`}
                    className="block text-sm text-gray-800 hover:text-[#eeb3a9]"
                  >
                    {program.name}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteContent.programs.programs.map((program: Program, index: number) => (
                <ProgramCard key={index} program={program} index={index} />
              ))}
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