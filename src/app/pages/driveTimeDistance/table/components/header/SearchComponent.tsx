/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
// import {initialQueryState, KTIcon, useDebounce} from '../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { KTIcon, initialQueryState, useDebounce } from '../../../../../../_metronic/helpers'
import driveTimeDistanceContext from '../../../context/driveTimeDistance/driveTimeDistance'


const UsersListSearchComponent = () => {
  const { updateState } = useQueryRequest()
  const { tableDataToShow, setTableDataToShow } = useContext(driveTimeDistanceContext)
  const { tableData } = useContext(driveTimeDistanceContext)
  const [searchTerm, setSearchTerm] = useState<string>('')
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 150)
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
        updateState({ search: debouncedSearchTerm, ...initialQueryState })
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
  )

  const search = (query) => {
    if (query === "") {
      console.log(tableData)
      return tableData;
    }

    let newData = tableData.filter((item) => {
      if (
        item.driveTimeDistance === query || item.sourceLatitude === query || item.sourceLongitude === query
        || item.destinationLatitude === query || item.destinationLongitude === query || item.id === query
      ) {
        return true;
      }
      return false;

    });

    return newData;
  }
  useEffect(() => {
    setTableDataToShow(search(searchTerm));
  }, [searchTerm])

  return (
    <div className='card-title'>
      {/* begin::Search */}
      <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* end::Search */}
    </div>
  )
}

export { UsersListSearchComponent }
