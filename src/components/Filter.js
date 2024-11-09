import { useState } from 'react';
import { TextField, MenuItem, Paper, Typography, Chip, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const Filter = ({ onFilterChange, totalResults }) => {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [status, setStatus] = useState('Waiting');
    const [period, setPeriod] = useState('Waiting');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, status, period });
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, maxWidth: 'xl', margin: '0 auto' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Search
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Search results: <strong>{totalResults}</strong>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={10}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body2">Period</Typography>
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
                                    <Typography variant="body2">Status</Typography>
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
                                    <Typography variant="body2">From</Typography>
                                </Grid>
                                <Grid item xs>
                                    <DatePicker
                                        value={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography variant="body2">To</Typography>
                                </Grid>
                                <Grid item xs>
                                    <DatePicker
                                        value={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 1 }}>
                                <Chip label="Search" color="primary" onClick={handleFilterChange} />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Filter;
