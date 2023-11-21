import { createContext } from 'react';

interface DriveTimeDistanceContext {
    driveTimeDistanceInputData:any,
    setDriveTimeDistanceInputData:any,
    driveTimeDistanceMapData:any,
    setDriveTimeDistanceMapData:any,
    isLoading:any,
    setIsLoading:any,
    driveTimeDistanceResponse:any,
    setDriveTimeDistanceResponse:any
}

const driveTimeDistanceContext = createContext<DriveTimeDistanceContext>({} as DriveTimeDistanceContext);

export default driveTimeDistanceContext;