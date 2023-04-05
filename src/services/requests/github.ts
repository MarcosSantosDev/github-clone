import httpClient from '../htttpClient';
import { FetchGithubUserArguments, GithubUser } from './github.types';

export const fetchGithubUser = async ({
  username,
}: FetchGithubUserArguments): Promise<GithubUser> => {
  const { data } = await httpClient.get<GithubUser>(`/users/${username}`);

  return data;
};
