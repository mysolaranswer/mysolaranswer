import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, href, showArrow = true }) {
  return (
    <Link 
      href={href || "#"} 
      className="w-full sm:w-auto px-8 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-md font-semibold transition-all flex items-center justify-center gap-2"
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
