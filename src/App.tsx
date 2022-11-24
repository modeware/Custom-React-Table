import React from 'react';
import Table from './components/Table/table';
import { ITable } from './components/Table/tableInterface';

const tableData: ITable = {
  headers: [{title: 'id'}, {title: 'price'}, {title: 'item'}],
  rows: [
          {id: 1, price:2 , item: 'apple' },
          {id: 2, price:2 , item: 'banana' },
          {id: 3, price:4 , item: 'kiwi' },
          {id: 4, price:1 , item: 'Grape' },
        ]
}
function App() {
  return (
    <div className="App">
      <Table tableData={tableData} sortBy={["item", "price", "id"]}/>
    </div>
  );
}

export default App;
