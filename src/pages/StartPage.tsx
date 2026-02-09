import { useMemo, useState } from 'react';
import { situationOptions, first30MinutesChecklist } from '../data/onboarding';
import { getProgress, saveProgress } from '../lib/progressStorage';

const StartPage = () => {
  const initial = useMemo(() => getProgress(), []);
  const [selected, setSelected] = useState(initial.selectedSituation || '');
  const [completed, setCompleted] = useState<string[]>(initial.completedSteps || []);

  const active = situationOptions.find((s) => s.id === selected);

  const toggleStep = (step: string) => {
    const next = completed.includes(step) ? completed.filter((s) => s !== step) : [...completed, step];
    setCompleted(next);
    saveProgress({ selectedSituation: selected, completedSteps: next });
  };

  const chooseSituation = (id: string) => {
    setSelected(id);
    saveProgress({ selectedSituation: id, completedSteps: completed });
  };

  return (
    <div className="pt-24 pb-16 px-6 lg:px-[8vw] bg-[#0B3C43] min-h-screen">
      <div className="mb-8">
        <span className="eyebrow mb-4 block">Onboarding</span>
        <h1 className="headline-lg text-[#F3EFE6] mb-4">Situation selector</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {situationOptions.map((option) => (
          <button key={option.id} onClick={() => chooseSituation(option.id)} className={`card text-left ${selected === option.id ? 'border-[#D4A03A]' : ''}`}>
            <h3 className="font-heading text-[#F3EFE6]">{option.label}</h3>
          </button>
        ))}
      </div>

      {active && (
        <div className="card mb-8">
          <h2 className="font-heading text-[#F3EFE6] text-xl mb-3">Personalized next steps</h2>
          <ul className="space-y-2">
            {active.nextSteps.map((step) => <li key={step} className="text-[#F3EFE6]/80">• {step}</li>)}
          </ul>
        </div>
      )}

      <div className="card">
        <h2 className="font-heading text-[#F3EFE6] text-xl mb-3">First 30 Minutes</h2>
        <div className="space-y-2">
          {first30MinutesChecklist.map((step) => (
            <label key={step} className="flex items-start gap-2 text-[#F3EFE6]/80">
              <input type="checkbox" checked={completed.includes(step)} onChange={() => toggleStep(step)} className="mt-1" />
              {step}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
