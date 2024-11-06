import { useState } from 'react';
import './App.css';
import OrderTable from './components/OrderTable';
import Filter from './components/Filter';
import orders from './data/mockData';

function App() {

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleFilterChange = ({ startDate, endDate, status }) => {
    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return (order.status === status && orderDate >= startDate && orderDate <= endDate);
    })
    setFilteredOrders(filtered);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Management</h1>
        <Filter onFilterChange={handleFilterChange} />
        <OrderTable orders={filteredOrders} />
      </header>
    </div>
  );
}

export default App;
