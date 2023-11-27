import { createContext } from 'react';

interface DisasterZoneContext {
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any,
    isLoading:any,
    setIsLoading:any,
}

const disasterZoneContext = createContext<DisasterZoneContext>({} as DisasterZoneContext);

export default disasterZoneContext;