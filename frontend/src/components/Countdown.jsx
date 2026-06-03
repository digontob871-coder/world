import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-06-11T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">⏱️ World Cup 2026 Countdown</h2>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <p className="text-4xl font-bold">{timeLeft.days}</p>
          <p className="text-sm mt-2">Days</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <p className="text-4xl font-bold">{timeLeft.hours}</p>
          <p className="text-sm mt-2">Hours</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <p className="text-4xl font-bold">{timeLeft.minutes}</p>
          <p className="text-sm mt-2">Minutes</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <p className="text-4xl font-bold">{timeLeft.seconds}</p>
          <p className="text-sm mt-2">Seconds</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">🇺🇸 🇲🇽 🇨🇦 USA • Mexico • Canada</p>
        <p className="text-sm mt-2 opacity-90">June 11 - July 19, 2026</p>
      </div>
    </div>
  );
}
