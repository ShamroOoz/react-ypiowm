import React,{Fragment,useState} from 'react';

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
import { getTableColumn , strTruncate} from '../utils/Utils.js';
import Dialog from "./DraggableDialog.js"

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: #f8f9fc;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  position: relative;
  margin-top: 20px;
`;

const StyledTableCell = styled(TableCell)`
  &:first-of-type {
    padding: 0;
  }
  &.th {
    font-weight: bold;
    background: #f1f3f9;
  }
  white-space: nowrap;
`;



const TableContainer = ({itemsData}) => {
  
const tableColumns = getTableColumn();
const [showDialog, setshowDialog] = useState(false);
const renderCB = (item) => () => setshowDialog(item);


  if (!itemsData.length) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="250px"
      >
        <Box bgcolor="white" width="320px">
          <h3>
            Data processing in progress! Try again to fetch after sometime
          </h3>
          <Button
            variant="outlined"
            color="secondary"
            style={{
              margin: '10px 0 10px 10px',
              background: '#9ecb2c',
              borderColor: '#9ecb2c',
              color: '#fff',
            }}
            onClick={() => console.log(items)}
          >
            Retry Again
          </Button>
        </Box>
      </Box>
    );
  }


  return (
    <TableWrapper>
      {showDialog && <Dialog showDialog={showDialog} setshowDialog={setshowDialog}/>}
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns?.map((column) => (
              <StyledTableCell
                padding="normal"
                size="small"
                className="th"
                key={column.id}
              >
                {column.title}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsData.map((item) => (
            <Fragment key={item.id}>
              <StyledTableRow hover>
                {tableColumns?.map((column) => (
                  <StyledTableCell
                    padding="normal"
                    size="small"
                    key={column.key}
                    align={column.align}
                    data-tooltip-id="tooltip"
                    data-tooltip-content={item[column.id]}
                  >
                    {column.render
                      ? column.render(renderCB(item))
                      : strTruncate(item[column.key], column.maxChar)}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default TableContainer;
