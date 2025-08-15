import { siteContent } from '@/data/content';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us - ${siteContent.site.name}`,
  description: siteContent.about.mission,
};

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.about.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {siteContent.about.mission}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              {siteContent.about.vision}
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {siteContent.about.content}
            </p>
          </div>
          <div className="lg:order-first">
            <div className="w-full h-96 relative">
              <Image
                src={siteContent.about.image}
                alt="About Westfield Academy"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{siteContent.about.philosophy.title}</h2>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
              {siteContent.about.philosophy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg bg-secondary">
              <Image
                src={siteContent.about.philosophy.image}
                alt="Learning together at Gabbles International School"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}