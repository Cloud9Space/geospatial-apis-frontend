import { createContext } from 'react';

interface ArielDistanceContext {
    arielDistanceInputData:any,
    setArielDistanceInputData:any,
    arielDistanceMapData:any,
    setArielDistanceMapData:any,
    isLoading:any,
    setIsLoading:any,
    arielDistanceResponse:any,
    setArielDistanceResponse:any
}

const arielDistanceContext = createContext<ArielDistanceContext>({} as ArielDistanceContext);

export default arielDistanceContext;