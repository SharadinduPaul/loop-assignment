export const csvToArray = (file: any) => {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    try {
      reader.onload = function (e) {
        const text = JSON.stringify(e.target?.result)

        const headers = text.split('\\n')[0].slice(1).split(',')

        let array = text
          .split('\\n')
          .map(function (line, index) {
            if (index > 0) {
              const arr = line.split(',')
              return {
                id: index,
                [headers[0]]: arr[0],
                [headers[1]]: arr[1],
                [headers[2]]: arr[2],
                [headers[3]]: arr[3],
                [headers[4]]: arr[4],
              }
            }
          })
          .slice(1)
        //   console.log(headers, array)
        resolve({
          headers: headers,
          rows: array,
        })
      }
      reader.readAsText(file)
    } catch (err) {
      reject(err)
    }
  })
}
