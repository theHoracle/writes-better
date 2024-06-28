"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationBarProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  totalPages: number;
}

export function PaginationBar({
  page,
  hasNext,
  hasPrev,
  totalPages,
}: PaginationBarProps) {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [paginate, setPaginate] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const renderPages = () => {
    const pages = [];
    if (page > 1) {
      pages.push(page - 1);
    }
    pages.push(page);
    pages.push(page + 1);
    if (page === 1 && totalPages >= page + 2) {
      pages.push(page + 2);
    }

    return pages;
  };

  const handlePageChange = (pageNum: number) => {
    if (pageNum && pageNum <= totalPages) {
      setPaginate(true);
      setCurrentPage(pageNum);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setPaginate(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setPaginate(true);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (paginate) {
      const params = new URLSearchParams(searchParams)
      params.set('page', currentPage.toString())
      router.push(`?page=${currentPage}#posts`);
      const newUrl = `${pathname}?${params.toString()}`
      // 
      router.push(`${newUrl}#posts`)
      setPaginate(false);
    }
  }, [currentPage, router, paginate, pathname, searchParams]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <button
            className="disabled:opacity-20 disabled:pointer-events-none"
            disabled={hasPrev}
            onClick={prevPage}
          >
            <PaginationPrevious className="cursor-pointer" />
          </button>
        </PaginationItem>

        {renderPages().map((pageNum, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === pageNum}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {totalPages >= page + 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <button
            disabled={hasNext}
            onClick={nextPage}
            className="disabled:opacity-20 disabled:pointer-events-none"
          >
            <PaginationNext className="cursor-pointer" />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
