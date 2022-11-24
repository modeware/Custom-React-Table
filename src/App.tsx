import React from 'react';
import Table from './components/Table/table';
import { ITable } from './components/Table/tableInterface';

const tableData: ITable = {
  headers: [{title: 'id'}, {title: 'price'}, {title: 'item'}, {title: 'delete'}],
  rows: [
          {id: 1, price:2 , item: 'apples', delete: <button>X</button>},
          {id: 2, price:2 , item: 'banana', delete: <button>X</button>},
          {id: 3, price:4 , item: 'kiwi', delete: <button>X</button>},
          {id: 4, price:1 , item: 'Grape', delete: <button>X</button>},
        ]
}

const actionHandlers = {
  'delete': {
    handler: (event: any, key: any, arrayOFDataToFilter:Array<any>, dataToFilter: any) => {
      return arrayOFDataToFilter.filter((data: any, index: Number)=>{
          if(data[key] !== dataToFilter){
            return true
          }
          return false
      })
    }
  }
}

function App() {
  return (
    <div className="App">
      <Table tableData={tableData} sortBy={["item", "price", "id"]} actionHandlers={actionHandlers}/>
    </div>
  );
}

export default App;
