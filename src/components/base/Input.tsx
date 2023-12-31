import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.ComponentProps<'input'> {
  className?: string;
  type?: string;
}

const Root: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, type, ...props },
  ref
) => {
  const classes = twMerge(
        'block w-full appearance-none bg-white h-[40px] rounded-md px-5 py-2 placeholder-gray-600 shadow-sm text-gray-900 focus:outline-none focus:ring-brand-500 text-[15px] md:text-[16px]',
    className
  );
  return (
    <input
        ref={ref} 
        type={type ?? 'text'} 
        className={classes} 
        {...props} />
  );
};

export const Input = React.forwardRef(Root);
