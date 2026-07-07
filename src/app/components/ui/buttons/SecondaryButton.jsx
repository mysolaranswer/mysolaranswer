import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SecondaryButton({ children, href, showArrow = false, className = "", onClick }) {
  return (
    <Link 
      href={href || "#"} 
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-navy)] hover:bg-[var(--color-amber)] text-white hover:text-[var(--color-navy)] rounded-md font-bold leading-none transition-colors duration-300 ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />}
    </Link>
  );
}
