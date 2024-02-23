import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const localise = {
  time: { title: 'Time', maxChar: 20 },
  playerId: { title: 'PID', maxChar: 10 },
  franchise: { title: 'Franchise', maxChar: 15 },
  type: { title: 'Type', maxChar: 15 },
  currency: { title: 'Currency', maxChar: 7 },
  amount: { title: 'Amount', maxChar: 7 },
  fee: { title: 'Fee', maxChar: 7 },
  provider: { title: 'Provider', maxChar: 15 },
  method: { title: 'Method', maxChar: 15 },
  status: { title: 'TRX Status', maxChar: 20 },
  bankInfo: { title: 'Bank Info', maxChar: 55 },
  accHistRef: { title: 'TRX ref Internal', maxChar: 35 },
  externalTrxRef: { title: 'TRX ref External', maxChar: 20 },
  declineReason: { title: 'Decline Reason', maxChar: 60 },
  errorCode: { title: 'Error Code', maxChar: 30 },
  depositFlowType: { title: 'Flow/Deposit Type', maxChar: 16 },
  playerEmail: { title: 'Email', maxChar: 25 },
  '3ds': { title: '3DS (cards)', maxChar: 15 },
  device: { title: 'Device/Browser', maxChar: 45 },
};

export const getTableColumn = (items) => {
  const expandIcon = {
    key: 'expand',
    render: (selected, cb) => (
      <>
        <IconButton onClick={cb}>
          {selected ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </>
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

  return columns;
};
