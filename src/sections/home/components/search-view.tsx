'use client';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import CameraIcon from '@/assets/icons/camera-icon';
import SearchIcon from '@/assets/icons/search-icon';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import React, { useCallback, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { useDebounce } from '@/hooks/use-debounce';
import { useGetAutoComplete, useGetSuggest } from '@/apis/search-home';
import Typography from '@mui/material/Typography';
import SearchNotFound from '@/components/search-not-found';

export default function SearchView() {
  const { suggest, suggestLoading } = useGetSuggest();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery);
  // api khi search tu khoa tra ve array(6)
  const { autoComplete, autoCompleteLoading } = useGetAutoComplete(debouncedQuery);

  const options = suggest?.enterprises?.map((option: any) => {
    return {
      firstLetter: option.type === 'company' ? 'Company' : 'Supplier',
      ...option,
    };
  });

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (debouncedQuery) {
      if (event.key === 'Enter') {
        // handleClick(debouncedQuery);
        console.log('Enter');
      }
    }
  };

  console.log('>>>>>> autoComplete ', autoComplete);

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
          <Autocomplete
            id="grouped-suggest"
            size="small"
            fullWidth
            // Khi click vao input moi call api
            // onOpen={() => listSuggest()}
            onInputChange={(event, newValue) => handleSearch(newValue)}
            disabled={suggestLoading}
            loading={suggestLoading}
            options={options}
            groupBy={(option: any) => option.firstLetter}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              return option.title;
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Find Any Company’s Suppliers"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {suggestLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      <CameraIcon />
                      {params.InputProps.endAdornment}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        ) : (
          <Autocomplete
            id="auto-complete"
            size="small"
            fullWidth
            loading={autoCompleteLoading}
            autoHighlight
            popupIcon={null}
            options={autoComplete}
            onInputChange={(event, newValue) => handleSearch(newValue)}
            getOptionLabel={(option: any) => option}
            isOptionEqualToValue={(option, value) => option === value}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Find Any Company’s Suppliers"
                onKeyUp={handleKeyUp}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {autoCompleteLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      <CameraIcon />
                      {params.InputProps.endAdornment}
                    </InputAdornment>
                  ),
                }}
              />
            )}
            renderOption={(props, option, { inputValue }) => {
              const matches = match(option, inputValue);
              const parts = parse(option, matches);

              return (
                <Box
                  component="li"
                  {...props}
                  key={option}
                  sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {parts.map((part, index) => (
                    <Typography
                      key={index}
                      component="span"
                      color={part.highlight ? 'primary' : 'textPrimary'}
                      sx={{
                        typography: 'body2',
                        fontWeight: part.highlight ? 'fontWeightSemiBold' : 'fontWeightMedium',
                        fontSize: '16px',
                        paddingRight: '2px',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      {part.text}
                    </Typography>
                  ))}
                </Box>
              );
            }}
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
