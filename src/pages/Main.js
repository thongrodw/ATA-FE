// pages/SearchPage.js
import {React, useState} from 'react';
import { Container } from '@mui/material';
import ResultsTable from '../components/ResultsTable';
import mockData from '../data/mockData';
import Filter from '../components/Filter';

const Main = () => {
    const [filteredData, setFilteredData] = useState(mockData);

    const handleFilterChange = (filter) => {
        const {startDate, endDate, status, period} = filter;
        
        const filtered = mockData.filter((item) => {
            const itemDate = new Date(item.date);
            return (
                item.status === status &&
                itemDate >= startDate.toDate() &&
                itemDate <= endDate.toDate()
            );
        });

        setFilteredData(filtered);
    };

    return (
        <Container maxWidth="xl">
            <Filter onFilterChange={handleFilterChange} totalResults={filteredData.length} />
            <ResultsTable data={mockData} />
        </Container>
    );
};

export default Main;
