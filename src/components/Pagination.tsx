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

interface PaginationBarProps {
  page: number
  hasPrev: boolean
  hasNext: boolean
  totalPages: number
}

export function PaginationBar({page, hasNext,hasPrev,totalPages}: PaginationBarProps) {
  const router = useRouter()
  const renderPages = () => {
    const pages = [];
    if (page > 1) {
      pages.push(page - 1);
    }
    pages.push(page);
    pages.push(page + 1);
    if(page === 1) {
      pages.push(page + 2)
    }

    return pages;
  };

  const handlePageChange = (newPage: number) => {
    if(newPage >= 1 && newPage < totalPages) {
      router.push(`/?page=${newPage}#posts`)
    }
  }

  console.log("prev", hasPrev)
  console.log("Next", hasNext)
  console.log("totalPages", totalPages)

  return (
    <Pagination >
      <PaginationContent>
        <PaginationItem >
         <button className="disabled:opacity-20 disabled:pointer-events-none" disabled={hasPrev}
         onClick={() => handlePageChange(page - 1)} 
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
        
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <button disabled={hasNext}
          onClick={() => handlePageChange(page + 1)}
          className="disabled:opacity-20 disabled:pointer-events-none"
          >
          <PaginationNext className="cursor-pointer"  />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
