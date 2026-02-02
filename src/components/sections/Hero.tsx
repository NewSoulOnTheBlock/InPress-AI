"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-purple-teal-subtle" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#7c3aed]/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-[#7c3aed]" />
          <span className="text-sm font-medium text-[#7c3aed]">Your AI Team. Fraction of the Cost.</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          <span className="text-foreground">Stop Hiring.</span>
          <br />
          <span className="text-gradient">Start Automating.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
          AI agents that handle customer service, scheduling, and lead follow-up —
          so you can focus on growing your business, not managing it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-6 text-lg rounded-full group"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See What AI Can Do For You
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Calculate Your Savings
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in-up delay-400">
          <p className="text-sm text-muted-foreground mb-4">Trusted by small businesses everywhere</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#7c3aed]" />
              <span className="text-sm font-medium">500+ AI Agents Deployed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">4.9</span>
              <div className="flex text-yellow-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">$2M+ Saved for Clients</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
