import { Context, createContext, useMemo } from "react";
import { RouterService } from "../services/router/router.service";

import { APPLICATION_ROUTES_MAPPER } from "../consts/router.consts";
import { EntitiesService } from "../services/entities/entities.service";

export interface IServicesContext {
  routerService: RouterService;
  entitiesService: EntitiesService;
}

export const ServicesContext: Context<IServicesContext> =
  createContext<IServicesContext>({
    routerService: {} as RouterService,
    entitiesService: {} as EntitiesService,
  });

export const ServicesContextProvider = ({ children }: any) => {
  const routerService = useMemo(
    () => new RouterService(APPLICATION_ROUTES_MAPPER),
    [APPLICATION_ROUTES_MAPPER]
  );

  const entitiesService = useMemo(() => new EntitiesService(), []);

  return (
    <ServicesContext.Provider
      value={{ routerService, entitiesService }}
      children={children}
    ></ServicesContext.Provider>
  );
};
