import React from 'react'
import './styles.css'
import { HeaderTypes } from '../../types/tableDataTypes'
import Multiselect from 'multiselect-react-dropdown'

interface FilterProps {
  allOptions: {
    [header in HeaderTypes]: {
      [y: string]: string
    }
  }
}
export const Filter = ({ allOptions }: FilterProps) => {

  return <div>{
    Object.keys(allOptions).map((header) => {
        return
        return <Multiselect
options={state.options} // Options to display in the dropdown
selectedValues={state.selectedValue} // Preselected value to persist in dropdown
onSelect={onSelect} // Function will trigger on select event
onRemove={onRemove} // Function will trigger on remove event
displayValue="name" // Property name to display in the dropdown options
/>
    })
    }</div>
}
