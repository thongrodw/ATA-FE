import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

const RowDetails = ({ details }) => (
    <Box sx={{ margin: 2 }}>
        <Typography variant="body1" gutterBottom>
            <strong>Net Amount:</strong> {details.netAmount}
        </Typography>
        <Typography variant="body1">
            <strong>Reference Number:</strong> {details.referenceNumber}
        </Typography>
        <Typography variant="body1">
            <strong>Date/Time:</strong> {details.dateTime}
        </Typography>
        <Divider sx={{ marginY: 1 }} />
        <Typography variant="body2" color="textSecondary">
            Warnings:
        </Typography>
        {details.warnings.map((warning, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
                - {warning}
            </Typography>
        ))}
        <Box mt={2}>
            <Button variant="contained" color="success" sx={{ marginRight: 1 }}>
                Accept
            </Button>
            <Button variant="outlined" color="error">
                Reject
            </Button>
        </Box>
    </Box>
);

export default RowDetails;
