
import { createContext } from 'react';

interface GeocodeContext {
    geocodeInputData: any,
    setGeocodeInputData: any,
    geocodeResponse: any,
    setGeocodeResponse: any,
    isLoading: any,
    setIsLoading: any,
    isDataLoaded: any,
    setIsDataLoaded: any
}

const geocodeContext = createContext<GeocodeContext>({} as GeocodeContext);

export default geocodeContext;