import * as React from 'react';

import { useQuery, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import axios from 'axios';
import * as nock from 'nock';

import queryClient from '../../../src/services/queryClient';

const baseURL = 'https://api.github.com';

const httpClient = axios.create({
  baseURL,
});

function useFetchData() {
  return useQuery({
    queryKey: ['fetchData'],
    queryFn: () => httpClient.get('/users/MarcosSantosDev'),
  });
}

afterEach(() => {
  nock.cleanAll();
});

beforeEach(() => {
  nock(baseURL)
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true',
    })
    .get('/users/MarcosSantosDev')
    .reply(200, { answer: 42 });
});

describe('Validate request flow', () => {
  it('should receive a response object "{ answer: 42 }"', async () => {
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useFetchData(), { wrapper });

    await waitFor(() => {
      return expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.data).toEqual({ answer: 42 });
  });
});
