import {
  Context,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { ActionType, entitiesReducer } from "../reducers/entities.reducer";

import { IServicesContext, ServicesContext } from "./services.context";

export interface IDomainContext {
  entities: any[];
  isLoadingEntities: boolean;
  loadEntities: () => void;
}

export const DomainContext: Context<IDomainContext> =
  createContext<IDomainContext>({
    entities: [],
    isLoadingEntities: false,
    loadEntities: () => {},
  });

export const DomainContextProvider = ({ children }: any) => {
  const [{ entities, isLoadingEntities }, dispatch] = useReducer(
    entitiesReducer,
    {
      entities: [],
      isLoadingEntities: false,
    }
  );

  const { entitiesService } = useContext<IServicesContext>(ServicesContext);

  const loadEntities = useCallback(() => {
    dispatch({ type: ActionType.LOADING_ENTITIES });
    const fetchedEntities = entitiesService.getAllEntities();
    dispatch({ type: ActionType.LOADED_ENTITIES, payload: fetchedEntities });
  }, [entitiesService]);

  return (
    <DomainContext.Provider
      value={{ entities, loadEntities, isLoadingEntities }}
      children={children}
    ></DomainContext.Provider>
  );
};
