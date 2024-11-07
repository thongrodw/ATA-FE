import React from 'react';
import { Box, Typography, Button, Grid, Paper, Chip } from '@mui/material';
import OpenNewTab from './OpenNewTab';

const RowDetails = ({ details }) => (
  <Paper variant="outlined" sx={{ padding: 2, backgroundColor: '#f9f9f9', marginY: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" color="primary" sx={{ marginRight: 1 }}>
          {details.firstName} {details.lastName} ({details.accountNumber} - {details.accountType})
        </Typography>
        <Chip label={<><span>Full review details</span><OpenNewTab /></>} sx={{ backgroundColor: '#ffffff', border: '1px solid #808080', color: '#1976D2' }}/>
      </Grid>

      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip label="Accept" color="primary" sx={{ marginRight: 0.5}} />
        <Chip label="Reject" sx={{ backgroundColor: '#ffffff', border: '1px solid red', color: 'red' }}/>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Net Amount: </Typography>
        <Typography variant="body1" color="primary" display="inline">{details.netAmount}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Price: </Typography>
        <Typography variant="body1" display="inline">{details.price}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Exchange Rate: </Typography>
        <Typography variant="body1" display="inline">{details.exchangeRate}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">O/S Limit: </Typography>
        <Typography variant="body1" display="inline">{details.osLimit}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Reference Number: </Typography>
        <Typography variant="body1" display="inline">{details.referenceNumber}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Date / Time: </Typography>
        <Typography variant="body1" display="inline">{details.dateTime}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">Telephone: </Typography>
        <Typography variant="body1" display="inline">{details.telephone}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body1" fontWeight="bold" display="inline">User ID: </Typography>
        <Typography variant="body1" display="inline">{details.userId}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary" fontWeight="bold" >
          Warning(s)
        </Typography>
        <Box sx={{ paddingLeft: 2 }}>
          {details.warnings.map((warning, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              - {warning}
            </Typography>
          ))}
        </Box>
      </Grid>

    </Grid>
  </Paper>
);

export default RowDetails;
