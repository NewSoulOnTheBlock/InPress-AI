"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Headphones,
  Calendar,
  Zap,
  Package,
  Mail,
  MessageSquare,
  Star,
  FileText,
  DollarSign,
  Users,
  Bell,
  ShoppingCart,
  Phone
} from "lucide-react";

const agents = [
  {
    icon: Headphones,
    title: "Customer Service Agent",
    description: "24/7 instant answers to customer questions. No wait times. No frustration.",
    features: ["Answers FAQs instantly", "Handles complaints gracefully", "Escalates when needed"],
    color: "#7c3aed",
  },
  {
    icon: Calendar,
    title: "Scheduling Agent",
    description: "Books appointments automatically. Sends reminders. Handles reschedules.",
    features: ["Syncs with your calendar", "Sends confirmations", "Reduces no-shows by 40%"],
    color: "#14b8a6",
  },
  {
    icon: Zap,
    title: "Lead Follow-Up Agent",
    description: "Responds to new leads in seconds, not hours. Qualifies and nurtures automatically.",
    features: ["Instant response time", "Smart qualification", "Personalized follow-ups"],
    color: "#7c3aed",
  },
  {
    icon: Package,
    title: "Operations Agent",
    description: "Manages orders, tracks inventory, and keeps your operations running smooth.",
    features: ["Order status updates", "Inventory alerts", "Supplier coordination"],
    color: "#14b8a6",
  },
  {
    icon: Mail,
    title: "Email Agent",
    description: "Triages your inbox, drafts replies, and ensures nothing falls through the cracks.",
    features: ["Smart inbox sorting", "Draft responses", "Priority flagging"],
    color: "#7c3aed",
  },
  {
    icon: MessageSquare,
    title: "Social Media Agent",
    description: "Responds to DMs, comments, and mentions across all your social platforms.",
    features: ["Instagram & Facebook DMs", "Comment moderation", "Engagement tracking"],
    color: "#14b8a6",
  },
  {
    icon: Star,
    title: "Review Management Agent",
    description: "Monitors reviews, responds professionally, and alerts you to issues fast.",
    features: ["Google & Yelp monitoring", "Automated responses", "Sentiment analysis"],
    color: "#7c3aed",
  },
  {
    icon: FileText,
    title: "Quote & Estimate Agent",
    description: "Generates accurate quotes instantly based on your pricing rules.",
    features: ["Instant pricing", "Custom proposals", "Follow-up automation"],
    color: "#14b8a6",
  },
  {
    icon: DollarSign,
    title: "Invoice & Payment Agent",
    description: "Sends invoices, tracks payments, and follows up on overdue accounts.",
    features: ["Auto-invoicing", "Payment reminders", "Collections follow-up"],
    color: "#7c3aed",
  },
  {
    icon: Users,
    title: "Onboarding Agent",
    description: "Welcomes new customers and guides them through your process step-by-step.",
    features: ["Welcome sequences", "Document collection", "Training delivery"],
    color: "#14b8a6",
  },
  {
    icon: Bell,
    title: "Appointment Reminder Agent",
    description: "Sends timely reminders via text, email, or call to reduce no-shows.",
    features: ["Multi-channel reminders", "Confirmation requests", "Reschedule handling"],
    color: "#7c3aed",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Support Agent",
    description: "Handles product questions, order tracking, and returns 24/7.",
    features: ["Product recommendations", "Order tracking", "Return processing"],
    color: "#14b8a6",
  },
  {
    icon: Phone,
    title: "After-Hours Agent",
    description: "Captures leads and handles urgent requests when you&apos;re closed.",
    features: ["24/7 availability", "Emergency routing", "Lead capture"],
    color: "#7c3aed",
  },
];

export function AgentTypes() {
  return (
    <section id="agents" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Your <span className="text-gradient">AI Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI agents that work around the clock, never call in sick,
            and cost a fraction of what you&apos;d pay a human.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <Card
              key={agent.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#7c3aed]/30 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${agent.color}15` }}
                >
                  <agent.icon className="w-6 h-6" style={{ color: agent.color }} />
                </div>
                <CardTitle className="text-lg">{agent.title}</CardTitle>
                <CardDescription className="text-sm">{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
