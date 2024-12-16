import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', icon: Icon, children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition-colors";
  
  const variants = {
    primary: "text-white bg-purple-800 hover:bg-purple-900",
    secondary: "text-white bg-purple-600 hover:bg-purple-700",
    outline: "text-purple-900 bg-white hover:bg-purple-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </button>
  );
};

export default Button;