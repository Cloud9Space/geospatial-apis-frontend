import { createContext } from 'react';

interface AerialDistanceContext {
    aerialDistanceInputData:any,
    setAerialDistanceInputData:any,
    aerialDistanceMapData:any,
    setAerialDistanceMapData:any,
    isLoading:any,
    setIsLoading:any,
    aerialDistanceResponse:any,
    setAerialDistanceResponse:any
}

const aerialDistanceContext = createContext<AerialDistanceContext>({} as AerialDistanceContext);

export default aerialDistanceContext;