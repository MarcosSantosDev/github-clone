import { useQuery } from '@tanstack/react-query';

import { fetchGithubUser } from '@/services/requests/github';
import { FetchGithubUserArguments } from '@/services/requests/github.types';

import { GithubStateKeysEnum } from '../types';

export function useQueryFetchGithubUser(props: FetchGithubUserArguments) {
  return useQuery(
    [GithubStateKeysEnum.FetchGithubUser],
    () => fetchGithubUser(props),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
}
