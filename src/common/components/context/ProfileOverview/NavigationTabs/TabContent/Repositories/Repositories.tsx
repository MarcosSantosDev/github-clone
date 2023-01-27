import { Input } from '@/common/components/form';
import { Button, RepositoryOverview } from '@/common/components/structure';

import { repositoriesMocked } from './mock';
import * as S from './Repositories.styles';

const Repositories = () => {
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
        {repositoriesMocked.map(repository => (
          <RepositoryOverview key={repository.id} repository={repository} />
        ))}
      </S.RepositoryListWrapperDiv>
    </S.ContainerDiv>
  );
};

export default Repositories;
