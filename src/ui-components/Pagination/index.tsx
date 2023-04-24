import { v1 } from "uuid";
import { PaginationCore, PaginationContent } from "./Pagination.styles";

interface PaginationProps {
  currentValue: number;
  totalValue: number;
}

const Pagination = ({
  currentValue,
  totalValue,
  ...props
}: PaginationProps) => {
  const showPage = () => {
    const pages = [];
    for (let i = 0; i < totalValue; i += 1) {
      const value = i + 1;
      pages.push(
        <PaginationContent key={v1()} isCurrent={value === currentValue}>
          {value}
        </PaginationContent>
      );
    }
    return pages;
  };
  return <PaginationCore {...props}>{showPage()}</PaginationCore>;
};

export default Pagination;
