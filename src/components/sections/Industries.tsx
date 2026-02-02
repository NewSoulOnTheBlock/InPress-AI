"use client";

import { Scissors, Briefcase, Heart, ShoppingCart, Home, UtensilsCrossed } from "lucide-react";

const industries = [
  {
    icon: Scissors,
    name: "Service Businesses",
    examples: "Houston salons, spas, cleaning services, contractors",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    examples: "Law firms, CPAs, consultants, marketing agencies",
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    examples: "Med spas, therapists, gyms, wellness centers",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    examples: "Online stores, boutiques, specialty shops",
  },
  {
    icon: Home,
    name: "Real Estate",
    examples: "Houston agents, property managers, brokerages",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Food",
    examples: "Cafes, catering, food trucks, Tex-Mex spots",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Houston Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI agents adapt to your industry&apos;s unique needs — whether you&apos;re in the Energy Corridor or the Heights.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:border-[#7c3aed]/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#14b8a6]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-[#7c3aed]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.examples}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don&apos;t see your Houston industry?{" "}
            <a
              href="https://calendly.com/inpresspr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c3aed] font-medium hover:underline"
            >
              Let&apos;s talk
            </a>{" "}
            — we probably serve it.
          </p>
        </div>
      </div>
    </section>
  );
}
