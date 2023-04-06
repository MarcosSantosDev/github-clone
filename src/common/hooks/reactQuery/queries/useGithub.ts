import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import {
  fetchGithubUser,
  fetchGithubRepositoriesByUser,
} from '@/services/requests/github';
import {
  FetchGithubUserArguments,
  FetchGithubRepositoriesByUserArguments,
  GithubUser,
  GithubRepository,
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

export function useQueryFetchGithubRepositoriesByUser(
  props: FetchGithubRepositoriesByUserArguments,
  options?: Omit<
    UseQueryOptions<GithubRepository[], unknown, GithubRepository[], string[]>,
    'queryFn' | 'queryKey'
  >,
) {
  return useQuery(
    [
      GithubStateKeysEnum.FetchGithubRepositoriesByUser,
      props.username,
      props.pagination.page.toString(),
    ],
    () => fetchGithubRepositoriesByUser(props),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 1 minute
      ...options,
    },
  );
}
