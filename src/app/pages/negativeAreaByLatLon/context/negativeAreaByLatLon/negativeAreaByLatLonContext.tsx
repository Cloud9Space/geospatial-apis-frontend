import { createContext } from 'react';

interface NegativeAreaByLatLonContext {
    negativeAreaInputData: any,
    setnegativeAreaInputData: any,
    negativeAreaResponse: any,
    setNegativeAreaResponse: any,
    isLoading: any,
    setIsLoading: any,
    tableData : any,
    setTableData : any,
}

const negativeAreaByLatLonContext = createContext<NegativeAreaByLatLonContext>({} as NegativeAreaByLatLonContext);

export default negativeAreaByLatLonContext;