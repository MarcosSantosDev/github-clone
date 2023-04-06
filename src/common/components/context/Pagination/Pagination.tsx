import { Button } from '../../structure';
import * as S from './Pagination.styles';

type PaginationProps = {
  changePage: (page: number) => void;
  pagination: {
    page: number;
    lastPage: number;
  };
};

const Pagination = ({ changePage, pagination }: PaginationProps) => {
  const goToPreviousPage = () => {
    changePage(pagination.page - 1);
  };

  const goToNextPage = () => {
    changePage(pagination.page + 1);
  };

  return (
    <S.PaginationDiv>
      <Button
        type="button"
        icon={{
          name: 'chevronLeft',
          side: 'left',
        }}
        onClick={goToPreviousPage}
        disabled={pagination.page === 1}
      >
        Previous
      </Button>
      <Button
        type="button"
        icon={{
          name: 'chevronRight',
          side: 'right',
        }}
        onClick={goToNextPage}
        disabled={pagination.page === pagination.lastPage}
      >
        Next
      </Button>
    </S.PaginationDiv>
  );
};

export default Pagination;
