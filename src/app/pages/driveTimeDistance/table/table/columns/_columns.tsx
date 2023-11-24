// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'
import { initTableData } from '../Table'

const usersColumns: ReadonlyArray<Column<initTableData>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Source Latitude' className='min-w-125px' />,
    id: 'sourceLatitude',
    accessor: 'sourceLatitude',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Source Longitude' className='min-w-125px' />,
    id: 'sourceLongitude',
    accessor: 'sourceLongitude',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Destination Latitude' className='min-w-125px' />,
    id: 'destinationLatitude',
    accessor: 'destinationLatitude',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Destination Longitude' className='min-w-125px' />,
    id: 'destinationLongitude',
    accessor: 'destinationLongitude',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Drive Time Distance' className='min-w-125px' />,
    id: 'driveTimeDistance',
    accessor: 'driveTimeDistance',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
  //   accessor: 'role',
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
  //   ),
  //   id: 'actions',
  //   Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  // },
]

export {usersColumns}
