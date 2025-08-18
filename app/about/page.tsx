import { siteContent } from '@/data/content';
import Image from 'next/image';
import { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: `About Us - ${siteContent.site.name}`,
  description: siteContent.about.intro,
};

export default function About() {
  const childApproach = siteContent.about.sections.find(
    (sec: any) => sec.heading === 'Our Child-Centered Approach'
  );
  const vibrantSec = siteContent.about.sections.find(
    (sec: any) => sec.heading === 'A Vibrant, Lively Space for Parents & Children'
  );
  const experienceSec = siteContent.about.sections.find(
    (sec: any) => sec.heading === 'The Little Otters Experience: Fun, Learning, and Growth'
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
        <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
              {siteContent.about.title}
            </h1>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-xl text-black leading-relaxed mb-6 max-w-4xl text-center mx-auto">
                {siteContent.about.intro}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <Reveal className="w-full h-72 md:h-96 relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 mx-auto">
                  <Image
                    src={siteContent.about.image}
                  alt="About Little Otters"
                    fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
              </Reveal>
              <Reveal delayMs={160}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                    {siteContent.about.sections[0]?.heading}
                  </h2>
                  <p className="text-black leading-relaxed whitespace-pre-line">
                    {siteContent.about.sections[0]?.body}
                  </p>
                </div>
              </Reveal>
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
              <Reveal key={index} delayMs={index * 120} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70 font-medium">{stat.label}</div>
              </Reveal>
            ))}
          </div>
          </div>
        </div>

        {/* Decorative divider for continuity */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 h-1 w-full bg-gradient-to-r from-[#dc6755]/30 via-transparent to-[#dc6755]/30 rounded-full" />
      </div>

        {/* Vision section placed early for narrative flow */}
        <section className="mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md border p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <Reveal className="lg:col-span-2">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{siteContent.about.sections.find((s: any) => s.heading === 'The Vision Behind Little Otters')?.heading}</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                      {siteContent.about.sections.find((s: any) => s.heading === 'The Vision Behind Little Otters')?.body}
                    </p>
                    {childApproach ? (
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{childApproach.heading}</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{childApproach.body}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
                <Reveal delayMs={120}>
                  <div className="group mx-auto w-56 md:w-64 lg:w-72 aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
                    <Image
                      src={siteContent.about.sections.find((s: any) => s.heading === 'The Vision Behind Little Otters')?.image || '/dr soujanya.jpeg'}
                      alt="The Vision Behind Little Otters"
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-side cards: Vibrant & Little Otters Experience */}
        {(vibrantSec || experienceSec) && (
          <section className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {vibrantSec && (
                <Reveal className="bg-white rounded-2xl shadow-md border p-6 md:p-10" delayMs={80}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{vibrantSec.heading}</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{vibrantSec.body}</p>
                </Reveal>
              )}
              {experienceSec && (
                <Reveal className="bg-white rounded-2xl shadow-md border p-6 md:p-10" delayMs={160}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{experienceSec.heading}</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{experienceSec.body}</p>
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* Owner-provided content sections (skip Mission/Vibrant/Experience/Vision here) */}
        <div className="mt-12 space-y-12">
          {siteContent.about.sections
            .slice(1)
            .filter((s: any) => (
              s.heading !== 'Our Child-Centered Approach' &&
              s.heading !== 'Our Parent-Centric Approach' &&
              s.heading !== 'A Vibrant, Lively Space for Parents & Children' &&
              s.heading !== 'The Little Otters Experience: Fun, Learning, and Growth' &&
              s.heading !== 'The Vision Behind Little Otters'
            ))
            .map((s: any, i: number) => (
            <Reveal key={i} className="bg-white rounded-2xl shadow-md border p-6 md:p-10" delayMs={i * 120}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.heading}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {s.image ? (
                  <div className="lg:col-span-1">
                    <div className="group mx-auto w-56 md:w-64 lg:w-72 aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
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
            </Reveal>
                ))}
              </div>
            </div>

      {/* Image + theory text (kept image from previous philosophy section) */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Reveal>
                <div className="max-w-prose">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{siteContent.about.sections[2]?.heading}</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{siteContent.about.sections[2]?.body}</p>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <div className="flex justify-center">
                  <div className="relative mx-auto w-full sm:w-80 md:w-96 lg:w-[28rem] aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={siteContent.about.philosophy.image}
                      alt="Little Otters community"
                  fill
                  className="object-cover"
                      sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 100vw"
                />
              </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}