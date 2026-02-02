"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";

const trustElements = [
  { icon: Shield, text: "30-day money-back guarantee" },
  { icon: Clock, text: "Get started in 1-2 weeks" },
  { icon: Sparkles, text: "No technical skills required" },
];

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-purple-teal opacity-95" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Stop Drowning in<br />Busywork?
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let&apos;s build your AI team together. Book a free strategy call and
          see exactly how automation can transform your business.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-white text-[#7c3aed] hover:bg-gray-100 px-10 py-7 text-lg rounded-full font-semibold group shadow-xl"
          asChild
        >
          <a href="https://calendly.com/inpresspr/30min" target="_blank" rel="noopener noreferrer">
            Book My Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        {/* Trust elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {trustElements.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/90">
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">Trusted by 500+ small businesses</p>
          <div className="flex items-center justify-center gap-2">
            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {["SC", "MT", "JR", "AK", "LP"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <div className="flex text-yellow-300 text-sm">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-white/80 text-sm">4.9/5 from 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
