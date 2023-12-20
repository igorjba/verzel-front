import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext as createContextSelector } from 'use-context-selector';

interface Vehicle {
    id: string;
    name: string;
    brand: string;
    model: string;
    value: number;
    photo: string;
}

export interface VehiclesResponse {
    vehicles: Vehicle[];
}

interface VehicleContextType {
    vehicles: Vehicle[] | undefined;
    search: string;
    setSearch: (search: string) => void;
    loadVehicles: (page: number, limit: number, search: string) => Promise<void>;
}

interface VehicleProviderProps {
    children: ReactNode;
}

export const VehicleContext = createContextSelector<VehicleContextType>(
    {} as VehicleContextType,
);

export function VehicleProvider({ children }: VehicleProviderProps) {
    const [vehicles, setVehicles] = useState<Vehicle[] | undefined>(undefined);
    const [search, setSearch] = useState('');

    const loadVehicles = useCallback(async (page: number, limit: number, searchParam: string) => {
        try {
            const response = await fetch(`http://localhost:3333/vehicles?page=${page}&limit=${limit}&search=${searchParam}`);
            const data: Vehicle[] = await response.json();
            setVehicles(data);
        } catch (error) {
            console.error('Erro ao carregar veículos:', error);
        }
    }, [search]);

    useEffect(() => {
        loadVehicles(1, 10, search);
    }, [search, loadVehicles]);

    return (
        <VehicleContext.Provider value={{ vehicles, search, setSearch, loadVehicles }}>
            {children}
        </VehicleContext.Provider>
    );
}