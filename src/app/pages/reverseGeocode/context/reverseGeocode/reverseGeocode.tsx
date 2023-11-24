import { createContext } from 'react';

interface ReverseGeocodeContext {
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any
}

const reverseGeocodeContext = createContext<ReverseGeocodeContext>({} as ReverseGeocodeContext);

export default reverseGeocodeContext;