import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown: React.FC = () => {
  // 🔥 CAMBIÁ ESTA FECHA POR LA REAL
  const targetDate = new Date("2026-31-03T00:00:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="relative bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 w-20 md:w-28 shadow-lg shadow-emerald-500/10">
      <div className="text-3xl md:text-4xl font-bold text-white">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs md:text-sm text-slate-400 mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-slate-950 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm mb-6 border border-emerald-500/20">
          Lanzamiento oficial
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
          Cotix se lanza en
        </h2>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </section>
  );
};

export default LaunchCountdown;