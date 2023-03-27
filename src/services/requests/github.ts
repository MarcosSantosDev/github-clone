import httpClient from '../htttpClient';
import { FetchGithubUserArguments, GithubUser } from './github.types';

export const fetchGithubUser = async ({
  user,
}: FetchGithubUserArguments): Promise<GithubUser> => {
  const { data } = await httpClient.get<GithubUser>(`/users/${user}`);

  return data;
};
