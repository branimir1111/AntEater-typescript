import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '../ui/pagination';
import { constructUrl, constructPrevOrNextUrl } from '@/utils';
import { useLocation } from 'react-router-dom';

type ComplexPaginationProps = {
  currentPage: number;
  numOfPages: number;
};

const ComplexPagination = ({
  currentPage,
  numOfPages,
}: ComplexPaginationProps) => {
  const { search, pathname } = useLocation();

  if (numOfPages < 2) return null;

  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem
        key={pageNumber}
        className={`${isActive ? '' : 'max-break5:hidden'}`}
      >
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key} className="max-break5:hidden">
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const pages: React.ReactNode[] = [];
    // first page
    pages.push(constructButton({ pageNumber: 1, isActive: currentPage === 1 }));
    // ellipsis
    if (currentPage > 2) {
      pages.push(constructEllipsis('dots-1'));
    }
    // active page
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pages.push(constructButton({ pageNumber: currentPage, isActive: true }));
    }
    // ellipsis
    if (currentPage < numOfPages - 1) {
      pages.push(constructEllipsis('dots-2'));
    }
    // last page
    pages.push(
      constructButton({
        pageNumber: numOfPages,
        isActive: currentPage === numOfPages,
      })
    );
    return pages;
  };

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage,
    numOfPages,
    search,
    pathname,
  });

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default ComplexPagination;
