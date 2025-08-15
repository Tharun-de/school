import { siteContent } from '@/data/content';
import Link from 'next/link';
import { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
  description: siteContent.site.description,
};

export default function Home() {
  return (
    <>
      {/* Hero Section with background image */}
      <section
        className="relative min-h-[70vh] md:min-h-[85vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${siteContent.home.hero.backgroundImage}')` }}
      >
        {/* Light-to-transparent gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
              <span>Trusted by 2,500+ students</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {siteContent.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light text-foreground/80">
              {siteContent.home.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl mb-8 text-foreground/70 max-w-2xl">
              {siteContent.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={siteContent.home.hero.buttonLink}
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-sm"
              >
                {siteContent.home.hero.buttonText}
              </Link>
              <Link
                href="/programs"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                Explore Programs
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-foreground/60">
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> IB</span>
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> CBSE</span>
              <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> IGCSE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose {siteContent.site.name}?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover what makes our educational approach unique and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.home.features.map((feature, index) => (
              <Reveal
                key={index}
                className="text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border"
                delayMs={index * 120}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 relative overflow-hidden">
        {/* Animated decorative bar */}
        <div className="absolute inset-x-0 -bottom-4 h-4 bg-primary/70">
          <div className="absolute inset-y-0 left-0 w-[200%] bg-gradient-to-r from-accent/60 via-white/0 to-accent/60 opacity-40 animate-pan-x" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteContent.about.stats.slice(0,4).map((stat, i) => (
            <Reveal key={i} delayMs={i * 120} className="bg-card rounded-xl border p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary transition-transform duration-300 hover:scale-105">{stat.number}</div>
              <div className="text-foreground/70 text-sm mt-1">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards an exceptional education experience
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </Link>
            <Link
              href="/programs"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}