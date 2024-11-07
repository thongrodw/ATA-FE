import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Chip, Collapse, useMediaQuery } from '@mui/material';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RowDetails from './RowDetails';

const ResultsTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Operation</TableCell>
            <TableCell align="center">Symbol</TableCell>
            {!isMobile && (
              <>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Qty.</TableCell>
                <TableCell align="center">Filled Qty.</TableCell>
                <TableCell align="center">Price</TableCell>
              </>
            )}
            <TableCell align="center">Status</TableCell>
            {!isMobile && (
              <>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Expiration</TableCell>
                <TableCell align="center">No. Ref.</TableCell>
                <TableCell align="center">Ext. Ref.</TableCell>
                <TableCell align="center">Actions</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.operation}</TableCell>
                <TableCell align="center">{row.symbol}</TableCell>
                {!isMobile && (
                  <>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.filled}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                  </>
                )}
                <TableCell align="center">
                  <PendingActionsIcon sx={{ marginRight: '2px', color: '#1976D2', verticalAlign: 'middle' }} />
                  {row.status}
                </TableCell>
                {!isMobile && (
                  <>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.expiration}</TableCell>
                    <TableCell align="center">{row.refNo}</TableCell>
                    <TableCell align="center">{row.extRef}</TableCell>
                  </>
                )}
                <TableCell align="center">
                  <IconButton onClick={() => handleExpandClick(row.id)}>
                    {expandedRow === row.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
              {expandedRow === row.id && (
                <TableRow>
                  <TableCell colSpan={isMobile ? 5 : 13}>
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
