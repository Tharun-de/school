import { siteContent } from '@/data/content';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: `Programs - ${siteContent.site.name}`,
  description: siteContent.programs.subtitle,
};

export default function Programs() {
  return (
    <div className="py-20 relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10 bg-cover"
        style={{
          backgroundImage: `url('${siteContent.programs.backgroundImage || ''}')`,
          backgroundPosition: siteContent.programs.backgroundPosition || 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: siteContent.programs.backgroundSize || 'cover'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/65" aria-hidden="true" />
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
              {siteContent.programs.programs.map((program, index) => (
                <div
                  key={index}
                  id={`program-${index}`}
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
                    {program.grades ? (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Grades {program.grades}
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {program.name}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    
                    {Array.isArray(program.features) && program.features.length > 0 && (
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
                    )}
                  </div>
                </div>
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