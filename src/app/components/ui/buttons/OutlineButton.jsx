import Link from "next/link";

export function OutlineButton({ children, href }) {
  return (
    <Link 
      href={href || "#"} 
      className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#0a192f] text-[#0a192f] hover:bg-[#0a192f] hover:text-white rounded-md font-semibold transition-all flex items-center justify-center"
    >
      {children}
    </Link>
  );
}
