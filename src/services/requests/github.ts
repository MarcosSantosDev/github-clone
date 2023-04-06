import httpClient from '../htttpClient';
import {
  FetchGithubUserArguments,
  FetchGithubRepositoriesByUserArguments,
  GithubUser,
  GithubRepository,
} from './github.types';

export const fetchGithubUser = async ({
  username,
}: FetchGithubUserArguments): Promise<GithubUser> => {
  const { data } = await httpClient.get<GithubUser>(`/users/${username}`);

  return data;
};

export const fetchGithubRepositoriesByUser = async ({
  username,
  pagination,
}: FetchGithubRepositoriesByUserArguments): Promise<GithubRepository[]> => {
  const { data } = await httpClient.get<GithubRepository[]>(
    `/users/${username}/repos?page=${pagination.page}&per_page=${pagination.perPage}`,
  );

  return data;
};
