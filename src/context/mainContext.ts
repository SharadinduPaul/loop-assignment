import React from 'react'
import { HeaderTypes, RowTypes } from '../types/tableDataTypes'

interface MainContextProps {
  data: RowTypes[]
  setData: (d: RowTypes[]) => void
  headers: HeaderTypes[]
  setHeaders: (d: HeaderTypes[]) => void
}

export const MainContext = React.createContext<MainContextProps>({
  data: [],
  setData: () => {},
  headers: [],
  setHeaders: () => {},
})
