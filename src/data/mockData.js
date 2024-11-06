const mockData = [
  {
    id: '00000001',
    account: 'Buy',
    operation: 'NA',
    symbol: 'NATIONAL BANK OF CDA',
    quantity: 5,
    filled: 0,
    price: 526.00,
    status: 'Waiting',
    date: '2023-12-08',
    expiration: '2023-12-08',
    refNumber: '1385081',
    details: {
      netAmount: '1,152.95 USD',
      referenceNumber: '1234567890',
      dateTime: '2023/01/04 03:05:43',
      warnings: [
        'To trade this security in this account, a currency conversion will be made at the current rate.',
        'A similar order has already been submitted.',
        'Your transaction will be processed the following business day.',
        'It is not possible to calculate the buying power of this order.',
      ],
    }
  },
  {
    id: '00000002',
    account: 'Buy',
    operation: 'NA',
    symbol: 'NATIONAL BANK OF CDA',
    quantity: 10,
    filled: 0,
    price: 526.00,
    status: 'Waiting',
    date: '2023-12-08',
    expiration: '2023-12-08',
    refNumber: '1385081',
    details: {
      netAmount: '1,152.95 USD',
      referenceNumber: '1234567890',
      dateTime: '2023/01/04 03:05:43',
      warnings: [
        'To trade this security in this account, a currency conversion will be made at the current rate.',
        'A similar order has already been submitted.',
        'Your transaction will be processed the following business day.',
        'It is not possible to calculate the buying power of this order.',
      ],
    },
  },
];

export default mockData;