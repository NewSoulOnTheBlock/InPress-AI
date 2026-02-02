"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was drowning in emails and missing leads left and right. Now our AI handles 80% of inquiries instantly. I got my evenings back.",
    author: "Sarah Chen",
    role: "Owner, Serenity Spa",
    metric: "15 hours/week saved",
    avatar: "SC",
  },
  {
    quote: "Our response time went from 4 hours to 4 seconds. Our customers noticed immediately — reviews went through the roof.",
    author: "Marcus Thompson",
    role: "Founder, Thompson Legal",
    metric: "4.9★ average rating",
    avatar: "MT",
  },
  {
    quote: "I was skeptical about AI. But the ROI speaks for itself — we closed 3x more leads in the first month. Best investment we made.",
    author: "Jennifer Rodriguez",
    role: "Broker, Coastal Realty",
    metric: "3x lead conversion",
    avatar: "JR",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Business Owners <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real small businesses — just like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="bg-white border-2 hover:border-[#7c3aed]/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-[#7c3aed]" />
                </div>

                {/* Quote text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Metric highlight */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] text-sm font-semibold mb-6">
                  {testimonial.metric}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-purple-teal flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
