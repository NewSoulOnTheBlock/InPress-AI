"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Clock, TrendingUp } from "lucide-react";

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState([20]);
  const [hourlyRate, setHourlyRate] = useState([25]);

  const weeklyWaste = hoursPerWeek[0] * hourlyRate[0];
  const monthlyWaste = weeklyWaste * 4;
  const yearlyWaste = monthlyWaste * 12;
  const monthlySavings = monthlyWaste * 0.7; // Assume 70% can be automated
  const yearlySavings = monthlySavings * 12;

  return (
    <section id="calculator" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Calculate Your <span className="text-gradient">Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much time and money you could save by automating repetitive tasks with AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator inputs */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-[#7c3aed]" />
                </div>
                <div>
                  <CardTitle>ROI Calculator</CardTitle>
                  <CardDescription>Adjust the sliders to match your situation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Hours slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Hours spent on repetitive tasks per week</label>
                  <span className="text-2xl font-bold text-[#7c3aed]">{hoursPerWeek[0]}h</span>
                </div>
                <Slider
                  value={hoursPerWeek}
                  onValueChange={setHoursPerWeek}
                  max={60}
                  min={5}
                  step={5}
                  className="[&_[role=slider]]:bg-[#7c3aed]"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 hours</span>
                  <span>60 hours</span>
                </div>
              </div>

              {/* Rate slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Your hourly rate (or employee cost)</label>
                  <span className="text-2xl font-bold text-[#14b8a6]">${hourlyRate[0]}/hr</span>
                </div>
                <Slider
                  value={hourlyRate}
                  onValueChange={setHourlyRate}
                  max={100}
                  min={15}
                  step={5}
                  className="[&_[role=slider]]:bg-[#14b8a6]"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$15/hr</span>
                  <span>$100/hr</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Current waste */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-red-600 font-medium">Current time waste</p>
                    <p className="text-3xl font-bold text-red-700">
                      ${yearlyWaste.toLocaleString()}/year
                    </p>
                    <p className="text-sm text-red-500">${monthlyWaste.toLocaleString()}/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Potential savings */}
            <Card className="bg-gradient-to-br from-[#7c3aed]/5 to-[#14b8a6]/5 border-2 border-[#14b8a6]/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-purple-teal flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#14b8a6] font-medium">Potential savings with AI</p>
                    <p className="text-4xl font-bold text-gradient">
                      ${yearlySavings.toLocaleString()}/year
                    </p>
                    <p className="text-sm text-muted-foreground">${monthlySavings.toLocaleString()}/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI highlight */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#7c3aed]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Time back per week</p>
                    <p className="text-3xl font-bold">{Math.round(hoursPerWeek[0] * 0.7)} hours</p>
                    <p className="text-sm text-muted-foreground">
                      That&apos;s {Math.round((hoursPerWeek[0] * 0.7) / 8)} extra workdays every week
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
