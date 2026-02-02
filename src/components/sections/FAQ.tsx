"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up an AI agent?",
    answer:
      "Most AI agents are up and running within 1-2 weeks. This includes our discovery call, custom training on your business processes, and thorough testing before launch. Simple agents can be ready in as little as 5 days.",
  },
  {
    question: "Will the AI sound robotic to my customers?",
    answer:
      "Not at all. Our AI agents are trained on your brand voice, tone, and communication style. We work with you during setup to ensure responses feel natural, helpful, and on-brand. Most customers can't tell they're talking to AI.",
  },
  {
    question: "What happens when the AI can't answer a question?",
    answer:
      "Smart escalation is built in. When the AI encounters a question outside its training or detects a frustrated customer, it seamlessly hands off to a human team member with full context. You're always in control.",
  },
  {
    question: "Can I customize what the AI says and does?",
    answer:
      "Absolutely. Every AI agent is custom-built for your business. You control the knowledge base, response templates, escalation triggers, and communication style. We also provide an easy dashboard to make updates anytime.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not seeing value in the first month, we'll refund your payment — no questions asked. We're confident in our results, so this rarely happens.",
  },
  {
    question: "Do I need any technical skills to use this?",
    answer:
      "None at all. We handle all the technical setup, integration, and maintenance. You'll get a simple dashboard to monitor performance and make basic updates, but our team handles the heavy lifting.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border-2 px-6 data-[state=open]:border-[#7c3aed]/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 [&[data-state=open]>svg]:text-[#7c3aed]">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <span className="text-[#7c3aed] font-medium cursor-pointer hover:underline">
              Book a free call
            </span>{" "}
            and we&apos;ll answer them all.
          </p>
        </div>
      </div>
    </section>
  );
}
