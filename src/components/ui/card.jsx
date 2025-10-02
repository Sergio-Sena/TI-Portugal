import React from "react";

export const Card = ({ className = "", children }) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ className = "", children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className = "", children }) => {
  return (
    <h3 className={`font-semibold text-lg ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent = ({ className = "", children }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};