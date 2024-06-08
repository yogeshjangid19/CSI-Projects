// src/components/Table.js
// src/components/Table.js
import React, {  useMemo } from 'react';
import { useTable } from 'react-table';
import './Table.css';

const Table = () => {
  const data = useMemo(() => [
    { col1: '21EJCIT147', col2: 'Yogesh Jangid' ,col3:'Admin'},
    { col1: '21EJCIT123', col2: 'Yogendra',col3:'Junior Accountant' },
    { col1: '21EJCIT121', col2: 'Yuvraj' ,col3:'Graphic Designer'},
    { col1: '21EJCT451', col2: 'Kartikey' ,col3:'TPO(Placement Officer)'},
    { col1: '21EJCS232', col2: 'Tisha',col3:'Professor(IT)' },
    { col1: '21ESIT369', col2: 'Rahul' ,col3:'Junior Assistant(IT)'},
     
  ], []);

  const columns = useMemo(() => [
    { Header: 'ID', accessor: 'col1' },
    { Header: 'Name', accessor: 'col2' },
    { Header: 'Department', accessor: 'col3' },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

