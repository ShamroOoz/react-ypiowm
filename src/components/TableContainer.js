import React from 'react';

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import styled from 'styled-components';
// import { Tooltip } from 'react-tooltip';
// import { getTableColumn } from '../utils/Utils.js';

const TableWrapper = styled.div`
  overflow-x: auto;
  position: relative;
`;

const TableContainer = () => {
  const tableColumns = [];

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns?.map((column) => (
              <StyledTableCell
                padding="normal"
                size="small"
                className="th"
                key={column.key}
              >
                {column.title}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableWrapper>
  );
};

export default TableContainer;
