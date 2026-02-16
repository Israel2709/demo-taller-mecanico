import { ReactNode } from "react";

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex-1 flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber-cta/20 border-2 border-amber-cta flex items-center justify-center text-amber-cta font-bold text-lg mb-3">
                {step.number}
              </div>
              <h3 className="font-semibold text-steel-200 mb-2">{step.title}</h3>
              <p className="text-sm text-steel-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 bg-steel-500/20 -z-10" />
    </div>
  );
}
