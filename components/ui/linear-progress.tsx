import React from "react";

interface LinearProgressProps {
  value: number;
  height?: number;
  className?: string;
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  value,
  height = 4,
  className = "",
}) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <div
        className="h-full bg-black transition-all duration-300 ease-out rounded-full"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
};

export default LinearProgress;
