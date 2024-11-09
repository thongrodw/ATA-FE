import { useState } from 'react';
import { TextField, MenuItem, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const Filter = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [status, setStatus] = useState('Waiting');
    const [period, setPeriod] = useState('Waiting');

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, status });
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, height: 'auto', maxWidth: 'xl', margin: '0 auto' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                    <Typography variant="h6" gutterBottom>
                        Search
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2} alignItems="center" display="flex" justifyContent="flex-end" sx={{ marginLeft: 'auto' }}>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body1">Period</Typography>
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        select
                                        value={period}
                                        onChange={(e) => setPeriod(e.target.value)}
                                        fullWidth
                                        size="small"
                                    >
                                        <MenuItem value="Waiting">Waiting</MenuItem>
                                        <MenuItem value="Transmission">Transmission</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body1">Status</Typography>
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        fullWidth
                                        size="small"
                                    >
                                        <MenuItem value="Waiting">Waiting</MenuItem>
                                        <MenuItem value="Transmission">Transmission</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body1">From</Typography>
                                </Grid>
                                <Grid item xs>
                                    <DatePicker
                                        value={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        slotProps={{ textField: { size: 'small' } }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body1">To</Typography>
                                </Grid>
                                <Grid item xs>
                                    <DatePicker
                                        value={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        slotProps={{ textField: { size: 'small' } }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 1 }}>
                                <Button variant="contained" color="primary" onClick={handleFilterChange}>
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Filter;
