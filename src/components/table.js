import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { getList } from '../backend/get_list'
import { color } from '@mui/system'
import { useState, useEffect } from 'react'
import axios from 'axios'

var price = require('../backend/get_list')

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'name', headerName: 'Name', width: 260 },
  {
    field: 'type',
    headerName: 'Type',
    width: 180,
  },
  {
    field: 'unit',
    headerName: 'Unit',
    type: 'number',
    width: 180,
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 300,
  },
]

const rows = [
  { id: 1, name: 'Snow', type: 'Jon', unit: 35, value: 12 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

//get_coin_list()
export default function DataTable() {
  const [b, setB] = useState([])

  async function reset() {
    const base_URL = 'https://api.coingecko.com/api/v3/'
    var rate2 = await axios.get(base_URL + '/exchange_rates')
    var data = rate2.data.rates
    var a = []
    for (var key in data) {
      a.push(data[key])
    }
    a.forEach((o, i) => (o.id = i + 1))
    if (b === a) {
      console.log('true')
    } else {
      console.log('false')
    }
    if (a) {
      setB(a)
    }
    return a
  }
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second to show price2 and b !')
      reset()
      console.log(b)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        height: 580,
        width: '100%',
        //backgroundColor: 'black',
      }}
    >
      <DataGrid
        rows={b}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

// console.log(results)
