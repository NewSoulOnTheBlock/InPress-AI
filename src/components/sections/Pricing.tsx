"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    description: "Perfect for solopreneurs and small teams",
    agents: "1 AI Agent",
    features: [
      "1 custom AI agent",
      "Up to 500 conversations/mo",
      "Email & chat support",
      "Basic analytics dashboard",
      "Monthly optimization call",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$597",
    period: "/month",
    description: "For growing businesses ready to scale",
    agents: "3 AI Agents",
    features: [
      "3 custom AI agents",
      "Up to 2,000 conversations/mo",
      "Priority support (Slack)",
      "Advanced analytics",
      "Bi-weekly optimization calls",
      "Multi-channel integration",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "$997",
    period: "/month",
    description: "Unlimited automation for ambitious teams",
    agents: "Unlimited Agents",
    features: [
      "Unlimited AI agents",
      "Unlimited conversations",
      "Dedicated success manager",
      "Custom integrations",
      "Weekly strategy calls",
      "White-glove onboarding",
      "SLA guarantee",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-[#7c3aed] shadow-lg scale-105"
                  : "border-2 hover:border-[#7c3aed]/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-[#7c3aed] text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <Badge
                  variant="secondary"
                  className="mt-4 bg-[#14b8a6]/10 text-[#14b8a6] hover:bg-[#14b8a6]/20"
                >
                  {plan.agents}
                </Badge>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
                      : "bg-white hover:bg-muted text-foreground border-2 border-border"
                  }`}
                  asChild
                >
                  <a href="https://calendly.com/inpresspr/30min" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          All plans include setup, training, and ongoing optimization. <br />
          <span className="font-semibold text-foreground">30-day money-back guarantee.</span>
        </p>
      </div>
    </section>
  );
}
