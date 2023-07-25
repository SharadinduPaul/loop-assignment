import React from 'react';

import { MainContext } from '../../context/mainContext';
import { csvToArray } from '../../utils/converter';

export const Input = () => {
  const { setData, setHeaders } = React.useContext(MainContext)
  const [files, setFiles] = React.useState<FileList | null>(null)

  React.useEffect(() => {
    if (files && files[0]) {
      const file = files[0]
      csvToArray(file)
        .then((res: any) => {
          console.log(res)
          setData(res?.rows)
          setHeaders(res?.headers)
        })
        .catch((err) => console.log(err))
    }
  }, [files])

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFiles(e.target.files)}
      />
    </div>
  )
}
