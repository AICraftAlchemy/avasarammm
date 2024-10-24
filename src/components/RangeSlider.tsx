import React from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  formatLabel?: (value: number) => string;
}

export default function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatLabel = (value) => value.toString(),
}: RangeSliderProps) {
  return (
    <div className="space-y-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>{formatLabel(min)}</span>
        <span>{formatLabel(value)}</span>
        <span>{formatLabel(max)}</span>
      </div>
    </div>
  );
}