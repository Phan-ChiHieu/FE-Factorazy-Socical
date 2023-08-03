import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints, fetcherHidden, fetcherServer } from 'src/utils/axios';
import { useSearchParams } from 'next/navigation';

//   const { data: dataListSuggest, isLoading: isLoadingListSuggest } = useSWR(endpoints.home.getSuggest, fetcherHidden);

// ----------------------------------------------------------------------

export function useGetSuggest() {
  const URL = endpoints.enterprise.suggest;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcherHidden);

  const memoizedValue = useMemo(
    () => ({
      suggest: (data?.data as any) || [],
      suggestLoading: isLoading,
      suggestError: error,
      suggestValidating: isValidating,
      //   suggestEmpty: !isLoading && !data?.posts.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetAutoComplete(content: string) {
  const URL = content ? [endpoints.enterprise.autoComplete, { params: { content } }] : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcherServer, {
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      autoComplete: (data?.data as any) || [],
      autoCompleteLoading: isLoading,
      autoCompleteError: error,
      autoCompleteValidating: isValidating,
      //   suggestEmpty: !isLoading && !data?.posts.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
