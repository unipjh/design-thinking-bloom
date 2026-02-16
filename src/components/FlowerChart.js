import React from 'react';

const FlowerChart = ({ emotionData }) => {
  const emotions = [
    { name: '기쁨', value: emotionData.joy, color: '#FFD97D' },
    { name: '불안', value: emotionData.anxiety, color: '#A5C9FF' },
    { name: '피로', value: emotionData.fatigue, color: '#C4C4C4' },
    { name: '평온', value: emotionData.calm, color: '#B8E6D5' },
  ];

  const size = 280;
  const center = size / 2;
  const maxRadius = size / 2 - 20;

  const points = emotions.map((emotion, index) => {
    const angle = (index * 90 - 90) * (Math.PI / 180);
    const radius = emotion.value * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      emotion: emotion.name,
      color: emotion.color
    };
  });

  const pathData = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  return (
    <svg width={size} height={size} className="mx-auto">
      {/* Grid circles */}
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <circle
          key={scale}
          cx={center}
          cy={center}
          r={maxRadius * scale}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      ))}
      
      {/* Axes */}
      {emotions.map((_, index) => {
        const angle = (index * 90 - 90) * (Math.PI / 180);
        const x = center + maxRadius * Math.cos(angle);
        const y = center + maxRadius * Math.sin(angle);
        return (
          <line
            key={index}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        );
      })}

      {/* Flower shape */}
      <path
        d={pathData}
        fill="url(#flowerGradient)"
        fillOpacity="0.6"
        stroke="#6B7FD7"
        strokeWidth="2"
        className="animate-fade-in"
      />

      {/* Points and labels */}
      {points.map((point, index) => (
        <g key={index}>
          <circle
            cx={point.x}
            cy={point.y}
            r="6"
            fill={point.color}
            stroke="white"
            strokeWidth="2"
          />
          <text
            x={point.x + (index === 0 ? 20 : index === 2 ? -20 : 0)}
            y={point.y + (index === 1 ? 25 : index === 3 ? -15 : 5)}
            textAnchor={index === 0 ? 'start' : index === 2 ? 'end' : 'middle'}
            className="text-sm font-medium fill-gray-700"
          >
            {point.emotion}
          </text>
        </g>
      ))}

      <defs>
        <linearGradient id="flowerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7FD7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F4A5AE" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlowerChart;
