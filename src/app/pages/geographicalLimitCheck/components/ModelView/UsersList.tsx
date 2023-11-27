import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
// import {UsersListHeader} from './components/header/Header'

// import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../../../_metronic/helpers'
import { Table } from './table/Table'

const List = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        {/* <UsersListHeader /> */}
        <Table />
      </KTCard>
      {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
    </>
  )
}

const ListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <List />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ListWrapper}
