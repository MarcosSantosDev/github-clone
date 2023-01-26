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
          <Button type="button" size="medium">
            Type
          </Button>
          <Button type="button" size="medium">
            Language
          </Button>
          <Button type="button" size="medium">
            Sort
          </Button>
          <Button type="button" size="medium">
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
