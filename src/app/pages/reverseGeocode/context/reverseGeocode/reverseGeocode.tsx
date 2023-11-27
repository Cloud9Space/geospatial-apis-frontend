import { createContext } from 'react';

interface ReverseGeocodeContext {
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any,
    isLoading: any,
    setIsLoading: any,
}

const reverseGeocodeContext = createContext<ReverseGeocodeContext>({} as ReverseGeocodeContext);

export default reverseGeocodeContext;