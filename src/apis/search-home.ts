import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints, fetcherHidden, fetcherServer } from 'src/utils/axios';
import { HOST_TOKEN_LOCATI0N } from '@/config-global';

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

// ----------------------------------------------------------------------

export function useGetIp() {
  const URL = `https://ipinfo.io/json?token=${HOST_TOKEN_LOCATI0N}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcherHidden);

  const memoizedValue = useMemo(
    () => ({
      ipToken: (data as any) || [],
      ipTokenLoading: isLoading,
      ipTokenError: error,
      ipTokenValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

/*
city
: 
"Ho Chi Minh City"
country
: 
"VN"
hostname
: 
"static.vnpt.vn"
ip
: 
"14.226.252.145"
loc
: 
"10.8230,106.6296"
org
: 
"AS45899 VNPT Corp"
postal
: 
"71606"
region
: 
"Ho Chi Minh"
timezone
: 
"Asia/Ho_Chi_Minh"
*/
