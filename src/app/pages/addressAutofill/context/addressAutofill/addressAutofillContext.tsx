
import { createContext } from 'react';

interface AddressAutofill {
    addressAutofillInputData: any,
    setAddressAutofillInputData: any,
    geocodeResponse: any,
    setGeocodeResponse: any,
    isLoading: any,
    setIsLoading: any,
    tableData : any,
    setTableData : any
}

const addressAutofill = createContext<AddressAutofill>({} as AddressAutofill);

export default addressAutofill;