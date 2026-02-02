"use client";

import { Phone, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, your pain points, and where AI can make the biggest impact. 30 minutes is all we need.",
    duration: "30 min call",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Custom AI Build",
    description: "Our team builds your personalized AI agents, trained on your specific processes, tone, and business rules.",
    duration: "1-2 weeks",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description: "We deploy your AI team, monitor performance, and continuously improve based on real results.",
    duration: "Ongoing",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first call to fully automated — in as little as two weeks.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#14b8a6] transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#7c3aed] to-[#14b8a6] text-white text-sm font-bold px-4 py-1 rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed]/10 to-[#14b8a6]/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-8 h-8 text-[#7c3aed]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>

                  {/* Duration badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] text-sm font-medium">
                    {step.duration}
                  </span>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#7c3aed] to-[#14b8a6]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
