import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { fetchGithubUser } from '@/services/requests/github';
import {
  FetchGithubUserArguments,
  GithubUser,
} from '@/services/requests/github.types';

import { GithubStateKeysEnum } from '../types';

export function useQueryFetchGithubUser(
  props: FetchGithubUserArguments,
  options?: Omit<
    UseQueryOptions<GithubUser, unknown, GithubUser, string[]>,
    'queryFn' | 'queryKey'
  >,
) {
  return useQuery(
    [GithubStateKeysEnum.FetchGithubUser, props.username],
    () => fetchGithubUser(props),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minute
      ...options,
    },
  );
}
