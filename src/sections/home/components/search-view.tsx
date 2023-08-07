import Box from '@mui/system/Box';
import React, { useCallback, useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { useDebounce } from '@/hooks/use-debounce';
import { useGetAutoComplete } from '@/apis/search-home';
import SuggestComplete from './suggest-complete';
import AutoComplete from './auto-complete';

export default function SearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery);
  // api khi search tu khoa tra ve array(6)
  const { autoComplete, autoCompleteLoading } = useGetAutoComplete(debouncedQuery);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (debouncedQuery) {
      if (event.key === 'Enter') {
        // handleClick(debouncedQuery);
        // console.log('Enter');
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          marginTop: '24px',
          backgroundColor: '#fff',
          height: '40px',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          position: 'relative',
          zIndex: 50,
          marginBottom: '-20px',
          cursor: 'pointer',
        }}
      >
        {autoComplete.length === 0 ? (
          // Suggested
          <SuggestComplete onSearch={handleSearch} autoCompleteLoading={autoCompleteLoading} />
        ) : (
          // AutoComplete
          <AutoComplete
            onSearch={handleSearch}
            onKeyUp={handleKeyUp}
            data={autoComplete}
            loading={autoCompleteLoading}
            searchQuery={searchQuery}
          />
        )}

        <Stack mt="24px" direction="row" justifyContent="center" alignItems="center">
          <ButtonBase
            sx={{
              color: '#000',
              backgroundColor: '#EFF1EF',
              height: '44px',
              width: '182px',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderRadius: '6px',
            }}
          >
            Search
          </ButtonBase>
        </Stack>
      </Box>
    </>
  );
}
