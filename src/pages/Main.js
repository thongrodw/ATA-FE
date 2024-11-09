// pages/SearchPage.js
import {React, useState} from 'react';
import { Container } from '@mui/material';
import ResultsTable from '../components/ResultsTable';
import mockData from '../data/mockData';
import Filter from '../components/Filter';

const Main = () => {
    const [filteredData, setFilteredData] = useState(mockData);

    const handleFilterChange = (filter) => {
        const {startDate, endDate, status} = filter;

        let inputStartDate = new Date(startDate);
        let inputEndDate = new Date(endDate);

        console.log("inputStartDate: ", inputStartDate);
        console.log("inputEndDate: ", inputEndDate);

        const filtered = mockData.filter((item) => {
            const itemStartDate = new Date(item.date);
            itemStartDate.setHours(0, 0, 0, 0);
            const itemEndDate = new Date(item.expiration);
            itemEndDate.setHours(23, 59, 59, 999);
            return (
                item.status === status &&
                itemStartDate >= inputStartDate &&
                itemEndDate <= inputEndDate
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
