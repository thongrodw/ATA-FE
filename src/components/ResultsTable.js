import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RowDetails from './RowDetails';

const ResultsTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleExpandClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Operation</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Qty.</TableCell>
            <TableCell>Filled Qty.</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Expiration</TableCell>
            <TableCell>No. Ref.</TableCell>
            <TableCell>Ext. Ref.</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.operation}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.filledQty}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Chip label={row.status} color="info" />
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.expiration}</TableCell>
                <TableCell>{row.refNo}</TableCell>
                <TableCell>{row.extRef}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleExpandClick(row.id)}>
                    {expandedRow === row.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
              {expandedRow === row.id && (
                <TableRow>
                  <TableCell colSpan={13}>
                    <Collapse in={expandedRow === row.id} timeout="auto" unmountOnExit>
                      <RowDetails details={row.details} />
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
