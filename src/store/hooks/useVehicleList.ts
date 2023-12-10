import { useContextSelector } from 'use-context-selector';
import { VehicleContext } from '../contexts/vehicleListContext';

export function useVehiclesList() {
  const vehicles = useContextSelector(VehicleContext, context => context.vehicles);
  const search = useContextSelector(VehicleContext, context => context.search);
  const setSearch = useContextSelector(VehicleContext, context => context.setSearch);
  const loadVehicles = useContextSelector(VehicleContext, context => context.loadVehicles);

  return { vehicles, search, setSearch, loadVehicles };
}
