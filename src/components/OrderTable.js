import React from 'react';

const OrderTable = ({ orders }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Operation</th>
                    <th>Symbol</th>
                    <th>Quantity</th>
                    <th>Filled</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Expiration</th>
                    <th>Ref Number</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.account}</td>
                        <td>{order.operation}</td>
                        <td>{order.symbol}</td>
                        <td>{order.quantity}</td>
                        <td>{order.filled}</td>
                        <td>{order.price}</td>
                        <td>{order.status}</td>
                        <td>{order.date}</td>
                        <td>{order.expiration}</td>
                        <td>{order.refNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrderTable;