import  React,{useRef} from 'react';
import TransactionSearch from './components/TransactionSearchForm.js';
import TableContainer from './components/TableContainer.js';
import { Box, Pagination, Button } from '@mui/material';
import { itemsData} from './utils/Utils.js';

const app = () => {
  
  const pageRef = useRef(null);

  const handlePageChange = (_, newPage) => {
    pageRef.current = newPage;
    console.log("logic to fetch new page....")
  };

  return (
    <div>
      
      <TransactionSearch />
      <TableContainer itemsData={itemsData}/>
      <Box p={2}>
            <Pagination
              count={Math.ceil(itemsData.totalCount / 50)}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
              // disabled={loading}
              // page={pageRef.current ?? 1}
            />
        </Box>

        <Button
          variant="outlined"
          type="submit"
          color="secondary"
          style={{
            margin: '0 10px 15px 0',
            borderColor: '#9ecb2c',
            color: '#9ecb2c',
          }}
          onClick={()=> console.log("call this")}
        >
        REPORT ALL
      </Button>
      
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
        onClick={()=> console.log("call this")}
      >
        CREATE NEW
      </Button>
    </div>
  );
};

export default app;
