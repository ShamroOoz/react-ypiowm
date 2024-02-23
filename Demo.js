import * as React from 'react';
import TransactionSearch from './components/TransactionSearchForm.js';
import TableContainer from './components/TableContainer.js';
const app = () => {
  return (
    <div>
      <TransactionSearch />
      <TableContainer />
    </div>
  );
};

export default app;
