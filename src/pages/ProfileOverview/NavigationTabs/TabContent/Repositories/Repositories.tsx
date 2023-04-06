import * as React from 'react';

import { useParams } from 'react-router-dom';

import { Pagination } from '@/common/components/context';
import { Input } from '@/common/components/form';
import { Button, RepositoryOverview } from '@/common/components/structure';
import {
  useQueryFetchGithubRepositoriesByUser,
  useQueryFetchGithubUser,
} from '@/common/hooks/reactQuery';

import * as S from './Repositories.styles';

const Repositories = () => {
  const [pagination, setPagination] = React.useState({
    page: 1,
    perPage: 5,
  });
  const params = useParams<{ username: string }>();

  if (!params.username) {
    return <h2>Invalid params!</h2>;
  }

  const { data: user } = useQueryFetchGithubUser({
    username: params.username || '',
  });
  const { data: repositories = [], refetch: fetchGithubRepositoriesByUser } =
    useQueryFetchGithubRepositoriesByUser(
      {
        username: params.username || '',
        pagination,
      },
      {
        enabled: false,
      },
    );

  const handleChangePage = (page: number) => {
    setPagination(currentPagination => ({ ...currentPagination, page }));
  };

  const lastPage = React.useMemo(() => {
    if (user) {
      const amountOfRepositories = user.public_repos;
      const lastPage = Math.ceil(amountOfRepositories / pagination.perPage);
      return lastPage;
    }

    return 0;
  }, [user, pagination.perPage]);

  React.useEffect(() => {
    fetchGithubRepositoriesByUser();
  }, [pagination]);

  return (
    <S.ContainerDiv>
      <S.RepositorySearchWrapperDiv>
        <Input type="text" placeholder="Find a repository..." />
        <S.RepositorySearchButtonGroupDiv>
          <Button
            type="button"
            title="type"
            aria-label="type"
            size="medium"
            icon={{
              name: 'sortDown',
              side: 'right',
              size: 10,
            }}
          >
            Type
          </Button>
          <Button
            type="button"
            title="language"
            aria-label="language"
            size="medium"
            icon={{
              name: 'sortDown',
              side: 'right',
              size: 10,
            }}
          >
            Language
          </Button>
          <Button
            type="button"
            title="sort"
            aria-label="sort"
            size="medium"
            icon={{
              name: 'sortDown',
              side: 'right',
              size: 10,
            }}
          >
            Sort
          </Button>
          <Button
            type="button"
            title="new"
            aria-label="new"
            size="medium"
            variant="success"
            icon={{
              name: 'library',
              side: 'left',
            }}
          >
            New
          </Button>
        </S.RepositorySearchButtonGroupDiv>
      </S.RepositorySearchWrapperDiv>
      <S.RepositoryListWrapperDiv>
        {repositories.map(repository => (
          <RepositoryOverview
            key={repository.node_id}
            repository={repository}
          />
        ))}
      </S.RepositoryListWrapperDiv>

      <Pagination
        changePage={handleChangePage}
        pagination={{
          page: pagination.page,
          lastPage: lastPage,
        }}
      />
    </S.ContainerDiv>
  );
};

export default Repositories;
