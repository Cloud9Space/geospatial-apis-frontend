import { useContext } from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './ListFilter'
import urbanRuralContext from '../../../context/urbanRural/urbanRural'

const UsersListToolbar = () => {
  const {tableDataToShow} = useContext(urbanRuralContext)
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  const downloadData = ()=>{
    const data = JSON.stringify(tableDataToShow);
    const blob = new Blob([data], { type: "text/json" });
    const a = document.createElement('a')
  a.download = "reverseGeocode.json"
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3' onClick={downloadData}>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {/* <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add User
      </button> */}
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
