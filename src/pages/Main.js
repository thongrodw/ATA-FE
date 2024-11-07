// pages/SearchPage.js
import React from 'react';
import { Container } from '@mui/material';
import ResultsTable from '../components/ResultsTable';
import mockData from '../data/mockData';
import Filter from '../components/Filter';


const Main = () => (
    <Container maxWidth="xl">
        <Filter />
        <ResultsTable data={mockData} />
    </Container>
);

export default Main;
