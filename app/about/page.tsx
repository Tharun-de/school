import { siteContent } from '@/data/content';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us - ${siteContent.site.name}`,
  description: siteContent.about.mission,
};

export default function About() {
  return (
    <div className="pt-0 pb-0">
      {/* Full-width hero background spanning header + Our Vision */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutushero.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {siteContent.about.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {siteContent.about.mission}
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Our Vision inside the same background section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  {siteContent.about.vision}
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
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
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Founders Section */}
        {siteContent.about?.founders?.founders?.length ? (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              {siteContent.about.founders.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteContent.about.founders.founders.map((f, i) => (
                <div key={i} className="bg-card rounded-xl border p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{f.title}</p>
                  <p className="text-foreground/80 mt-4 leading-relaxed">{f.summary}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

      </div>

      {/* Full-width Philosophy Section that touches the footer */}
      <section className="relative mt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutusfooter.jpeg')" }}
          aria-hidden="true"
        />
        {/* Overlay for readability; adjust opacity as needed */}
        <div className="absolute inset-0 bg-white/70" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{siteContent.about.philosophy.title}</h2>
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                {siteContent.about.philosophy.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="order-2">
              <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
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
      </section>
    </div>
  );
}