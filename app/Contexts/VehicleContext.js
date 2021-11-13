import React, { createContext, useState, useEffect } from 'react';
import { VehicleService } from '../services/VehicleService';

const VehicleContext = createContext();

export const VehicleProvider = (props) => {

    const vehicleService = new VehicleService();
    
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        vehicleService.readAll().then(data => setVehicles(data));
    }, [vehicleService, vehicles]);

    return (
        <VehicleContext.Provider value={{ vehicles }}>
            { props.children }
        </VehicleContext.Provider>
    )
}

export default VehicleContext;