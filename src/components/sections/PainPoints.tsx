"use client";

import { Mail, Users, PhoneOff, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Mail,
    title: "Drowning in Emails",
    description: "Your inbox is overflowing. Important messages get buried. Customers wait days for responses.",
  },
  {
    icon: Users,
    title: "Can't Afford Staff",
    description: "Hiring is expensive. Training takes forever. And good help is impossible to find.",
  },
  {
    icon: PhoneOff,
    title: "Missing Leads",
    description: "Potential customers reach out at 10pm. By morning, they've gone to your competitor.",
  },
  {
    icon: Clock,
    title: "Repetitive Tasks Eating Your Day",
    description: "Scheduling, follow-ups, order updates — you're doing the same things over and over.",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small business owners lose countless hours to tasks that AI can handle instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-[#7c3aed]/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/10 transition-colors">
                <point.icon className="w-6 h-6 text-red-500 group-hover:text-[#7c3aed] transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-medium text-gradient">
            There&apos;s a better way.
          </p>
        </div>
      </div>
    </section>
  );
}
