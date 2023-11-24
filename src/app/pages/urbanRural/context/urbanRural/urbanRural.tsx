import { createContext } from 'react';

interface UrbanRuralContext {
    tableData : any,
    setTableData : any,
    tableDataToShow:any,
    setTableDataToShow : any
}

const urbanRuralContext = createContext<UrbanRuralContext>({} as UrbanRuralContext);

export default urbanRuralContext;