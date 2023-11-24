import {useContext, useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {usersColumns} from './columns/_columns'
import {User} from '../core/_models'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {UsersListPagination} from '../components/pagination/ListPagination'
import {KTCardBody} from '../../../../../_metronic/helpers'
import disasterZoneContext from '../../context/disasterZone/disasterZone'
// import { initTableData } from '../..'
export interface initTableData  {
  id:number,
  address: string,
  earthquakeHazardZoneCode:string,
  earthquakeHazardZoneValue:string,
  floodRiskZoneCode:string,
  floodRiskZoneValue:string,
  floodMaxSurgeHeight:string,
  windHazardZoneCode:string,
  windHazardZoneValue:string,
  windMaxSpeed:string,
  cycloneRiskZoneCode:string,
  cycloneRiskZoneValue:string,
  cycloneMaxSpeed:string,
  cycloneOccurance:string,
  LandSlideRiskZoneCode:string,
  LandSlideRiskZoneValue:string,
}



const Table = () => {
  const users = useQueryResponseData()
  const {tableDataToShow,setTableDataToShow}  = useContext(disasterZoneContext)
  console.log("tableDataToShow ",JSON.stringify(tableDataToShow))
  const isLoading = useQueryResponseLoading()
  // const data = useMemo(() => users, [users])
  // const rawdata = useMemo(() => tableData, [tableData])
  // const data = useMemo(()=>rawdata,[rawdata])
  const data = useMemo(()=>tableDataToShow,[tableDataToShow])
  const columns = useMemo(() => usersColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })
  console.log(data);
  console.log("columns"+columns[1]);

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<initTableData>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<initTableData>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <UsersListPagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export {Table}
