import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetSuggest } from '@/apis/search-home';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@/assets/icons/search-icon';
import CircularProgress from '@mui/material/CircularProgress';
import CameraIcon from '@/assets/icons/camera-icon';
import Chip from '@mui/material/Chip';

type PropsSuggestCompleteT = {
  onSearch: (value: string) => void;
  autoCompleteLoading: boolean;
};

export default function SuggestComplete({ onSearch, autoCompleteLoading }: PropsSuggestCompleteT) {
  const { suggest, suggestLoading } = useGetSuggest();

  const options = suggest?.enterprises?.map((option: any) => {
    return {
      firstLetter: option.type === 'company' ? 'Company' : 'Supplier',
      ...option,
    };
  });

  return (
    <>
      <Autocomplete
        id="grouped-suggest"
        size="small"
        fullWidth
        // Khi click vao input moi call api
        // onOpen={() => listSuggest()}
        onInputChange={(event, newValue) => onSearch(newValue)}
        disabled={suggestLoading}
        loading={suggestLoading || autoCompleteLoading}
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
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.title}>
              {option.title}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option.type} label={option.type} />
          ));
        }}
      />
    </>
  );
}
