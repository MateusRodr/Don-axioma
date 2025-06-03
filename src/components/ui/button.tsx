import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
