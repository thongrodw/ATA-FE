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
  Collapse,
  useMediaQuery,
} from '@mui/material';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
            <TableCell align="center"></TableCell>
            <TableCell align="center" sx={{ color: '#08336F' }}>Account</TableCell>
            <TableCell align="center" sx={{ color: '#08336F' }}>Operation</TableCell>
            <TableCell align="center" sx={{ color: '#08336F' }}>Symbol</TableCell>
            {!isMobile && (
              <>
                <TableCell align="center" sx={{ color: '#08336F' }}>Description</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>Qty.</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>Filled Qty.</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>Price</TableCell>
              </>
            )}
            <TableCell align="center" sx={{ color: '#08336F' }}>Status</TableCell>
            {!isMobile && (
              <>
                <TableCell align="center" sx={{ color: '#08336F' }}>Date</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>Expiration</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>No. Ref.</TableCell>
                <TableCell align="center" sx={{ color: '#08336F' }}>Ext. Ref.</TableCell>
              </>
            )}
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                <TableCell align="center">
                  <IconButton onClick={() => handleExpandClick(row.id)}>
                    {expandedRow === row.id ? (
                      <ExpandLessIcon style={{ transform: 'rotate(180deg)' }} />
                    ) : (
                      <ExpandMoreIcon style={{ transform: 'rotate(270deg)' }} />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell align="center" style={{ color: '#1976D2', fontWeight: 'bold'}}>{row.id}</TableCell>
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
                  <IconButton
                    sx={{
                      backgroundColor: 'rgba(173, 216, 230, 0.3)',
                      transform: 'rotate(90deg)',
                      width: '25px',
                      height: '25px',
                      padding: '4px',
                      '&:hover': {
                        backgroundColor: 'rgba(173, 216, 230, 0.5)', 
                      },
                    }}
                  >
                    <MoreVertIcon fontSize="small"/>
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
