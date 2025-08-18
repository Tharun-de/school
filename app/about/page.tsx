import { siteContent } from '@/data/content';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us - ${siteContent.site.name}`,
  description: siteContent.about.intro,
};

export default function About() {
  const childApproach = siteContent.about.sections.find(
    (sec: any) => sec.heading === 'Our Child-Centered Approach'
  );
  return (
    <div className="pt-0 pb-0">
      {/* Full-width hero background */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutusfooter.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              {siteContent.about.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-6 max-w-4xl text-center mx-auto">
              {siteContent.about.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="w-full h-72 md:h-96 relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 mx-auto">
                  <Image
                    src={siteContent.about.image}
                  alt="About Little Otters"
                    fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {siteContent.about.sections[0]?.heading}
                </h2>
                <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {siteContent.about.sections[0]?.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/aboutushero.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-white/65" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section (By the Numbers) */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Removed separate image showcase since it's now in hero */}

        {/* Owner-provided content sections (skip duplicating Mission here) */}
        <div className="mt-12 space-y-12">
          {siteContent.about.sections
            .slice(1)
            .filter((s: any) => s.heading !== 'Our Child-Centered Approach' && s.heading !== 'Our Parent-Centric Approach')
            .map((s: any, i: number) => (
            <section key={i} className="bg-white rounded-2xl shadow-md border p-6 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.heading}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {s.image ? (
                  <div className="lg:col-span-1">
                    <div className="group w-full aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
                      <Image src={s.image} alt={s.heading} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" sizes="(min-width: 1024px) 33vw, 100vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ) : null}
                <div className={s.image ? "lg:col-span-2" : "lg:col-span-3"}>
                  <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{s.body}</p>
                  {s.heading === 'The Vision Behind Little Otters' && childApproach ? (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{childApproach.heading}</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{childApproach.body}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
                ))}
              </div>
            </div>

      {/* Image + theory text (kept image from previous philosophy section) */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{siteContent.about.sections[2]?.heading}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{siteContent.about.sections[2]?.body}</p>
            </div>
            <div>
              <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={siteContent.about.philosophy.image}
                  alt="Little Otters community"
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