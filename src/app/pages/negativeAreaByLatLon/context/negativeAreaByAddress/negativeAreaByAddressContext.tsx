import { createContext } from 'react';

interface NegativeAreaByAddressContext {
    negativeAreaInputData: any,
    setnegativeAreaInputData: any,
    negativeAreaResponse: any,
    setNegativeAreaResponse: any,
    isLoading: any,
    setIsLoading: any
}

const negativeAreaByAddressContext = createContext<NegativeAreaByAddressContext>({} as NegativeAreaByAddressContext);

export default negativeAreaByAddressContext;