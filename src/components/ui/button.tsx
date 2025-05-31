import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
