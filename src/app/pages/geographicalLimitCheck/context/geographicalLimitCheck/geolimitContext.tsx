import { createContext } from 'react';

interface GeolimitContext {
    geolimitInputData:any,
    setGeolimitInputData:any,
    geolimitMapData:any,
    setGeolimitMapData:any,
    isLoading:any,
    setIsLoading:any,
    geolimitResponse:any,
    setGeolimitResponse:any,
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any
}

const geolimitContext = createContext<GeolimitContext>({} as GeolimitContext);

export default geolimitContext;