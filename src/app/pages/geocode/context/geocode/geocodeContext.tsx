
import { createContext } from 'react';

interface GeocodeContext {
    geocodeInputData: any,
    setGeocodeInputData: any,
    geocodeResponse: any,
    setGeocodeResponse: any,
    isLoading: any,
    setIsLoading: any,
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any
}

const geocodeContext = createContext<GeocodeContext>({} as GeocodeContext);

export default geocodeContext;