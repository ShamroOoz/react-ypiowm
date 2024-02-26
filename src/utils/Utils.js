import { IconButton } from '@mui/material';
import KeyboardContentCopy from '@mui/icons-material/ContentCopy';
import {  Button } from '@mui/material';
import Stack from '@mui/material/Stack';

const localise = {
  time: { title: 'Date & Time (Last Updated)', maxChar: 20 },
  chainName: { title: 'Provider Chain Name', maxChar: 60 },
  depositProvider: { title: '# Of Enabled Deposit Providers', maxChar: 10 },
  withdrawlProvider: { title: '# Of Enabled Withdraw', maxChar: 7 },
  bins: { title: '# Of BINs', maxChar: 7 },
  franchise: { title: '# Of Franchise', maxChar: 7 }
};

export const strTruncate = (str, maxLen) =>
str?.length > maxLen ? str?.substring(0, maxLen) + '...' : str?.toString();

export const franchisenames = [
  'ComeOn - Sweden',
  'ComeOn - Global',
  'ComeOn - Norway',
  'ComeOn - Finland',
];

const items = {
  time: "",
  chainName: "",
  depositProvider: "",
  withdrawlProvider: "",
  bins: "",
  franchise: "",
  action:""
}

export const itemsData =[
  {
    "id" : 1,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 2,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 3,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 4,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 5,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 6,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 7,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 8,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 9,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
  {
    "id": 10,
    "time": "2023-06-20 14:00:01",
    "chainName": "492556 PYLON - FTD -CO- SM",
    "depositProvider": 1,
    "withdrawlProvider": 0,
    "bins":6,
    "franchise":2
  },
];

export const getTableColumn = () => {

  const expandIcon = {
    key : 'expand',
    render: (cb) => (
      <>
        <IconButton onClick={cb}>
          <KeyboardContentCopy/>
        </IconButton>
      </>
    ),
  };

  const expandButton = {
    key : 'action',
    render: (cb) => (
      <Stack spacing={3} direction="row">
          <Button
            variant="outlined"
            type="submit"
            color="secondary"
            style={{
              margin: '0  0 15px 0',
              background: '#9ecb2c',
              borderColor: '#9ecb2c',
              color: '#fff',
            }}
            onClick={cb}
          >
            VIEW
          </Button>
          <Button
              variant="outlined"
              type="submit"
              color="secondary"
              style={{
                margin: '0 10px 15px 0',
                borderColor: '#9ecb2c',
                color: '#9ecb2c',
              }}
              onClick={cb}
            >
              REPORT
          </Button>
      </Stack>
    ),
  };

  const columns = [expandIcon];

  Object.keys(items ?? {}).forEach((item) =>
    columns.push({
      key: item,
      title: localise[item]?.title || item,
      maxChar: localise[item]?.maxChar,
    })
  );

  columns.push(expandButton);

  return columns;
};
