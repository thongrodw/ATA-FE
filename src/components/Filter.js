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
    const [period, setPeriod] = useState('Transmission');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    const handleFilterChange = () => {
        const adjustedStartDate = startDate.startOf('day');
        const adjustedEndDate = endDate.endOf('day');
        onFilterChange({ startDate: adjustedStartDate, endDate: adjustedEndDate, status, period });
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, maxWidth: 'xl', margin: '0 auto' }}>
            <Grid container spacing={2} alignItems="center"></Grid>
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
                                {!isMedium && !isMobile && (
                                    <Grid item>
                                        <Typography variant="body2" sx={{ fontSize: '10px' }}>Period</Typography>
                                    </Grid>
                                )}
                                <Grid item xs>
                                    <TextField
                                        select
                                        value={period}
                                        label={isMedium || isMobile ? 'Period' : ''}
                                        onChange={(e) => setPeriod(e.target.value)}
                                        fullWidth
                                        size="small"
                                        InputProps={{
                                            style: { fontSize: '0.75rem' }
                                        }}
                                        sx={{ '& .MuiInputBase-root': { fontSize: '0.75rem' } }}
                                    >
                                        <MenuItem value="Transmission">Transmission</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                {!isMedium && !isMobile && (
                                    <Grid item>
                                        <Typography variant="body2" sx={{ fontSize: '10px' }}>Status</Typography>
                                    </Grid>
                                )}
                                <Grid item xs>
                                    <TextField
                                        select
                                        value={status}
                                        label={isMedium || isMobile ? 'Status' : ''}
                                        onChange={(e) => setStatus(e.target.value)}
                                        fullWidth
                                        size="small"
                                        InputProps={{
                                            style: { fontSize: '0.75rem' }
                                        }}
                                        sx={{ '& .MuiInputBase-root': { fontSize: '0.75rem' } }}
                                    >
                                        <MenuItem value="Waiting">Waiting</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                {!isMedium && !isMobile && (
                                    <Grid item>
                                        <Typography variant="body2" sx={{ fontSize: '10px' }}>From</Typography>
                                    </Grid>
                                )}
                                <Grid item xs>
                                    <DatePicker
                                        value={startDate}
                                        label={isMedium || isMobile ? 'From' : ''}
                                        onChange={(date) => setStartDate(date)}
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true,
                                                InputProps: {
                                                    style: { fontSize: '0.75rem' },
                                                },
                                                sx: { '& .MuiInputBase-input': { fontSize: '0.75rem' } },
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={2} container alignItems="center" spacing={1}>
                                {!isMedium && !isMobile && (
                                    <Grid item>
                                        <Typography variant="body2" sx={{ fontSize: '10px' }}>To</Typography>
                                    </Grid>
                                )}
                                <Grid item xs>
                                    <DatePicker
                                        value={endDate}
                                        label={isMedium || isMobile ? 'To' : ''}
                                        onChange={(date) => setEndDate(date)}
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true,
                                                InputProps: {
                                                    style: { fontSize: '0.75rem' },
                                                },
                                                sx: { '& .MuiInputBase-input': { fontSize: '0.75rem' } },
                                            },
                                        }}
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
