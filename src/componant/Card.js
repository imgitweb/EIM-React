import React from "react";

// Card Component
export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl p-6 ${className} border border-gray-200`}>
      {children}
    </div>
  );
};

// CardHeader Component
export const CardHeader = ({ children }) => {
  return (
    <div className="mb-4 pb-2 border-b border-gray-300">
      <h3 className="text-lg font-semibold text-gray-800">{children}</h3>
    </div>
  );
};

// CardContent Component
export const CardContent = ({ children }) => {
  return <div className="text-gray-600">{children}</div>;
};
