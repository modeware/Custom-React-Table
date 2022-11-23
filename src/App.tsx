import React from 'react';
import Table from './components/Table/table';
import { ITable } from './components/Table/tableInterface';

const tableData: ITable = {
  headers: [{title: 'id', type: Number}, {title: 'price', type: Number}, {title: 'item', type: String}],
  rows: [{id: 1, price:2 , item: 'apple' }, {id: 2, price:2 , item: 'banana' }]
}
function App() {
  return (
    <div className="App">
      <Table tableData={tableData}/>
    </div>
  );
}

export default App;
