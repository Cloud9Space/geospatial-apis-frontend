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
    Header: (props) => <UserCustomHeader tableProps={props} title1='Address' title2='' className='min-w-125px' />,
    id: 'address',
    accessor: 'address',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Earthquake' title2='Hazard_zone_code' className='min-w-125px' />,
    id: 'earthquakeHazardZoneCode',
    accessor: 'earthquakeHazardZoneCode',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Earthquake' title2='Hazard_zone_value' className='min-w-125px' />,
    id: 'earthquakeHazardZoneValue',
    accessor: 'earthquakeHazardZoneValue',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Flood' title2='Risk_zone_code' className='min-w-125px' />,
    id: 'floodRiskZoneCode',
    accessor: 'floodRiskZoneCode',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Flood' title2='Risk_zone_value' className='min-w-125px' />,
    id: 'floodRiskZoneValue',
    accessor: 'floodRiskZoneValue',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Flood' title2='Max_surge_height' className='min-w-125px' />,
    id: 'floodMaxSurgeHeight',
    accessor: 'floodMaxSurgeHeight',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Wind' title2='Hazard_zone_code' className='min-w-125px' />,
    id: 'windHazardZoneCode',
    accessor: 'windHazardZoneCode',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Wind' title2='Hazard_zone_value' className='min-w-125px' />,
    id: 'windHazardZoneValue',
    accessor: 'windHazardZoneValue',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Wind' title2='Max_speed' className='min-w-125px' />,
    id: 'windMaxSpeed',
    accessor: 'windMaxSpeed',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Cyclone' title2='Risk_zone_code' className='min-w-125px' />,
    id: 'cycloneRiskZoneCode',
    accessor: 'cycloneRiskZoneCode',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Cyclone' title2='Risk_zone_value' className='min-w-125px' />,
    id: 'cycloneRiskZoneValue',
    accessor: 'cycloneRiskZoneValue',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Cyclone' title2='Max_speed' className='min-w-125px' />,
    id: 'cycloneMaxSpeed',
    accessor: 'cycloneMaxSpeed',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='Cyclone' title2='Occurance' className='min-w-125px' />,
    id: 'cycloneOccurance',
    accessor: 'cycloneOccurance',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='LandSlide' title2='risk_zone_code' className='min-w-125px' />,
    id: 'LandSlideRiskZoneCode',
    accessor: 'LandSlideRiskZoneCode',
    // Cell: ({...props}) => <UserInfoCell tableData={props.data[props.row.index].latitude} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title1='LandSlide' title2='risk_zone_value' className='min-w-125px' />,
    id: 'LandSlideRiskZoneValue',
    accessor: 'LandSlideRiskZoneValue',
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
