/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import { initTableData } from '../../..'
// import {User} from '../../core/_models'
// import { initTableData } from '../Table'

type Props = {
  tableData: initTableData
}

const UserInfoCell: FC<Props> = ({tableData}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {/* {user.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${user.avatar}`)} alt={user.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${user.initials?.state}`,
              `text-${user.initials?.state}`
            )}
          >
            {user.initials?.label}
          </div>
        )} */}
      </a>
    </div>
    <div className='d-flex flex-column'>
      {/* <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {tableData.name}
      </a> */}
      {/* <span>{tableData.email}</span> */}
    </div>
  </div>
)

export {UserInfoCell}