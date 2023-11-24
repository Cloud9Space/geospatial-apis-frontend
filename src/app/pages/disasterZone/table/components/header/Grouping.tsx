import {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelectedUsers} from '../../core/_requests'
import { initTableData } from '../../..'
import { useContext, useState } from 'react'
import disasterZoneContext from '../../../context/disasterZone/disasterZone'

const UsersListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse() as any
  const {tableData,setTableData}  = useContext(disasterZoneContext)
  const {tableDataToShow,setTableDataToShow}  = useContext(disasterZoneContext)


  // const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //     clearSelected()
  //   },
  // })

  const deleteSelectedItems = () => {
    console.log("selected",selected)
    let data = tableData.filter((item)=>{
      return !selected.includes(item.id)
    });
    console.log("data",data)
    setTableData(data);
    data = tableDataToShow.filter((item)=>{
      console.log("selected.includes(item.id)"+selected.includes(item.id))
      return !selected.includes(item.id)
    });
    setTableDataToShow(data);
    clearSelected();
  }
  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={ deleteSelectedItems}
      >
        Delete Selected
      </button>
    </div>
  )
}

export {UsersListGrouping}
