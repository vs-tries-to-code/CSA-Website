import React from "react";

function TargetIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="target-icon">
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

export default TargetIcon;
