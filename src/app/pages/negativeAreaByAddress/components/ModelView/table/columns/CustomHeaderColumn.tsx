// @ts-nocheck
import {FC} from 'react'
import {ColumnInstance} from 'react-table'
import {User} from '../../core/_models'
import { initTableData } from '../../..'
// import { initTableData } from '../Table'

type Props = {
  column: ColumnInstance<initTableData>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
  <>
    {column.Header && typeof column.Header === 'string' ? (
      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    ) : (
      column.render('Header')
    )}
  </>
)

export {CustomHeaderColumn}
