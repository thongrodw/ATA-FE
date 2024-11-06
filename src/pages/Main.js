// pages/SearchPage.js
import React from 'react';
import { Container } from '@mui/material';
import ResultsTable from '../components/ResultsTable';
import mockData from '../data/mockData';


const Main = () => (
  <Container maxWidth="lg">
    <ResultsTable data={mockData} />
  </Container>
);

export default Main;
