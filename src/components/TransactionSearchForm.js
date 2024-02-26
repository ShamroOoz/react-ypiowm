import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {franchisenames} from "../utils/Utils"

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};



export default function TransactionSearch() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <h2>Filter </h2>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel>Franchise</InputLabel>
              <Select
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {franchisenames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Bin"
              variant="outlined"
              type="number"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            {personName?.map((name) => (
              <Stack key={name} direction="row" spacing={1}>
                <Chip
                  label={name}
                  onDelete={() =>
                    setPersonName((prev) => prev.filter((res) => res !== name))
                  }
                />
              </Stack>
            ))}
            {!!personName?.length && (
              <Button
                type="button"
                variant="text"
                onClick={() => setPersonName([])}
              >
                Clear
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
