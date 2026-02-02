"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, Clock, DollarSign, Users, TrendingUp } from "lucide-react";

const comparisons = [
  {
    factor: "Monthly Cost",
    icon: DollarSign,
    aiAgent: "$297 - $997",
    employee: "$3,500 - $6,000+",
    aiWins: true,
  },
  {
    factor: "Availability",
    icon: Clock,
    aiAgent: "24/7/365",
    employee: "40 hrs/week",
    aiWins: true,
  },
  {
    factor: "Response Time",
    icon: TrendingUp,
    aiAgent: "Instant (<1 sec)",
    employee: "Minutes to hours",
    aiWins: true,
  },
  {
    factor: "Scaling",
    icon: Users,
    aiAgent: "Unlimited capacity",
    employee: "Hire more people",
    aiWins: true,
  },
  {
    factor: "Training Time",
    icon: Clock,
    aiAgent: "1-2 weeks",
    employee: "3-6 months",
    aiWins: true,
  },
  {
    factor: "Sick Days",
    icon: X,
    aiAgent: "Never",
    employee: "8-12 days/year",
    aiWins: true,
  },
  {
    factor: "Consistency",
    icon: Check,
    aiAgent: "100% consistent",
    employee: "Varies by day",
    aiWins: true,
  },
];

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Agent vs. <span className="text-gradient">Employee</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why forward-thinking small businesses are adding AI agents to their team.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground">Factor</TableHead>
                <TableHead className="font-semibold text-center">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#7c3aed]"></span>
                    AI Agent
                  </span>
                </TableHead>
                <TableHead className="font-semibold text-center">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-muted-foreground"></span>
                    Employee
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisons.map((row) => (
                <TableRow key={row.factor} className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <row.icon className="w-5 h-5 text-muted-foreground" />
                      {row.factor}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] font-medium">
                      {row.aiWins && <Check className="w-4 h-4" />}
                      {row.aiAgent}
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    {row.employee}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          <span className="font-semibold text-foreground">Bottom line:</span> AI agents deliver better results at a fraction of the cost.
        </p>
      </div>
    </section>
  );
}
