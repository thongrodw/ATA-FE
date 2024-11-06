import { useState } from 'react';

const Filter = ({ onFilterChange }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('Waiting');

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, status });
    }

    return (
        <div className="filters">
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Waiting">Waiting</option>
                <option value="Transmission">Transmission</option>
            </select>
            <label>From:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label>To:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={handleFilterChange}>Search</button>
        </div>
    );
};

export default Filter;