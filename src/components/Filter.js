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

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, status });
    }

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
                        <Grid container spacing={2} alignItems="center" display='flex' justifyContent="flex-end" sx={{ marginLeft: 'auto' }}>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    select
                                    label="Period"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    fullWidth
                                >
                                    <MenuItem value="Waiting">Waiting</MenuItem>
                                    <MenuItem value="Transmission">Transmission</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField
                                    select
                                    label="Status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    fullWidth
                                >
                                    <MenuItem value="Waiting">Waiting</MenuItem>
                                    <MenuItem value="Transmission">Transmission</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    label="From"
                                    value={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    label="To"
                                    value={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>
                            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2}}>
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
