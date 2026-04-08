import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  baseUrl: string; // Misal: "/alphabet/A"
  searchParams?: Record<string, string>; // Untuk mempertahankan query lain seperti ?name=Action
}

export default function Pagination({
  currentPage,
  hasNextPage,
  baseUrl,
  searchParams,
}: PaginationProps) {
  // Helper untuk membangun URL dengan query params yang ada
  const createUrl = (page: number) => {
    const params = new URLSearchParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        if (key !== "page") params.set(key, value);
      });
    }
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-16 pb-12">
      {/* Button Previous */}
      {currentPage > 1 ? (
        <Link
          href={createUrl(currentPage - 1)}
          className="group flex items-center gap-2 text-onkyo-text hover:text-onkyo-primary transition-all"
        >
          <div className="p-3 rounded-full border border-onkyo-primary/30 group-hover:border-onkyo-primary group-hover:shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all">
            <ChevronLeft size={20} />
          </div>
          <span className="hidden md:block text-xs font-black tracking-tighter uppercase italic">
            Prev
          </span>
        </Link>
      ) : (
        <div className="flex items-center gap-2 text-onkyo-muted opacity-30 cursor-not-allowed">
          <div className="p-3 rounded-full border border-onkyo-secondary/20">
            <ChevronLeft size={20} />
          </div>
        </div>
      )}

      {/* Page Indicator - The "Star" of the Show */}
      <div className="relative px-8 py-3 bg-onkyo-nav border-x-2 border-onkyo-primary rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-onkyo-primary/5 group-hover:bg-onkyo-primary/10 transition-colors" />
        <div className="relative flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-onkyo-muted leading-none mb-1">
            Page
          </span>
          <span className="text-2xl font-black italic text-onkyo-text leading-none shadow-onkyo-primary drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]">
            {currentPage}
          </span>
        </div>
      </div>

      {/* Button Next */}
      {hasNextPage ? (
        <Link
          href={createUrl(currentPage + 1)}
          className="group flex items-center gap-2 text-onkyo-text hover:text-onkyo-primary transition-all"
        >
          <span className="hidden md:block text-xs font-black tracking-tighter uppercase italic">
            Next
          </span>
          <div className="p-3 rounded-full border border-onkyo-primary/30 group-hover:border-onkyo-primary group-hover:shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all">
            <ChevronRight size={20} />
          </div>
        </Link>
      ) : (
        <div className="flex items-center gap-2 text-onkyo-muted opacity-30 cursor-not-allowed">
          <div className="p-3 rounded-full border border-onkyo-secondary/20">
            <ChevronRight size={20} />
          </div>
        </div>
      )}
    </div>
  );
}
