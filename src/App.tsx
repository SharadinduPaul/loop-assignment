import React from 'react'

import { Filter, Input, Table } from './components'
import { MainContext } from './context/mainContext'
import { HeaderTypes, RowTypes } from './types/tableDataTypes'
import { getAllFilterOptions } from './utils/getAllFilterOptions'

import './App.css'

function App() {
  //global context states
  const [data, setData] = React.useState<RowTypes[]>([])
  const [headers, setHeaders] = React.useState<HeaderTypes[]>([])


  //local states
  const [allOptions, setAllOptions] = React.useState<any>({})
  const [filterLoading, setFilterLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    //if data is present, get the filters for the current data
    if (data && data.length > 0) {
      setFilterLoading(true)
      getAllFilterOptions(data, headers)
        .then((res) => {
          setAllOptions(res)
          setFilterLoading(false)
        })
        .catch((err) => console.log(err))
    }
  }, [data])

  return (
    <MainContext.Provider
      value={{
        data,
        headers,
        setData,
        setHeaders,
      }}
    >
      <div>
        <Input />
        <Filter allOptions={allOptions} />
        <Table />
      </div>
    </MainContext.Provider>
  )
}

export default App
