import { useContext } from 'react'
import { Table } from 'react-bootstrap'

import { ISOToDate } from 'helpers/time'
import Text from 'ui-components/Text'
import { FilesToUploadContext } from 'context/filesToUpload'

export const TableComponent = () => {
  const { filesList } = useContext(FilesToUploadContext)

  return (
    <>
      {filesList.length !== 0 ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>File Name</th>
              <th>File Size</th>
              <th>File Type</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          {filesList?.map((file: any, i: any) => (
            <tbody key={file.name}>
              <tr>
                <td>{i + 1}</td>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.type}</td>
                <td>{ISOToDate(file.lastModified)}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      ) : (
        <Text center content="No files to display" option="subtitle" />
      )}
    </>
  )
}
