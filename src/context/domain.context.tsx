import {
  Context,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
} from "react";
import {
  ActionType as EntitiesActionType,
  entitiesReducer,
} from "../reducers/entities.reducer";
import {
  ActionType as FocusActionType,
  focusReducer,
} from "../reducers/focus.reducer";

import { IServicesContext, ServicesContext } from "./services.context";

export interface IDomainContext {
  entities: any[];
  isLoadingEntities: boolean;
  loadEntities: () => void;
  focusedEntityId: string;
  setFocusedEntityId: (entityId: string, initator: string) => void;
  focusInitiator: string;
  isMapDrawable: boolean;
  setIsMapDrawable: (isMapDrawable: boolean) => void;
}

export const DomainContext: Context<IDomainContext> =
  createContext<IDomainContext>({
    entities: [],
    isLoadingEntities: false,
    loadEntities: () => {},
    setFocusedEntityId: () => {},
    focusedEntityId: "",
    focusInitiator: "",
    isMapDrawable: false,
    setIsMapDrawable: () => {},
  });

export const DomainContextProvider = ({ children }: any) => {
  const [{ entities, isLoadingEntities }, dispatchEntities] = useReducer(
    entitiesReducer,
    {
      entities: [],
      isLoadingEntities: false,
    }
  );

  const [{ focusedEntityId, focusInitiator }, dispatchFocus] = useReducer(
    focusReducer,
    {
      focusedEntityId: "",
      focusInitiator: "",
    }
  );

  const setFocusedEntityId = (entityId: string, initiator: string) => {
    dispatchFocus({
      type: FocusActionType.FOCUS_ENTITY,
      payload: { entityId, initiator },
    });
  };

  const { entitiesService } = useContext<IServicesContext>(ServicesContext);

  const loadEntities = useCallback(() => {
    dispatchEntities({ type: EntitiesActionType.LOADING_ENTITIES });
    const fetchedEntities = entitiesService.getAllEntities();
    dispatchEntities({
      type: EntitiesActionType.LOADED_ENTITIES,
      payload: fetchedEntities,
    });
  }, [entitiesService]);

  const [isMapDrawable, setIsMapDrawable] = useState<boolean>(false);

  return (
    <DomainContext.Provider
      value={{
        entities,
        loadEntities,
        isLoadingEntities,
        focusedEntityId,
        setFocusedEntityId,
        focusInitiator,
        isMapDrawable,
        setIsMapDrawable,
      }}
      children={children}
    ></DomainContext.Provider>
  );
};
