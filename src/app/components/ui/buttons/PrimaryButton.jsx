import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, href, onClick, showArrow = true, className = "", ...props }) {
  const baseClasses = `group w-full sm:w-auto px-8 py-3.5 bg-[var(--color-amber)] hover:bg-[#d97706] text-white rounded-md font-bold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer ${className}`;

  if (onClick || !href) {
    return (
      <button onClick={onClick} className={baseClasses} {...props}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
      </button>
    );
  }

  return (
    <Link 
      href={href} 
      className={baseClasses}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
    </Link>
  );
}
