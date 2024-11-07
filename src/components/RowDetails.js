import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';

const RowDetails = ({ details }) => (
  <Paper variant="outlined" sx={{ padding: 2, backgroundColor: '#f9f9f9', marginY: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">
          {details.name} ({details.accountNumber} - {details.accountType})
        </Typography>
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
        <Typography variant="body2" color="textSecondary" fontWeight="bold" sx={{ marginTop: 2 }}>
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

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>Accept</Button>
        <Button variant="outlined" color="error">Reject</Button>
      </Grid>
    </Grid>
  </Paper>
);

export default RowDetails;
