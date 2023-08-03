import useSWR from 'swr';
import { useMemo } from 'react';
import { endpoints, fetcher } from '@/utils/axios';

// ----------------------------------------------------------------------

export function useGetPosts({ _check }: { _check: boolean }) {
  const URL = endpoints.post.list;

  const { data, isLoading, error, isValidating } = useSWR(_check ? null : URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      posts: data?.posts as any,
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.posts.length,
    }),
    [data?.posts, error, isLoading, isValidating]
  );

  return memoizedValue;
}
