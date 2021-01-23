import React, { Component } from 'react'
import products_data from "./product_data.json"
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import TableFilter from 'react-table-filter';
import 'react-table-filter/lib/styles.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'updatedData': products_data
    };
    this._filterUpdated = this._filterUpdated.bind(this);
  }

  _filterUpdated(newData, filtersObject) {
    this.setState({
      'updatedData': newData,
    });
  }

  render() {

    const updatedData = this.state.updatedData;
    const columns = [{  
      Header: 'Features',  
      accessor: 'features',
     }
     ,{  
      Header: 'Specifications', 
      columns: [
        {
          Header: "Name",
          accessor: "specifications.0.name"
        },
        {
          Header: "Category",
          accessor: "specifications.0.category"
        },
        {
          Header: "Value",
          accessor: "specifications.0.value"
        }
      ] 
      }
    ,{  
        Header: 'ID',  
        accessor: '_id' ,
    }
    ,{  
     Header: 'Name',  
     accessor: 'name',
     },
     {  
      Header: 'Description',  
      accessor: 'description',
      },
      {  
      Header: 'Category',  
      accessor: 'category',
      }
      ,{  
        Header: 'Subcategory',  
        accessor: 'subcategory',
    }
    ,{  
     Header: 'CreatedAt',  
     accessor: 'createdAt',
     },
     {  
      Header: 'UpdatedAt',  
      accessor: 'updatedAt',
      },
      {  
      Header: 'V',  
      accessor: '__v',
      }
      ,{  
        Header: 'ModelId',  
        accessor: 'modelId' ,
    }
    ,{  
     Header: 'PID',  
     accessor: 'pid',
     },
     {  
      Header: 'Datasheet',  
      accessor: 'datasheet',
      },
      {  
      Header: 'Link',  
      accessor: 'link',
      }
      ,{  
        Header: 'Thumbnail',  
        accessor: 'thumbnail' ,
    }
  ]

  return (
    <div>
      <ReactTable  
    defaultPageSize={10}
    data={updatedData} 
    columns={columns}  
 />
 <TableFilter
  rows={updatedData}
  onFilterUpdate={this._filterUpdated}>
  <th key="category" filterkey="category" className="cell" casesensitive={'true'} showsearch={'true'}>
    Category
  </th>
  <th filterkey="subcategory">
    Subcategory
  </th>
</TableFilter>
    </div>
  )
  }
}
