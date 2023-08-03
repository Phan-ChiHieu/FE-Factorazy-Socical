'use client';

import CameraIcon from '@/assets/icons/camera-icon';
import SearchIcon from '@/assets/icons/search-icon';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { endpoints } from '@/utils/axios';

export default function SearchView() {
  const [dataSuggest, setDataSuggest] = useState([]);
  const [loading, setLoading] = useState(true);

  // api all list get-suggest
  const listSuggest = async () => {
    const response = await fetch(endpoints.landingSearch.getSuggest);
    try {
      const data = await response.json();
      const result = data.data.data.enterprises;
      const check = data.data.resultCode;

      if (check === 200) {
        setDataSuggest(result);
        setLoading(false);
      }
    } catch (error) {
      console.log('>>> Error: ' + error);
    }
  };

  useEffect(() => {
    listSuggest();
  }, []);

  const options = dataSuggest.map((option: any) => {
    return {
      firstLetter: option.type === 'company' ? 'Company' : 'Supplier',
      ...option,
    };
  });

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
        <Autocomplete
          id="grouped-suggest"
          size="small"
          fullWidth
          freeSolo
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
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
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    <CameraIcon />
                    {params.InputProps.endAdornment}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
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
        {/* <button onClick={() => handleCheckValue()}>Click</button> */}
      </Box>
    </>
  );
}

const demoApi = [
  {
    success: true,
    data: {
      companies: [
        {
          title: 'To Order Of M & T Bank',
          countryCode: 'US',
          type: 'company',
          address: '1800 Washington Blvd, Fl 8, Baltimore, Md 21230, Us',
          totalShipments: 6,
          mostRecentShipment: '18/05/2019',
          topSuppliers_string: '["Dk Commodity","Foods And Inns","Max Grand","Henan Xindatong Aluminum Industrial"]',
          topSuppliers: null,
          url: 'company/to-order-of-m-t-bank',
          totalItem: 0,
          id: '72b5f923-d65d-4691-bd22-0000ab1f9990',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
        {
          title: 'Victoria C',
          countryCode: 'US',
          type: 'company',
          address: '5 Mountain Ash, Irvine, Ca 92604, Us',
          totalShipments: 1,
          mostRecentShipment: '14/08/2020',
          topSuppliers_string: '["Piaoyang Li"]',
          topSuppliers: null,
          url: 'company/victoria-c',
          totalItem: 0,
          id: 'f2cedb43-e168-4890-b70c-000087a1802c',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
        {
          title: 'Willie Clark E',
          countryCode: 'US',
          type: 'company',
          address: '4714 Parsons Blvd',
          totalShipments: 1,
          mostRecentShipment: '31/08/2022',
          topSuppliers_string: '["Shenzhen Zeshun Logistics"]',
          topSuppliers: null,
          url: 'company/willie-clark-e',
          totalItem: 0,
          id: 'c6dafe79-5663-4370-b567-00015b2dc633',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
      ],
      suppliers: [
        {
          title: 'Shanghai M E Fashion',
          countryCode: 'CN',
          type: 'supplier',
          address: '172 Hami Road 200001 Shanghai',
          totalShipments: 48,
          mostRecentShipment: '20/05/2023',
          topSuppliers_string: '["Aquarius","Cat5 Commerce","Tri Coastal Design Group","The Boeing Store","Cat5 Commmerce"]',
          topSuppliers: null,
          url: 'supplier/shanghai-m-e-fashion',
          totalItem: 0,
          id: '6d7c4258-4200-4b3a-9b91-00004903da2e',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
        {
          title: 'Anghinetti & Camptel S R L',
          countryCode: 'IT',
          type: 'supplier',
          address: 'Via Xx Settembre 95 Gussola 26040 It',
          totalShipments: 25,
          mostRecentShipment: '22/03/2021',
          topSuppliers_string: '["Albatross Usa","Albatros Usa","European Finishing Equipment","Tecnologia En Costura De"]',
          topSuppliers: null,
          url: 'supplier/anghinetti-camptel-s-r-l',
          totalItem: 0,
          id: '1a869bbb-beba-4133-a3cf-0000aec30f21',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
        {
          title: 'Suttons Internation N A 485C Route',
          countryCode: 'US',
          type: 'supplier',
          address: '1 South - Suite 240 Iselin Nj 08830 Tel XXX-XXX-XXXX Fax XXX-XXX-XXXX',
          totalShipments: 1,
          mostRecentShipment: '23/06/2016',
          topSuppliers_string: '["Suttons International Japan K K"]',
          topSuppliers: null,
          url: 'supplier/suttons-internation-n-a-485c-route',
          totalItem: 0,
          id: '4fc5cbc4-f3c6-41ac-804c-0000e9293092',
          created: 0.0,
          createdBy: null,
          updated: null,
          updatedBy: null,
          deleted: false,
          active: true,
        },
      ],
    },
    resultCode: 200,
    resultMessage: null,
  },
];

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

/*
 <Autocomplete
          size="small"
          fullWidth
          freeSolo
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          // isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option: any) => option.title}
          options={options}
          loading={loading}
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
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    <CameraIcon />
                    {params.InputProps.endAdornment}
                  </InputAdornment>
                ),
              }}
            />
          )}
          renderOption={(props, option) => (
            <Box
              sx={{
                padding: '8px',
              }}
            >
              <Box component="li" px="10px" {...props} key={option.title}>
                {option.title}
              </Box>
            </Box>
          )}
        />
*/
