import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import React, { useCallback, useEffect, useState } from 'react';
import CameraIcon from '@/assets/icons/camera-icon';
import SearchIcon from '@/assets/icons/search-icon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/system/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

type PropsAutocompleteT = {
  onSearch: (value: string) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  data: [];
  loading: boolean;
  searchQuery: string;
};

export default function AutoComplete({ onSearch, onKeyUp, data, loading, searchQuery }: PropsAutocompleteT) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    if (searchQuery.length > 0) {
      setOpen(true);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (data.length > 0) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <Autocomplete
        id="auto-complete"
        size="small"
        fullWidth
        loading={loading}
        autoHighlight
        popupIcon={null}
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        inputValue={searchQuery}
        options={data}
        onInputChange={(event, newValue) => onSearch(newValue)}
        getOptionLabel={(option: any) => option}
        isOptionEqualToValue={(option, value) => option === value}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Find Any Company’s Suppliers"
            onKeyUp={onKeyUp}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
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
    </>
  );
}
