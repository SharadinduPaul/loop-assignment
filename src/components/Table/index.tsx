import React from 'react'
import './styles.css'
import { MainContext } from '../../context/mainContext'
import DataTable from 'react-data-table-component'

export const Table = () => {
  const { data, headers } = React.useContext(MainContext)

  const columns = headers.map((header) => ({
    name: header,
    selector: (row: any) => row[header],
  }))

  console.log(columns, data)
//   const rows = 

  return (
    <div>
      <DataTable {...{ columns, data }} pagination />
    </div>
  )
}
