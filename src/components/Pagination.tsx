"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationBarProps {
  page: number
  hasPrev: boolean
  hasNext: boolean
  totalPages: number
}

export function PaginationBar({page, hasNext,hasPrev,totalPages}: PaginationBarProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(page)
  const renderPages = () => {
    const pages = [];
    if (page > 1) {
      pages.push(page - 1);
    }
    pages.push(page);
    pages.push(page + 1);
    if(page === 1 && totalPages >= page + 2) {
      pages.push(page + 2)
    }

    return pages;
  };

  const handlePageChange = (pageNum: number) => {
    if(pageNum && pageNum <= totalPages) {
      setCurrentPage(pageNum)
    }
  }

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    router.push(`/?page=${currentPage}#posts`)
  }, [currentPage, router])

  console.log("prev", hasPrev)
  console.log("Next", hasNext)
  console.log("totalPages", totalPages)

  return (
    <Pagination >
      <PaginationContent>
        <PaginationItem >
         <button className="disabled:opacity-20 disabled:pointer-events-none" disabled={hasPrev}
         onClick={prevPage} 
         >
          <PaginationPrevious className="cursor-pointer"
           />
           </button> 
        </PaginationItem>
        
        {renderPages().map((pageNum, index) => {
        return <PaginationItem key={index}>
          <PaginationLink href="#"
           isActive={page === pageNum}
           onClick={() => handlePageChange(pageNum)}
           
           >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
        })
      }
        
        {(totalPages >= page + 2) && <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>}
        <PaginationItem>
          <button disabled={hasNext}
          onClick={nextPage}
          className="disabled:opacity-20 disabled:pointer-events-none"
          >
          <PaginationNext className="cursor-pointer"  />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
