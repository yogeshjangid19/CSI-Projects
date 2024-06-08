
import React from 'react';
import Table from '../components/Table';

const data = [
  { col1: 'Hello', col2: 'World' },
  { col1: 'react-table', col2: 'rocks' },
  { col1: 'whatever', col2: 'you want' },
];

const columns = [
  { Header: 'Column 1', accessor: 'col1' },
  { Header: 'Column 2', accessor: 'col2' },
  { Header: 'Column 3', accessor: 'col3' },
];

const Tables = () => {
  return <Table columns={columns} data={data} />;
};

export default Tables;